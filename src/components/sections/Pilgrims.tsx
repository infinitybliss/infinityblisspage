import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import { getHomeSectionHref, getSectionId } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type PilgrimsProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Pilgrims({ locale, dictionary }: PilgrimsProps) {
  const titleId = "pilgrims-title";

  return (
    <Section
      id={getSectionId(locale, "pilgrims")}
      ariaLabelledBy={titleId}
      className="bg-sage-soft/60"
    >
      <Container className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-2xl">
          <Eyebrow>{dictionary.pilgrims.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl"
          >
            {dictionary.pilgrims.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {dictionary.pilgrims.text}
          </p>
          <div className="mt-8">
            <Button href={getHomeSectionHref(locale, "services")}>
              {dictionary.pilgrims.cta}
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-sage/20 bg-ivory p-6 sm:p-8">
          <p className="font-serif text-2xl text-charcoal">{dictionary.brand.name}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {dictionary.brand.tagline}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-charcoal">
            {dictionary.intro.text}
          </p>
        </div>
      </Container>
    </Section>
  );
}
