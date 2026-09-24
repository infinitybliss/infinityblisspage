import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaImage } from "@/components/ui/MediaImage";
import { siteImages } from "@/data/media";
import { getBookingHref } from "@/lib/i18n/paths";
import { getServicesHref } from "@/lib/services";
import type { Dictionary } from "@/types/dictionary";
import type { Locale } from "@/types/locale";

type HeroProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function Hero({ locale, dictionary }: HeroProps) {
  const { hero } = dictionary;

  return (
    <section aria-labelledby="hero-title" className="bg-background">
      <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <span
            aria-hidden="true"
            className="mb-5 inline-block h-px w-10 bg-accent"
          />
          <h1
            id="hero-title"
            className="font-serif text-4xl leading-[1.15] text-foreground sm:text-5xl lg:text-[3.5rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {hero.text}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={getBookingHref(locale)}>
              {hero.primaryCta}
            </Button>
            <Button href={getServicesHref(locale)} variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
        <MediaImage
          image={siteImages.hero}
          locale={locale}
          priority
          className="min-h-[20rem] lg:min-h-[28rem]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </Container>
    </section>
  );
}
