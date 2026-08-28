import { LegalDocument } from "@/components/legal/LegalDocument";
import { getLegalDocument } from "@/data/legal";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getRouteAlternates } from "@/lib/i18n/metadata";
import type { Metadata } from "next";

const dictionary = getDictionary("gl");

export const metadata: Metadata = {
  title: {
    absolute: "Política de cookies | Ritual Essences",
  },
  description: dictionary.legal.cookies.description,
  ...getRouteAlternates("gl", "cookies"),
};

export default function Page() {
  return (
    <main id="contenido">
      <LegalDocument document={getLegalDocument("cookies", "gl")} />
    </main>
  );
}
