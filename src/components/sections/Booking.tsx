import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { SimplyBookWidget } from "@/components/booking/SimplyBookWidget";
import { site } from "@/data/site";
import { getTelHref } from "@/lib/format";
import { getSectionId } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type BookingProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Booking({ locale, dictionary }: BookingProps) {
  const titleId = "booking-title";
  const phoneHref = getTelHref(site.contact.phone);

  return (
    <Section
      id={getSectionId(locale, "booking")}
      ariaLabelledBy={titleId}
      className="bg-sand-soft py-20 sm:py-24"
    >
      <Container className="max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{dictionary.booking.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            {dictionary.booking.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {dictionary.booking.text}
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-5xl overflow-x-hidden rounded-2xl border border-primary/15 bg-background/70 p-3 sm:p-5">
          <SimplyBookWidget
            loadingLabel={dictionary.booking.loadingLabel}
            errorText={dictionary.booking.errorText}
            errorLinkLabel={dictionary.booking.errorLinkLabel}
          />
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-muted">
            {dictionary.booking.helpText}
          </p>
          {site.contact.phone && phoneHref && (
            <a
              href={phoneHref}
              className="mt-2 inline-flex text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              {site.contact.phone}
            </a>
          )}
        </div>
      </Container>
    </Section>
  );
}
