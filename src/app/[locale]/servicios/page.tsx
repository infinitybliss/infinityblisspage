import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServicesPageMetadata } from "@/lib/services/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/servicios">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale || validLocale !== "es") {
    return {};
  }
  return getServicesPageMetadata(validLocale);
}

export default async function ServicesPageEs({
  params,
}: PageProps<"/[locale]/servicios">) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);

  if (!validLocale || validLocale !== "es") {
    notFound();
  }

  const dictionary = getDictionary(validLocale);
  return <ServicesCatalog locale={validLocale} dictionary={dictionary} />;
}
