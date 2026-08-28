import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaImage } from "@/components/ui/MediaImage";
import { Section } from "@/components/ui/Section";
import { siteImages } from "@/data/media";
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
    <Section
      id={getSectionId(locale, "about")}
      ariaLabelledBy={titleId}
      className="bg-background"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <MediaImage
          image={siteImages.about}
          locale={locale}
          className="min-h-[20rem] lg:min-h-[30rem]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div>
          <Eyebrow>{dictionary.about.eyebrow}</Eyebrow>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            {dictionary.about.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {dictionary.about.text}
          </p>
          <ul className="mt-10 grid gap-7 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
            {Object.values(points).map((point, index) => (
              <li key={point.title}>
                <span
                  aria-hidden="true"
                  className={`mb-3 inline-block h-px w-7 ${index % 2 === 0 ? "bg-secondary" : "bg-muted"}`}
                />
                <h3 className="font-serif text-[1.375rem] leading-snug text-foreground sm:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted sm:text-base">
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
