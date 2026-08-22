import Link from "next/link";
import type { Locale } from "@/types/locale";
import { getLocalizedHref } from "@/lib/i18n/paths";

type LogoProps = {
  locale: Locale;
  title: string;
};

export function Logo({ locale, title }: LogoProps) {
  return (
    <Link
      href={getLocalizedHref(locale, "home")}
      className="font-serif text-xl tracking-wide text-charcoal sm:text-2xl"
    >
      {title}
    </Link>
  );
}
