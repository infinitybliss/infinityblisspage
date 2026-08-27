"use client";

import Script from "next/script";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  getSimplyBookWidgetConfig,
  simplyBookWidgetScriptSrc,
} from "@/data/site";
import { getSimplyBookServiceUrl } from "@/lib/simplybook";

type SimplyBookWidgetProps = {
  loadingLabel: string;
  errorText: string;
  errorLinkLabel: string;
  /** SimplyBook.me numeric service ID to preselect, when known. */
  bookingId?: number;
};

type WidgetStatus = "loading" | "ready" | "error";

declare global {
  interface Window {
    SimplybookWidget?: new (config: object) => unknown;
  }
}

const SCRIPT_ID = "simplybook-widget-script";

/** Tracks which bookingId (or "all") was last bootstrapped in this document. */
let bootstrappedKey: string | null = null;

function bookingKey(bookingId?: number): string {
  return bookingId == null ? "all" : String(bookingId);
}

export function SimplyBookWidget({
  loadingLabel,
  errorText,
  errorLinkLabel,
  bookingId,
}: SimplyBookWidgetProps) {
  const reactId = useId();
  const containerId = `simplybook-widget-mount-${reactId.replace(/:/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<WidgetStatus>("loading");
  const key = bookingKey(bookingId);
  const fallbackUrl = getSimplyBookServiceUrl(bookingId);

  const markReady = useCallback(() => {
    setStatus("ready");
  }, []);

  const initWidget = useCallback(() => {
    const container = containerRef.current;

    if (typeof window.SimplybookWidget !== "function" || !container) {
      setStatus("error");
      return;
    }

    // Already initialized for this selection: keep the iframe if present.
    if (bootstrappedKey === key) {
      if (container.querySelector("iframe")) {
        markReady();
      }
      return;
    }

    try {
      container.replaceChildren();
      bootstrappedKey = key;

      // Official SimplyBook.me bootstrap.
      // container_id is required in SPAs: without it the widget calls
      // document.write() and wipes the React page.
      new window.SimplybookWidget({
        ...getSimplyBookWidgetConfig(bookingId),
        container_id: containerId,
      });

      const iframe = container.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", markReady, { once: true });
        // Fallback if load already fired or is blocked by timing.
        window.setTimeout(markReady, 1500);
      } else {
        setStatus("error");
        bootstrappedKey = null;
      }
    } catch {
      bootstrappedKey = null;
      setStatus("error");
    }
  }, [bookingId, containerId, key, markReady]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (typeof window.SimplybookWidget === "function") {
        initWidget();
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [initWidget]);

  useEffect(() => {
    if (status !== "loading") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      if (!containerRef.current?.querySelector("iframe")) {
        setStatus("error");
      }
    }, 10000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [status]);

  return (
    <div className="w-full">
      <Script
        id={SCRIPT_ID}
        src={simplyBookWidgetScriptSrc}
        strategy="afterInteractive"
        onLoad={() => {
          initWidget();
        }}
        onError={() => setStatus("error")}
      />

      {status === "loading" && (
        <p
          className="py-16 text-center text-sm text-muted"
          role="status"
          aria-live="polite"
        >
          {loadingLabel}
        </p>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-border-subtle bg-surface px-6 py-10 text-center">
          <p className="text-sm leading-relaxed text-muted">{errorText}</p>
          <a
            href={fallbackUrl}
            className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {errorLinkLabel}
          </a>
        </div>
      )}

      <div
        ref={containerRef}
        id={containerId}
        className={`w-full max-w-full overflow-x-hidden [&_iframe]:block [&_iframe]:min-h-[640px] [&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:border-0 ${
          status === "ready" ? "block" : status === "loading" ? "sr-only" : "hidden"
        }`}
        aria-hidden={status !== "ready"}
      />
    </div>
  );
}
