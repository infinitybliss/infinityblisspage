import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPlaceholder } from "@/components/legal/LegalPlaceholder";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/cookies">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale) {
    return {};
  }
  const dictionary = getDictionary(validLocale);
  return {
    title: dictionary.legal.cookies.title,
    description: dictionary.legal.cookies.description,
    ...getRouteAlternates(validLocale, "cookies"),
  };
}

export default async function CookiesPage({
  params,
}: PageProps<"/[locale]/cookies">) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale) {
    notFound();
  }
  const dictionary = getDictionary(validLocale);

  return (
    <main id="contenido">
      <LegalPlaceholder
        title={dictionary.legal.cookies.title}
        body={dictionary.legal.pendingBody}
      />
    </main>
  );
}
