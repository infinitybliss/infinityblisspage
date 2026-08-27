import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SimplyBookWidget } from "@/components/booking/SimplyBookWidget";
import { site } from "@/data/site";
import { getWhatsAppHref } from "@/lib/format";
import { getBookingHref } from "@/lib/i18n/paths";
import { formatDurationOption } from "@/lib/services/format";
import { localizeService } from "@/lib/services";
import type { ServiceBookingVariant } from "@/lib/services/booking";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type BookingPageContentProps = {
  locale: Locale;
  dictionary: Dictionary;
  selection: ServiceBookingVariant | null;
};

export function BookingPageContent({
  locale,
  dictionary,
  selection,
}: BookingPageContentProps) {
  const whatsappHref = getWhatsAppHref(site.contact.whatsapp);
  const bookingId = selection?.bookingId;
  const localized = selection
    ? localizeService(selection.service, locale)
    : null;
  const hasNote = Boolean(localized?.note);

  return (
    <main id="contenido" className="bg-background">
      <Container className="max-w-6xl py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{dictionary.booking.pageEyebrow}</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {dictionary.booking.pageTitle}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {dictionary.booking.pageDescription}
          </p>
        </div>

        {localized && selection && (
          <div className="mx-auto mt-8 max-w-xl text-center sm:mt-10">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary">
              {dictionary.booking.selectionLabel}
            </p>
            <p className="mt-2 font-serif text-2xl text-foreground">
              {localized.name}
            </p>
            <p className="mt-1 text-sm text-muted">
              {formatDurationOption(selection.variant, locale, hasNote)}
            </p>
            <Link
              href={getBookingHref(locale)}
              className="mt-3 inline-flex text-sm font-medium text-primary transition-colors duration-200 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {dictionary.booking.changeTreatment}
            </Link>
          </div>
        )}

        <div className="mt-10 w-full max-w-full overflow-x-hidden sm:mt-12">
          <SimplyBookWidget
            key={bookingId ?? "all"}
            bookingId={bookingId}
            loadingLabel={dictionary.booking.loadingLabel}
            errorText={dictionary.booking.errorText}
            errorLinkLabel={dictionary.booking.errorLinkLabel}
          />
        </div>

        <section
          aria-labelledby="booking-group-title"
          className="mx-auto mt-14 max-w-2xl border-t border-border-subtle pt-12 text-center sm:mt-16"
        >
          <h2
            id="booking-group-title"
            className="font-serif text-2xl text-foreground sm:text-3xl"
          >
            {dictionary.booking.groupTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {dictionary.booking.groupText}
          </p>
          {whatsappHref && (
            <div className="mt-8">
              <Button href={whatsappHref}>
                {dictionary.booking.groupCta}
              </Button>
            </div>
          )}
        </section>
      </Container>
    </main>
  );
}
