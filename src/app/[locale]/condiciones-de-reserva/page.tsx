import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { getLegalDocument } from "@/data/legal";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/condiciones-de-reserva">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale || validLocale !== "es") {
    return {};
  }
  const dictionary = getDictionary(validLocale);
  return {
    title: dictionary.legal.bookingTerms.title,
    description: dictionary.legal.bookingTerms.description,
    ...getRouteAlternates(validLocale, "bookingTerms"),
  };
}

export default async function BookingTermsEsPage({
  params,
}: PageProps<"/[locale]/condiciones-de-reserva">) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale || validLocale !== "es") {
    notFound();
  }

  return (
    <main id="contenido">
      <LegalDocument document={getLegalDocument("bookingTerms", validLocale)} />
    </main>
  );
}
