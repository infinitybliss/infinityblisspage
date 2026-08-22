import { About } from "@/components/sections/About";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Pilgrims } from "@/components/sections/Pilgrims";
import { Reviews } from "@/components/sections/Reviews";
import { reviews } from "@/data/reviews";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale) {
    return {};
  }
  return getRouteAlternates(validLocale, "home");
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);

  if (!validLocale) {
    notFound();
  }

  const dictionary = getDictionary(validLocale);

  return (
    <main id="contenido">
      <Hero locale={validLocale} dictionary={dictionary} />
      <Intro dictionary={dictionary} />
      <FeaturedServices locale={validLocale} dictionary={dictionary} />
      <Pilgrims locale={validLocale} dictionary={dictionary} />
      <About locale={validLocale} dictionary={dictionary} />
      <Reviews dictionary={dictionary} reviews={reviews} />
      <Booking locale={validLocale} dictionary={dictionary} />
      <Contact locale={validLocale} dictionary={dictionary} />
    </main>
  );
}
