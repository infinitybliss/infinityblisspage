import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ServiceBadge } from "@/components/services/ServiceBadge";
import { ServicePriceNote } from "@/components/services/ServicePriceNote";
import { categoryLabels } from "@/data/categories";
import { formatDurationOption } from "@/lib/services/format";
import { getBookingHref } from "@/lib/i18n/paths";
import { localizeService } from "@/lib/services";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";
import type { Service } from "@/types/service";

type ServiceDetailProps = {
  service: Service;
  locale: Locale;
  dictionary: Dictionary;
};

export function ServiceDetail({
  service,
  locale,
  dictionary,
}: ServiceDetailProps) {
  const localized = localizeService(service, locale);
  const categoryLabel = categoryLabels[service.category][locale];
  const hasNote = Boolean(localized.note);
  const hasMultipleDurations = localized.durations.length > 1;
  const singleDuration = localized.durations[0];
  const singleBookHref =
    !hasMultipleDurations && singleDuration
      ? getBookingHref(locale, {
          serviceId: service.id,
          durationMinutes: singleDuration.minutes,
        })
      : null;

  return (
    <main id="contenido">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div>
            <Eyebrow>{categoryLabel}</Eyebrow>
            {localized.badge && (
              <div className="mt-3">
                <ServiceBadge label={localized.badge} />
              </div>
            )}
            <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              {localized.name}
            </h1>
            {localized.tagline && (
              <p className="mt-4 text-lg leading-snug text-primary sm:text-xl">
                {localized.tagline}
              </p>
            )}
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {localized.description}
            </p>

            {localized.benefits.length > 0 && (
              <section aria-labelledby="service-benefits" className="mt-10">
                <h2
                  id="service-benefits"
                  className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-muted sm:text-sm"
                >
                  {dictionary.services.benefitsTitle}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {localized.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-muted sm:text-base"
                    >
                      <span aria-hidden="true" className="text-primary">
                        ·
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section aria-labelledby="service-durations" className="mt-10">
              <h2
                id="service-durations"
                className="text-[0.8125rem] font-medium uppercase tracking-[0.18em] text-muted sm:text-sm"
              >
                {dictionary.services.durationsTitle}
              </h2>
              {hasMultipleDurations ? (
                <ul className="mt-5 space-y-0">
                  {localized.durations.map((duration) => (
                    <li
                      key={`${duration.minutes}-${duration.price}`}
                      className="flex items-center justify-between gap-4 border-b border-border-subtle py-4 last:border-b-0"
                    >
                      <span className="text-base font-medium text-foreground sm:text-lg">
                        {formatDurationOption(duration, locale, hasNote)}
                      </span>
                      <Button
                        href={getBookingHref(locale, {
                          serviceId: service.id,
                          durationMinutes: duration.minutes,
                        })}
                        className="min-w-[7.5rem] shrink-0 px-5 py-2.5 text-sm sm:min-w-[8rem]"
                      >
                        {dictionary.services.bookDuration}
                      </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="mt-4 space-y-2">
                  {localized.durations.map((duration) => (
                    <li
                      key={`${duration.minutes}-${duration.price}`}
                      className="text-base font-medium text-foreground sm:text-lg"
                    >
                      {formatDurationOption(duration, locale, hasNote)}
                    </li>
                  ))}
                </ul>
              )}
              {localized.note && (
                <div className="mt-3">
                  <ServicePriceNote note={localized.note} />
                </div>
              )}
            </section>

            {singleBookHref && (
              <div className="mt-9">
                <Button href={singleBookHref}>
                  {dictionary.services.bookThisTreatment}
                </Button>
              </div>
            )}
          </div>

          <div>
            {service.image ? (
              <div className="relative min-h-[22rem] overflow-hidden rounded-2xl bg-sage-soft lg:min-h-[32rem]">
                <Image
                  src={service.image}
                  alt={localized.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <ImagePlaceholder
                label={dictionary.hero.imageLabel}
                alt={`${localized.name}. ${dictionary.hero.imageAlt}`}
                className="min-h-[22rem] lg:min-h-[32rem]"
              />
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
