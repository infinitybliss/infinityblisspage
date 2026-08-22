import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { ServiceCard } from "@/components/services/ServiceCard";
import { getFeaturedServices } from "@/lib/services";
import { getSectionId } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type FeaturedServicesProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function FeaturedServices({ locale, dictionary }: FeaturedServicesProps) {
  const titleId = "services-title";
  const featured = getFeaturedServices();

  return (
    <Section
      id={getSectionId(locale, "services")}
      ariaLabelledBy={titleId}
      className="bg-background"
    >
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{dictionary.services.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
          >
            {dictionary.services.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {dictionary.services.text}
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {featured.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              dictionary={dictionary}
              accent={index % 2 === 0 ? "primary" : "secondary"}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
