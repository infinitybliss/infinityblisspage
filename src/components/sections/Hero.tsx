import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { getHomeSectionHref } from "@/lib/i18n/paths";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Hero({ locale, dictionary }: HeroProps) {
  const { hero } = dictionary;

  return (
    <section aria-labelledby="hero-title" className="bg-ivory">
      <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="max-w-xl">
          <h1
            id="hero-title"
            className="font-serif text-4xl leading-tight text-charcoal sm:text-5xl lg:text-[3.5rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {hero.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={getHomeSectionHref(locale, "booking")}>
              {hero.primaryCta}
            </Button>
            <Button
              href={getHomeSectionHref(locale, "services")}
              variant="secondary"
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
        <ImagePlaceholder
          label={hero.imageLabel}
          alt={hero.imageAlt}
          className="min-h-[20rem] lg:min-h-[28rem]"
        />
      </Container>
    </section>
  );
}
