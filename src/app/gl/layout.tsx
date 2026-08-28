import { LocaleLayoutShell } from "@/components/layout/LocaleLayoutShell";
import { site } from "@/data/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeOpenGraph } from "@/types/locale";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: getDictionary("gl").meta.title,
    template: `%s | ${site.name}`,
  },
  description: getDictionary("gl").meta.description,
  openGraph: {
    type: "website",
    locale: localeOpenGraph.gl,
    siteName: site.name,
    title: getDictionary("gl").meta.title,
    description: getDictionary("gl").meta.description,
  },
};

export default function GlLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleLayoutShell locale="gl">{children}</LocaleLayoutShell>;
}
