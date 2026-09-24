import { LegalDocument } from "@/components/legal/LegalDocument";
import { getLegalDocument } from "@/data/legal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  title: {
    absolute: "Cookie policy | Infinity Bliss",
  },
  description: dictionary.legal.cookies.description,
  ...getRouteAlternates("en", "cookies"),
};

export default function Page() {
  return (
    <main id="contenido">
      <LegalDocument document={getLegalDocument("cookies", "en")} />
    </main>
  );
}
