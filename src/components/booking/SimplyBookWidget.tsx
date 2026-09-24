"use client";

import Script from "next/script";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BookingWidgetLoader } from "@/components/booking/BookingWidgetLoader";
import {
  getSimplyBookWidgetConfig,
  simplyBookWidgetScriptSrc,
} from "@/data/site";
import { getSimplyBookServiceUrl } from "@/lib/simplybook";

export type BookingWidgetStatus = "loading" | "ready" | "slow" | "error";

type SimplyBookWidgetProps = {
  loadingTitle: string;
  loadingSubtitle: string;
  slowText: string;
  errorText: string;
  errorLinkLabel: string;
  retryLabel: string;
  /** SimplyBook.me numeric service ID to preselect, when known. */
  bookingId?: number;
};

declare global {
  interface Window {
    SimplybookWidget?: new (config: object) => unknown;
  }
}

const SCRIPT_ID = "simplybook-widget-script";
const SLOW_TIMEOUT_MS = 8000;

/** Tracks which bookingId (or "all") was last bootstrapped in this document. */
let bootstrappedKey: string | null = null;

function bookingKey(bookingId?: number): string {
  return bookingId == null ? "all" : String(bookingId);
}

function isSignificantWidgetContent(container: HTMLElement): boolean {
  const iframe = container.querySelector("iframe");
  if (!iframe) {
    return false;
  }

  return iframe.clientHeight > 0 || iframe.offsetHeight > 0;
}

