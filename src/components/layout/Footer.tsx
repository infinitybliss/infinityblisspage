import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { PendingValue } from "@/components/ui/PendingValue";
import { site } from "@/data/site";
import { getBookingHref, getHomeSectionHref, getLocalizedHref } from "@/lib/i18n/paths";
import { getServicesHref } from "@/lib/services";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type FooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Footer({ locale, dictionary }: FooterProps) {
  const navLinks = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: getServicesHref(locale), label: dictionary.nav.services },
    { href: getBookingHref(locale), label: dictionary.nav.book },
    { href: getHomeSectionHref(locale, "pilgrims"), label: dictionary.nav.pilgrims },
    { href: getHomeSectionHref(locale, "about"), label: dictionary.nav.about },
    { href: getHomeSectionHref(locale, "contact"), label: dictionary.nav.contact },
  ];

  const legalLinks = [
    { href: getLocalizedHref(locale, "legalNotice"), label: dictionary.footer.legalNotice },
    { href: getLocalizedHref(locale, "privacy"), label: dictionary.footer.privacy },
    { href: getLocalizedHref(locale, "cookies"), label: dictionary.footer.cookies },
    {
      href: getLocalizedHref(locale, "bookingTerms"),
      label: dictionary.footer.bookingTerms,
    },
  ];

  const year = new Date().getFullYear();
  const linkClassName =
    "text-[0.9375rem] text-background/75 transition-colors duration-200 hover:text-primary";

  return (
    <footer className="bg-foreground text-background">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <Logo
            locale={locale}
            title={dictionary.brand.name}
            tagline={dictionary.brand.tagline}
            onDark
            showTagline
          />
        </div>

        <div className="mt-10 grid gap-10 border-t border-secondary/25 pt-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-3">
          <div>
            <p className="text-sm font-medium tracking-wide text-background">
              {dictionary.footer.nav}
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium tracking-wide text-background">
              {dictionary.footer.contact}
            </p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-background/75">
              <li>
                <PendingValue
                  value={site.contact.address}
                  pendingLabel={dictionary.contact.pending}
                />
              </li>
              <li>
                <PendingValue
                  value={site.contact.phone}
                  pendingLabel={dictionary.contact.pending}
                />
              </li>
              <li>{site.city}</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-medium tracking-wide text-background">
              {dictionary.footer.legal}
            </p>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-secondary/25">
        <Container className="flex flex-col gap-2 py-6 text-center text-sm text-background/60 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {dictionary.brand.name}. {dictionary.footer.rights}
          </p>
          <p className="sm:text-right">{site.city}</p>
        </Container>
      </div>
    </footer>
  );
}
