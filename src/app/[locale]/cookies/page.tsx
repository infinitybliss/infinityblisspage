import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { getLegalDocument } from "@/data/legal";
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
    title: {
      absolute:
        validLocale === "es"
          ? "Política de Cookies | Ritual Essences"
          : "Política de cookies | Ritual Essences",
    },
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

  return (
    <main id="contenido">
      <LegalDocument document={getLegalDocument("cookies", validLocale)} />
    </main>
  );
}
