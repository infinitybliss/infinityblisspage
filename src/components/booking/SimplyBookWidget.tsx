"use client";

import Script from "next/script";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  simplyBookWidgetConfig,
  simplyBookWidgetScriptSrc,
  site,
} from "@/data/site";

type SimplyBookWidgetProps = {
  loadingLabel: string;
  errorText: string;
  errorLinkLabel: string;
};

type WidgetStatus = "loading" | "ready" | "error";

declare global {
  interface Window {
    SimplybookWidget?: new (config: object) => unknown;
  }
}

const SCRIPT_ID = "simplybook-widget-script";

/** Prevents duplicate widget bootstrap across React Strict Mode remounts. */
let widgetBootstrapped = false;

export function SimplyBookWidget({
  loadingLabel,
  errorText,
  errorLinkLabel,
}: SimplyBookWidgetProps) {
  const reactId = useId();
  const containerId = `simplybook-widget-mount-${reactId.replace(/:/g, "")}`;
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<WidgetStatus>("loading");

  const markReady = useCallback(() => {
    setStatus("ready");
  }, []);

  const initWidget = useCallback(() => {
    const container = containerRef.current;

    if (typeof window.SimplybookWidget !== "function" || !container) {
      setStatus("error");
      return;
    }

    // Already initialized: keep the iframe if present.
    if (widgetBootstrapped) {
      if (container.querySelector("iframe")) {
        markReady();
      }
      return;
    }

    try {
      widgetBootstrapped = true;

      // Official SimplyBook.me bootstrap.
      // container_id is required in SPAs: without it the widget calls
      // document.write() and wipes the React page.
      new window.SimplybookWidget({
        ...simplyBookWidgetConfig,
        container_id: containerId,
      });

      const iframe = container.querySelector("iframe");
      if (iframe) {
        iframe.addEventListener("load", markReady, { once: true });
        // Fallback if load already fired or is blocked by timing.
        window.setTimeout(markReady, 1500);
      } else {
        setStatus("error");
        widgetBootstrapped = false;
      }
    } catch {
      widgetBootstrapped = false;
      setStatus("error");
    }
  }, [containerId, markReady]);

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
            href={site.bookingUrl}
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
