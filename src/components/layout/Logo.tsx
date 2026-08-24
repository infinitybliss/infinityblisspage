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
};

export function Logo({
  locale,
  title,
  tagline,
  onDark = false,
  showTagline = false,
}: LogoProps) {
  const titleClass = onDark
    ? "text-accent group-hover:text-primary"
    : "text-foreground group-hover:text-primary";
  const taglineClass = onDark ? "text-secondary" : "text-muted";

  return (
    <Link
      href={getLocalizedHref(locale, "home")}
      aria-label={title}
      className="group inline-flex items-center gap-2.5 sm:gap-3"
    >
      <BrandMark size={showTagline ? "lg" : "md"} />
      <span className="flex flex-col">
        <span
          className={`font-serif text-lg leading-tight tracking-wide transition-colors duration-200 sm:text-xl ${titleClass}`}
        >
          {title}
        </span>
        {showTagline && tagline && (
          <span
            className={`mt-0.5 text-[0.625rem] font-medium uppercase tracking-[0.22em] sm:text-xs ${taglineClass}`}
          >
            {tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
