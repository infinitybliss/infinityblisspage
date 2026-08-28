type BookingWidgetLoaderProps = {
  title: string;
  subtitle: string;
  showSlowMessage?: boolean;
  slowText?: string;
  fallbackUrl?: string;
  fallbackLabel?: string;
};

export function BookingWidgetLoader({
  title,
  subtitle,
  showSlowMessage = false,
  slowText,
  fallbackUrl,
  fallbackLabel,
}: BookingWidgetLoaderProps) {
  return (
    <div
      className="flex min-h-[420px] w-full flex-col items-center justify-center rounded-2xl border border-border-subtle bg-surface/80 px-6 py-12 text-center backdrop-blur-[2px] sm:min-h-[520px] sm:px-10"
      role="status"
      aria-live="polite"
    >
      <div
        className="mb-8 flex h-10 w-10 items-center justify-center text-primary"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="h-8 w-8 opacity-80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4C12 8 8 12 8 17c0 4.4 3.6 8 8 8s8-3.6 8-8c0-5-4-9-8-13z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="booking-loader-leaf"
          />
        </svg>
      </div>

      <h2 className="font-serif text-xl text-foreground sm:text-2xl">{title}</h2>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
        {subtitle}
      </p>

      <div
        className="booking-loader-dots mt-10"
        aria-hidden="true"
      >
        <span className="booking-loader-dot" />
        <span className="booking-loader-dot booking-loader-dot-delay-1" />
        <span className="booking-loader-dot booking-loader-dot-delay-2" />
      </div>

      {showSlowMessage && slowText && fallbackUrl && fallbackLabel && (
        <div className="mt-10 max-w-md border-t border-border-subtle pt-8">
          <p className="text-sm leading-relaxed text-muted">{slowText}</p>
          <a
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full border border-border-subtle bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {fallbackLabel}
          </a>
        </div>
      )}
    </div>
  );
}
