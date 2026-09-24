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
    "text-[0.9375rem] text-background/75 transition-colors duration-200 hover:text-accent";
  const sectionTitleClassName = "text-sm font-medium tracking-wide text-accent";

  return (
    <footer className="bg-foreground text-background">
      <Container className="py-14 sm:py-16 lg:py-16">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-x-10 md:gap-y-12 md:text-left lg:grid-cols-[minmax(0,1.15fr)_repeat(3,minmax(0,1fr))] lg:items-start lg:gap-x-12 lg:gap-y-0">
          <div className="flex flex-col items-center text-center md:col-span-3 lg:col-span-1">
            <Logo
              locale={locale}
              title={dictionary.brand.name}
              onDark
              size="footer"
            />
            <p className="mt-3.5 text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-accent">
              {dictionary.brand.tagline}
            </p>
            <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-background/65 lg:max-w-[16.5rem]">
              {dictionary.footer.blurb}
            </p>
          </div>

          <div>
            <p className={sectionTitleClassName}>{dictionary.footer.nav}</p>
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
            <p className={sectionTitleClassName}>{dictionary.footer.contact}</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] leading-relaxed text-background/75">
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
              <li>
                <PendingValue
                  value={site.contact.email}
                  pendingLabel={dictionary.contact.pending}
                />
              </li>
            </ul>
          </div>

          <div>
            <p className={sectionTitleClassName}>{dictionary.footer.legal}</p>
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

      <div className="border-t border-accent/20">
        <Container className="flex flex-col items-center gap-2 py-7 text-center text-sm text-background/55 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {dictionary.brand.name}. {dictionary.footer.rights}
          </p>
          <p className="sm:text-right">{site.city}</p>
        </Container>
      </div>
    </footer>
  );
}
