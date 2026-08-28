import { LocaleLayoutShell } from "@/components/layout/LocaleLayoutShell";
import { site } from "@/data/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeOpenGraph } from "@/types/locale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: getDictionary("es").meta.title,
    template: `%s | ${site.name}`,
  },
  description: getDictionary("es").meta.description,
  openGraph: {
    type: "website",
    locale: localeOpenGraph.es,
    siteName: site.name,
    title: getDictionary("es").meta.title,
    description: getDictionary("es").meta.description,
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleLayoutShell locale="es">{children}</LocaleLayoutShell>;
}
