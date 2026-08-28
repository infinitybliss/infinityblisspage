import { LegalDocument } from "@/components/legal/LegalDocument";
import { getLegalDocument } from "@/data/legal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

const dictionary = getDictionary("es");

export const metadata: Metadata = {
  title: {
    absolute: "Política de Cookies | Ritual Essences",
  },
  description: dictionary.legal.cookies.description,
  ...getRouteAlternates("es", "cookies"),
};

export default function Page() {
  return (
    <main id="contenido">
      <LegalDocument document={getLegalDocument("cookies", "es")} />
    </main>
  );
}
