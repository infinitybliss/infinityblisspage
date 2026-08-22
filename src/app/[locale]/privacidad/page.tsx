import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPlaceholder } from "@/components/legal/LegalPlaceholder";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacidad">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale) {
    return {};
  }
  const dictionary = getDictionary(validLocale);
  return {
    title: dictionary.legal.privacy.title,
    description: dictionary.legal.privacy.description,
    ...getRouteAlternates(validLocale, "privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/privacidad">) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale) {
    notFound();
  }
  const dictionary = getDictionary(validLocale);

  return (
    <main id="contenido">
      <LegalPlaceholder
        title={dictionary.legal.privacy.title}
        body={dictionary.legal.pendingBody}
      />
    </main>
  );
}
