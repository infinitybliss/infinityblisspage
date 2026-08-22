import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicesCatalog } from "@/lib/services";
import { getServiceBySlug } from "@/lib/services";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServiceDetailMetadata } from "@/lib/services/metadata";

export async function generateStaticParams() {
  return servicesCatalog.map((service) => ({ slug: service.slug.gl }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/servizos/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale || validLocale !== "gl") {
    return {};
  }
  const service = getServiceBySlug(validLocale, slug);
  if (!service) {
    return {};
  }
  return getServiceDetailMetadata(validLocale, service);
}

export default async function ServiceDetailPageGl({
  params,
}: PageProps<"/[locale]/servizos/[slug]">) {
  const { locale, slug } = await params;
  const validLocale = getLocaleFromParam(locale);

  if (!validLocale || validLocale !== "gl") {
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
