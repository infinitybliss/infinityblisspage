import { LegalDocument } from "@/components/legal/LegalDocument";
import { getLegalDocument } from "@/data/legal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

const dictionary = getDictionary("es");

export const metadata: Metadata = {
  title: dictionary.legal.privacy.title,
  description: dictionary.legal.privacy.description,
  ...getRouteAlternates("es", "privacy"),
};

export default function Page() {
  return (
    <main id="contenido">
      <LegalDocument document={getLegalDocument("privacy", "es")} />
    </main>
  );
}
