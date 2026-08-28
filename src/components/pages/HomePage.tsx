import { About } from "@/components/sections/About";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Pilgrims } from "@/components/sections/Pilgrims";
import { Reviews } from "@/components/sections/Reviews";
import { reviews } from "@/data/reviews";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/types/locale";

type HomePageProps = {
  locale: Locale;
};

export function HomePage({ locale }: HomePageProps) {
  const dictionary = getDictionary(locale);

  return (
    <main id="contenido">
      <Hero locale={locale} dictionary={dictionary} />
      <Intro dictionary={dictionary} />
      <FeaturedServices locale={locale} dictionary={dictionary} />
      <Pilgrims locale={locale} dictionary={dictionary} />
      <About locale={locale} dictionary={dictionary} />
      <Reviews dictionary={dictionary} reviews={reviews} />
      <Booking locale={locale} dictionary={dictionary} />
      <Contact locale={locale} dictionary={dictionary} />
    </main>
  );
}
