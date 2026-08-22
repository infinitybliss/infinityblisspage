import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import { categoryLabels } from "@/data/categories";
import { formatServiceMeta } from "@/lib/services/format";
import {
  getPilgrimFeaturedServices,
  getServiceHref,
  getServicesHref,
  localizeService,
} from "@/lib/services";
import { getSectionId } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type PilgrimsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Pilgrims({ locale, dictionary }: PilgrimsProps) {
  const titleId = "pilgrims-title";
  const pilgrimServices = getPilgrimFeaturedServices();

  return (
    <Section
      id={getSectionId(locale, "pilgrims")}
      ariaLabelledBy={titleId}
      className="bg-foreground py-20 sm:py-28 lg:py-32"
    >
      <Container className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="max-w-2xl">
          <Eyebrow className="text-secondary">{dictionary.pilgrims.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl leading-tight text-accent sm:text-4xl lg:text-5xl"
          >
            {dictionary.pilgrims.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-background/90 sm:text-lg">
            {dictionary.pilgrims.text}
          </p>
          <ul className="mt-8 space-y-4">
            {pilgrimServices.map((service) => {
              const localized = localizeService(service, locale);
              const meta = formatServiceMeta(service.durations, locale, {
                from: dictionary.services.fromPrice,
              });

              return (
                <li
                  key={service.id}
                  className="rounded-2xl border border-secondary/25 bg-background/5 p-5"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary">
                    {categoryLabels[service.category][locale]}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-accent">
                    <Link
                      href={getServiceHref(locale, service)}
                      className="hover:text-primary"
                    >
                      {localized.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/85">
                    {localized.shortDescription}
                  </p>
                  {meta && (
                    <p className="mt-2 text-sm font-medium text-background">
                      {meta}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="mt-10">
            <Button href={`${getServicesHref(locale)}#peregrinos`}>
              {dictionary.pilgrims.cta}
            </Button>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-secondary/30">
          <ImagePlaceholder
            label={dictionary.hero.imageLabel}
            alt={dictionary.hero.imageAlt}
            variant="light"
            className="min-h-[16rem] rounded-none sm:min-h-[20rem]"
          />
        </div>
      </Container>
    </Section>
  );
}
