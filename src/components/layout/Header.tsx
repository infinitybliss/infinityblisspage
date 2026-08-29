import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { getBookingHref, getHomeSectionHref } from "@/lib/i18n/paths";
import { getServicesHref } from "@/lib/services";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  const navLinks = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: getServicesHref(locale), label: dictionary.nav.services },
    { href: getHomeSectionHref(locale, "pilgrims"), label: dictionary.nav.pilgrims },
    { href: getHomeSectionHref(locale, "about"), label: dictionary.nav.about },
    { href: getHomeSectionHref(locale, "contact"), label: dictionary.nav.contact },
  ];

  const bookHref = getBookingHref(locale);

  return (
    <header className="relative sticky top-0 z-50 border-b border-border-subtle bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full min-w-0 max-w-6xl items-center justify-between gap-2 px-3 sm:h-[4.5rem] sm:gap-4 sm:px-6 lg:px-8">
        <div className="shrink-0">
          <Logo locale={locale} title={dictionary.brand.name} compact />
        </div>
        <nav aria-label={dictionary.nav.main} className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.9375rem] text-foreground">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Suspense fallback={null}>
            <LocaleSwitcher
              locale={locale}
              dictionary={dictionary}
              compact
            />
          </Suspense>
          <Button
            href={bookHref}
            className="!min-h-10 !px-3.5 !py-2 !text-sm sm:!min-h-11 sm:!px-7 sm:!py-3 sm:!text-[0.9375rem]"
          >
            {dictionary.nav.book}
          </Button>
          <MobileNav
            dictionary={dictionary}
            links={navLinks}
            bookHref={bookHref}
          />
        </div>
      </div>
    </header>
  );
}
