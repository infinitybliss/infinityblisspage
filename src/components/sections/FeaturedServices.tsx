import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { getSectionId } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type FeaturedServicesProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function FeaturedServices({ locale, dictionary }: FeaturedServicesProps) {
  const titleId = "services-title";

  return (
    <Section
      id={getSectionId(locale, "services")}
      ariaLabelledBy={titleId}
      className="bg-ivory"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{dictionary.services.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl"
          >
            {dictionary.services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {dictionary.services.text}
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const copy = dictionary.services.items[service.id];

            return (
              <ServiceCard
                key={service.id}
                name={copy.name}
                description={copy.description}
                durationMinutes={service.durationMinutes}
                priceEuros={service.priceEuros}
                imageSrc={service.imageSrc}
                durationLabel={dictionary.services.duration}
                imageLabel={dictionary.hero.imageLabel}
                imageAlt={`${copy.name}. ${dictionary.hero.imageAlt}`}
                locale={locale}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
