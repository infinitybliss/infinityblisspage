import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicesCatalog } from "@/lib/services";
import { getServiceBySlug } from "@/lib/services";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServiceDetailMetadata } from "@/lib/services/metadata";

export async function generateStaticParams() {
  return servicesCatalog.map((service) => ({ slug: service.slug.es }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/servicios/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale || validLocale !== "es") {
    return {};
  }
  const service = getServiceBySlug(validLocale, slug);
  if (!service) {
    return {};
  }
  return getServiceDetailMetadata(validLocale, service);
}

export default async function ServiceDetailPageEs({
  params,
}: PageProps<"/[locale]/servicios/[slug]">) {
  const { locale, slug } = await params;
  const validLocale = getLocaleFromParam(locale);

  if (!validLocale || validLocale !== "es") {
    notFound();
  }

  const service = getServiceBySlug(validLocale, slug);
  if (!service) {
    notFound();
  }

  const dictionary = getDictionary(validLocale);
  return (
    <ServiceDetail
      service={service}
      locale={validLocale}
      dictionary={dictionary}
    />
  );
}
