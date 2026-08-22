import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import { getSectionId } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type AboutProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function About({ locale, dictionary }: AboutProps) {
  const titleId = "about-title";
  const points = dictionary.about.points;

  return (
    <Section id={getSectionId(locale, "about")} ariaLabelledBy={titleId}>
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <ImagePlaceholder
          label={dictionary.about.imageLabel}
          alt={dictionary.about.imageAlt}
          className="min-h-[18rem] lg:min-h-[28rem]"
        />
        <div>
          <Eyebrow>{dictionary.about.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl"
          >
            {dictionary.about.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {dictionary.about.text}
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {Object.values(points).map((point) => (
              <li key={point.title}>
                <h3 className="font-serif text-xl text-charcoal">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
