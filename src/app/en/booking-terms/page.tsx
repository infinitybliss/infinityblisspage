import { LegalDocument } from "@/components/legal/LegalDocument";
import { getLegalDocument } from "@/data/legal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  title: dictionary.legal.bookingTerms.title,
  description: dictionary.legal.bookingTerms.description,
  ...getRouteAlternates("en", "bookingTerms"),
};

export default function Page() {
  return (
    <main id="contenido">
      <LegalDocument document={getLegalDocument("bookingTerms", "en")} />
    </main>
  );
}
