import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/data/brand";
import type { Locale } from "@/types/locale";
import { getLocalizedHref } from "@/lib/i18n/paths";

type LogoProps = {
  locale: Locale;
  title: string;
  tagline?: string;
  onDark?: boolean;
  showTagline?: boolean;
  /** Header layout: isotipo on narrow screens, full logo from 390px. */
  compact?: boolean;
  /** Footer branding: wider mark so the vertical logo has presence. */
  size?: "default" | "footer";
};

export function Logo({
  locale,
  title,
  tagline,
  onDark = false,
  showTagline = false,
  compact = false,
  size = "default",
}: LogoProps) {
  const taglineClass = onDark ? "text-accent" : "text-muted";

  if (compact) {
    return (
      <Link
        href={getLocalizedHref(locale, "home")}
        aria-label={title}
        className="group inline-flex max-w-[min(100%,11.5rem)] items-center min-[390px]:max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] lg:max-w-[22rem]"
      >
        <Image
          src={brandAssets.isotipo}
          alt=""
          width={80}
          height={80}
          className="h-9 w-9 object-contain min-[390px]:hidden"
          priority
        />
        <Image
          src={brandAssets.logo}
          alt=""
          width={280}
          height={280}
          className="hidden h-10 w-auto max-w-full object-contain object-left min-[390px]:block sm:h-12 md:h-14 lg:h-[4.25rem]"
          priority
        />
      </Link>
    );
  }

  const isFooter = size === "footer";

  return (
    <Link
      href={getLocalizedHref(locale, "home")}
      aria-label={title}
      className={`group inline-flex max-w-full flex-col gap-2.5 ${
        isFooter ? "items-center" : "items-center sm:items-start"
      }`}
    >
      <Image
        src={brandAssets.logo}
        alt=""
        width={280}
        height={280}
        className={
          isFooter
            ? "h-auto w-[11rem] max-w-full object-contain object-center sm:w-[12rem] lg:w-[11.5rem]"
            : "h-[4.25rem] w-auto max-w-[14rem] object-contain object-left sm:h-20 sm:max-w-[16rem]"
        }
        priority
      />
      {showTagline && tagline && (
        <span
          className={`text-[0.6875rem] font-medium uppercase tracking-[0.2em] sm:text-xs ${taglineClass}`}
        >
          {tagline}
        </span>
      )}
    </Link>
  );
}
