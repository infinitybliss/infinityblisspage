import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { UpcomingServiceCard } from "@/components/services/UpcomingServiceCard";
import { upcomingServices } from "@/data/services/upcoming";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type UpcomingServicesProps = {
  locale: Locale;
  dictionary: Dictionary;
  /** Compact home variant uses a shorter title and section padding. */
  variant?: "page" | "home";
};

export function UpcomingServices({
  locale,
  dictionary,
  variant = "page",
}: UpcomingServicesProps) {
  if (upcomingServices.length === 0) {
    return null;
  }

  const titleId = variant === "home" ? "upcoming-home-title" : "upcoming-title";
  const title =
    variant === "home"
      ? dictionary.upcoming.homeTitle
      : dictionary.upcoming.title;
  const description =
    variant === "home"
      ? dictionary.upcoming.homeText
      : dictionary.upcoming.text;

  const content = (
    <>
      <div className="max-w-2xl">
        {variant === "page" && (
          <Eyebrow>{dictionary.upcoming.eyebrow}</Eyebrow>
        )}
        <h2
          id={titleId}
          className={`font-serif leading-tight text-foreground ${
            variant === "home"
              ? "text-3xl sm:text-4xl"
              : "mt-3 text-3xl sm:text-4xl"
          }`}
        >
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
          {description}
        </p>
      </div>
      <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6">
        {upcomingServices.map((service, index) => (
          <UpcomingServiceCard
            key={service.id}
            service={service}
            locale={locale}
            dictionary={dictionary}
            accent={index % 2 === 0 ? "primary" : "secondary"}
          />
        ))}
      </div>
    </>
  );

  if (variant === "home") {
    return (
      <Section
        id="proximamente"
        ariaLabelledBy={titleId}
        className="bg-background-alt/40"
      >
        <Container>{content}</Container>
      </Section>
    );
  }

  return (
    <section
      id="proximamente"
      aria-labelledby={titleId}
      className="mt-20 scroll-mt-24 rounded-2xl bg-background-alt px-5 py-10 sm:mt-24 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      {content}
    </section>
  );
}
