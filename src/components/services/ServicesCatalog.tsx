import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServiceCard } from "@/components/services/ServiceCard";
import { UpcomingServices } from "@/components/services/UpcomingServices";
import { categoryLabels, categoryOrder } from "@/data/categories";
import {
  getPilgrimFeaturedServices,
  getServicesByCategory,
} from "@/lib/services";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type ServicesCatalogProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ServicesCatalog({ locale, dictionary }: ServicesCatalogProps) {
  const pilgrimServices = getPilgrimFeaturedServices();

  return (
    <main id="contenido">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <Eyebrow>{dictionary.services.pageEyebrow}</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {dictionary.services.pageTitle}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {dictionary.services.pageDescription}
          </p>
        </div>

        <section
          id="peregrinos"
          aria-labelledby="pilgrims-services-title"
          className="mt-16 scroll-mt-24 rounded-2xl bg-foreground px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
        >
          <h2
            id="pilgrims-services-title"
            className="font-serif text-3xl text-accent sm:text-4xl"
          >
            {dictionary.pilgrims.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/90 sm:text-lg">
            {dictionary.services.pilgrimsIntro}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
            {pilgrimServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                locale={locale}
                dictionary={dictionary}
                accent={index % 2 === 0 ? "primary" : "secondary"}
                compact
              />
            ))}
          </div>
        </section>

        {categoryOrder.map((category) => {
          const items = getServicesByCategory(category);
          if (items.length === 0) {
            return null;
          }

          return (
            <section
              key={category}
              id={category}
              aria-labelledby={`category-${category}`}
              className="mt-16 scroll-mt-24"
            >
              <h2
                id={`category-${category}`}
                className="font-serif text-3xl text-foreground sm:text-4xl"
              >
                {categoryLabels[category][locale]}
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    locale={locale}
                    dictionary={dictionary}
                    accent={index % 2 === 0 ? "primary" : "secondary"}
                  />
                ))}
              </div>
            </section>
          );
        })}

        <UpcomingServices locale={locale} dictionary={dictionary} />
      </Container>
    </main>
  );
}
