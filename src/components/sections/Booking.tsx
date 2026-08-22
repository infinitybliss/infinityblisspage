import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";
import { getSectionId } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type BookingProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Booking({ locale, dictionary }: BookingProps) {
  const titleId = "booking-title";

  return (
    <Section
      id={getSectionId(locale, "booking")}
      ariaLabelledBy={titleId}
      className="bg-ivory"
    >
      <Container className="max-w-3xl text-center">
        <Eyebrow>{dictionary.booking.eyebrow}</Eyebrow>
        <h2
          id={titleId}
          className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl"
        >
          {dictionary.booking.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {dictionary.booking.text}
        </p>
        <div className="mt-8">
          <Button href={site.bookingHref}>{dictionary.booking.cta}</Button>
        </div>
        {/* SIMPLYBOOK.ME: replace the placeholder below with the booking widget or embed. */}
        <div
          className="mt-10 rounded-2xl border border-dashed border-stone bg-cream px-6 py-12"
          aria-label={dictionary.booking.placeholderLabel}
        >
          <p className="text-sm leading-relaxed text-muted">
            {dictionary.booking.placeholderText}
          </p>
        </div>
      </Container>
    </Section>
  );
}
