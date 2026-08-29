import Link from "next/link";
import { BrandMark } from "@/components/layout/BrandMark";
import type { Locale } from "@/types/locale";
import { getLocalizedHref } from "@/lib/i18n/paths";

type LogoProps = {
  locale: Locale;
  title: string;
  tagline?: string;
  onDark?: boolean;
  showTagline?: boolean;
  /** Header layout: stacked wordmark from 390px, icon-only below. */
  compact?: boolean;
};

function splitBrandTitle(title: string): [string, string] | null {
  const parts = title.trim().split(/\s+/);
  if (parts.length < 2) {
    return null;
  }

  return [parts[0], parts.slice(1).join(" ")];
}

export function Logo({
  locale,
  title,
  tagline,
  onDark = false,
  showTagline = false,
  compact = false,
}: LogoProps) {
  const titleClass = onDark
    ? "text-accent group-hover:text-primary"
    : "text-foreground group-hover:text-primary";
  const taglineClass = onDark ? "text-secondary" : "text-muted";
  const stacked = compact ? splitBrandTitle(title) : null;

  if (compact) {
    return (
      <Link
        href={getLocalizedHref(locale, "home")}
        aria-label={title}
        className="group inline-flex items-center gap-2 min-[390px]:gap-2.5 md:gap-3"
      >
        <BrandMark
          size="md"
          className="!h-9 !w-9 min-[390px]:!h-8 min-[390px]:!w-8 md:!h-10 md:!w-10"
        />
        {stacked ? (
          <>
            <span
              className={`hidden min-[390px]:flex flex-col font-serif leading-[1.05] tracking-wide transition-colors duration-200 md:hidden ${titleClass}`}
              aria-hidden="true"
            >
              <span className="text-[1.05rem]">{stacked[0]}</span>
              <span className="text-[1.05rem]">{stacked[1]}</span>
            </span>
            <span
              className={`hidden font-serif text-[1.375rem] leading-tight tracking-wide transition-colors duration-200 md:inline ${titleClass}`}
              aria-hidden="true"
            >
              {title}
            </span>
          </>
        ) : (
          <span
            className={`hidden min-[390px]:inline font-serif text-[1.05rem] leading-tight tracking-wide transition-colors duration-200 md:text-[1.375rem] ${titleClass}`}
            aria-hidden="true"
          >
            {title}
          </span>
        )}
      </Link>
    );
  }

  return (
    <Link
      href={getLocalizedHref(locale, "home")}
      aria-label={title}
      className="group inline-flex items-center gap-2.5 sm:gap-3"
    >
      <BrandMark size={showTagline ? "lg" : "md"} />
      <span className="flex flex-col">
        <span
          className={`font-serif text-xl leading-tight tracking-wide transition-colors duration-200 sm:text-[1.375rem] ${titleClass}`}
        >
          {title}
        </span>
        {showTagline && tagline && (
          <span
            className={`mt-1 text-[0.6875rem] font-medium uppercase tracking-[0.2em] sm:text-xs ${taglineClass}`}
          >
            {tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
