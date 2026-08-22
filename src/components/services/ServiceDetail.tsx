import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ServiceBadge } from "@/components/services/ServiceBadge";
import { ServicePriceNote } from "@/components/services/ServicePriceNote";
import { categoryLabels } from "@/data/categories";
import { formatDurationOption } from "@/lib/services/format";
import { getHomeSectionHref } from "@/lib/i18n/paths";
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

  return (
    <main id="contenido">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Eyebrow>{categoryLabel}</Eyebrow>
            {localized.badge && (
              <div className="mt-3">
                <ServiceBadge label={localized.badge} />
              </div>
            )}
            <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              {localized.name}
            </h1>
            {localized.tagline && (
              <p className="mt-4 text-lg text-primary">{localized.tagline}</p>
            )}
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {localized.description}
            </p>

            {localized.benefits.length > 0 && (
              <section aria-labelledby="service-benefits" className="mt-8">
                <h2
                  id="service-benefits"
                  className="text-sm font-medium uppercase tracking-[0.18em] text-secondary"
                >
                  {dictionary.services.benefitsTitle}
                </h2>
                <ul className="mt-4 space-y-2">
                  {localized.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex gap-2 text-sm leading-relaxed text-muted"
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

            <section aria-labelledby="service-durations" className="mt-8">
              <h2
                id="service-durations"
                className="text-sm font-medium uppercase tracking-[0.18em] text-secondary"
              >
                {dictionary.services.durationsTitle}
              </h2>
              <ul className="mt-4 space-y-2">
                {localized.durations.map((duration) => (
                  <li
                    key={`${duration.minutes}-${duration.price}`}
                    className="text-base font-medium text-foreground"
                  >
                    {formatDurationOption(duration, locale, hasNote)}
                  </li>
                ))}
              </ul>
              {localized.note && (
                <div className="mt-3">
                  <ServicePriceNote note={localized.note} />
                </div>
              )}
            </section>

            <div className="mt-10">
              <Button href={getHomeSectionHref(locale, "booking")}>
                {dictionary.services.bookCta}
              </Button>
            </div>
          </div>

          <div>
            {service.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={service.image}
                alt=""
                className="min-h-[20rem] w-full rounded-2xl object-cover"
              />
            ) : (
              <ImagePlaceholder
                label={dictionary.hero.imageLabel}
                alt={`${localized.name}. ${dictionary.hero.imageAlt}`}
                className="min-h-[20rem] lg:min-h-[28rem]"
              />
            )}
            {/* SIMPLYBOOK.ME: service-level booking widget can be mounted here later using service.bookingId */}
            <div
              id={`simplybook-service-${service.id}`}
              className="mt-6 rounded-2xl border border-dashed border-primary/30 bg-sand-soft/40 px-5 py-8"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