export function SimplyBookWidget({
  loadingTitle,
  loadingSubtitle,
  slowText,
  errorText,
  errorLinkLabel,
  retryLabel,
  bookingId,
}: SimplyBookWidgetProps) {
  const reactId = useId();
  const containerId = `simplybook-widget-mount-${reactId.replace(/:/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const slowTimeoutRef = useRef<number | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const iframeLoadCleanupRef = useRef<(() => void) | null>(null);
  const initAttemptRef = useRef(0);
  const [status, setStatus] = useState<BookingWidgetStatus>("loading");
  const [retryNonce, setRetryNonce] = useState(0);
  const key = bookingKey(bookingId);
  const fallbackUrl = getSimplyBookServiceUrl(bookingId);

  const clearSlowTimeout = useCallback(() => {
    if (slowTimeoutRef.current != null) {
      window.clearTimeout(slowTimeoutRef.current);
      slowTimeoutRef.current = null;
    }
  }, []);

  const clearObservers = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = null;
    iframeLoadCleanupRef.current?.();
    iframeLoadCleanupRef.current = null;
  }, []);

  const markReady = useCallback(() => {
    clearSlowTimeout();
    clearObservers();
    setStatus("ready");
  }, [clearObservers, clearSlowTimeout]);

  const markError = useCallback(() => {
    clearSlowTimeout();
    clearObservers();
    setStatus("error");
  }, [clearObservers, clearSlowTimeout]);

  const scheduleSlowState = useCallback(() => {
    clearSlowTimeout();
    slowTimeoutRef.current = window.setTimeout(() => {
      setStatus((current) => (current === "loading" ? "slow" : current));
    }, SLOW_TIMEOUT_MS);
  }, [clearSlowTimeout]);

  const watchIframe = useCallback(
    (container: HTMLElement) => {
      const attachToIframe = (iframe: HTMLIFrameElement) => {
        if (iframe.dataset.bookingReady === "true") {
          markReady();
          return;
        }

        const onLoad = () => {
          iframe.dataset.bookingReady = "true";
          markReady();
        };

        iframe.addEventListener("load", onLoad, { once: true });
        iframeLoadCleanupRef.current = () => {
          iframe.removeEventListener("load", onLoad);
        };

        try {
          if (iframe.contentDocument?.readyState === "complete") {
            onLoad();
          }
        } catch {
          // Cross-origin iframe: rely on the load event.
        }
      };

      const existingIframe = container.querySelector("iframe");
      if (existingIframe) {
        attachToIframe(existingIframe);
        return;
      }

      observerRef.current?.disconnect();
      observerRef.current = new MutationObserver(() => {
        const iframe = container.querySelector("iframe");
        if (!iframe) {
          return;
        }

        attachToIframe(iframe);

        if (isSignificantWidgetContent(container)) {
          markReady();
        }
      });

      observerRef.current.observe(container, {
        childList: true,
        subtree: true,
      });
    },
    [markReady],
  );

  const initWidget = useCallback(() => {
    const container = containerRef.current;
    initAttemptRef.current += 1;
    const attempt = initAttemptRef.current;

    if (!container) {
      return;
    }

    if (typeof window.SimplybookWidget !== "function") {
      markError();
      return;
    }

    if (bootstrappedKey === key && container.querySelector("iframe")) {
      watchIframe(container);
      if (isSignificantWidgetContent(container)) {
        markReady();
      }
      return;
    }

    try {
      container.replaceChildren();
      bootstrappedKey = key;

      new window.SimplybookWidget({
        ...getSimplyBookWidgetConfig(bookingId),
        container_id: containerId,
      });

      if (attempt !== initAttemptRef.current) {
        return;
      }

      const iframe = container.querySelector("iframe");
      if (!iframe) {
        markError();
        bootstrappedKey = null;
        return;
      }

      watchIframe(container);
      scheduleSlowState();
    } catch {
      bootstrappedKey = null;
      markError();
    }
  }, [
    bookingId,
    containerId,
    key,
    markError,
    markReady,
    scheduleSlowState,
    watchIframe,
  ]);

  const handleRetry = useCallback(() => {
    clearSlowTimeout();
    clearObservers();

    if (bootstrappedKey === key) {
      bootstrappedKey = null;
    }

    containerRef.current?.replaceChildren();
    setStatus("loading");
    setRetryNonce((value) => value + 1);

    if (typeof window.SimplybookWidget === "function") {
      window.requestAnimationFrame(() => {
        initWidget();
      });
      return;
    }

    window.location.reload();
  }, [clearObservers, clearSlowTimeout, initWidget, key]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (typeof window.SimplybookWidget === "function") {
        initWidget();
      } else {
        scheduleSlowState();
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
      clearSlowTimeout();
      clearObservers();
    };
  }, [clearObservers, clearSlowTimeout, initWidget, retryNonce, scheduleSlowState]);

  const showOverlay = status === "loading" || status === "slow";

  return (
    <div className="relative w-full min-h-[420px] sm:min-h-[520px]">
      <Script
        id={SCRIPT_ID}
        src={simplyBookWidgetScriptSrc}
        strategy="afterInteractive"
        onLoad={() => {
          initWidget();
        }}
        onError={() => {
          markError();
        }}
      />

      <div
        ref={containerRef}
        id={containerId}
        className={`w-full max-w-full overflow-x-hidden transition-opacity duration-300 [&_iframe]:block [&_iframe]:min-h-[420px] [&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:border-0 sm:[&_iframe]:min-h-[520px] ${
          status === "ready"
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={status !== "ready"}
      />

      {showOverlay && (
        <div className="absolute inset-0 z-10">
          <BookingWidgetLoader
            title={loadingTitle}
            subtitle={loadingSubtitle}
            showSlowMessage={status === "slow"}
            slowText={slowText}
            fallbackUrl={fallbackUrl}
            fallbackLabel={errorLinkLabel}
          />
        </div>
      )}

      {status === "error" && (
        <div
          className="absolute inset-0 z-10 flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-border-subtle bg-surface px-6 py-12 text-center sm:min-h-[520px] sm:px-10"
          role="alert"
        >
          <p className="max-w-md text-sm leading-relaxed text-muted">
            {errorText}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleRetry}
              className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-colors duration-200 hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {retryLabel}
            </button>
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {errorLinkLabel}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
