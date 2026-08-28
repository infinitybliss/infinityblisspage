import { ServiceDetail } from "@/components/services/ServiceDetail";
import { servicesCatalog, getServiceBySlug } from "@/lib/services";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getServiceDetailMetadata } from "@/lib/services/metadata";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicesCatalog.map((service) => ({ slug: service.slug.gl }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug("gl", slug);
  if (!service) {
    return {};
  }
  return getServiceDetailMetadata("gl", service);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug("gl", slug);

  if (!service) {
    notFound();
  }

  const dictionary = getDictionary("gl");
  return (
    <ServiceDetail service={service} locale="gl" dictionary={dictionary} />
  );
}
