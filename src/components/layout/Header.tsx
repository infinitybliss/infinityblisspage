import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { getHomeSectionHref } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type HeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Header({ locale, dictionary }: HeaderProps) {
  const navLinks = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: getHomeSectionHref(locale, "services"), label: dictionary.nav.services },
    { href: getHomeSectionHref(locale, "pilgrims"), label: dictionary.nav.pilgrims },
    { href: getHomeSectionHref(locale, "about"), label: dictionary.nav.about },
    { href: getHomeSectionHref(locale, "contact"), label: dictionary.nav.contact },
  ];

  const bookHref = getHomeSectionHref(locale, "booking");

  return (
    <header className="sticky top-0 z-50 border-b border-stone/80 bg-ivory/90 backdrop-blur-sm">
      <Container className="relative flex h-16 items-center justify-between gap-3 sm:h-[4.5rem]">
        <Logo locale={locale} title={dictionary.brand.name} />
        <nav aria-label={dictionary.nav.main} className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm text-charcoal">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-copper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3 sm:gap-4">
          <LocaleSwitcher locale={locale} dictionary={dictionary} />
          <Button href={bookHref} className="hidden sm:inline-flex">
            {dictionary.nav.book}
          </Button>
          <MobileNav
            dictionary={dictionary}
            links={navLinks}
            bookHref={bookHref}
          />
        </div>
      </Container>
    </header>
  );
}
