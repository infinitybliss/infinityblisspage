import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { getBookingHref, getSectionId } from "@/lib/i18n/paths";
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
      className="bg-background-alt py-20 sm:py-24 lg:py-28"
    >
      <Container className="max-w-2xl text-center">
        <Eyebrow>{dictionary.booking.eyebrow}</Eyebrow>
        <h2
          id={titleId}
          className="mt-4 font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
        >
          {dictionary.booking.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {dictionary.booking.text}
        </p>
        <div className="mt-9">
          <Button href={getBookingHref(locale)}>
            {dictionary.booking.cta}
          </Button>
        </div>
        <p className="mt-5 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
          {dictionary.booking.secondaryText}
        </p>
      </Container>
    </Section>
  );
}
