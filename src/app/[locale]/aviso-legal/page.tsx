import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPlaceholder } from "@/components/legal/LegalPlaceholder";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/aviso-legal">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale) {
    return {};
  }
  const dictionary = getDictionary(validLocale);
  return {
    title: dictionary.legal.notice.title,
    description: dictionary.legal.notice.description,
    ...getRouteAlternates(validLocale, "legalNotice"),
  };
}

export default async function LegalNoticePage({
  params,
}: PageProps<"/[locale]/aviso-legal">) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);
  if (!validLocale) {
    notFound();
  }
  const dictionary = getDictionary(validLocale);

  return (
    <main id="contenido">
      <LegalPlaceholder
        title={dictionary.legal.notice.title}
        body={dictionary.legal.pendingBody}
      />
    </main>
  );
}
