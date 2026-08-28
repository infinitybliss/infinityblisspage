import { LocaleLayoutShell } from "@/components/layout/LocaleLayoutShell";
import { site } from "@/data/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeOpenGraph } from "@/types/locale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: getDictionary("en").meta.title,
    template: `%s | ${site.name}`,
  },
  description: getDictionary("en").meta.description,
  openGraph: {
    type: "website",
    locale: localeOpenGraph.en,
    siteName: site.name,
    title: getDictionary("en").meta.title,
    description: getDictionary("en").meta.description,
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleLayoutShell locale="en">{children}</LocaleLayoutShell>;
}
