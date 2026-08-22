import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServicesPageMetadata } from "@/lib/services/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/servizos">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale || validLocale !== "gl") {
    return {};
  }
  return getServicesPageMetadata(validLocale);
}

export default async function ServicesPageGl({
  params,
}: PageProps<"/[locale]/servizos">) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);

  if (!validLocale || validLocale !== "gl") {
    notFound();
  }

  const dictionary = getDictionary(validLocale);
  return <ServicesCatalog locale={validLocale} dictionary={dictionary} />;
}
