import { LocaleLayoutShell } from "@/components/layout/LocaleLayoutShell";
import { site } from "@/data/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { seoAssets } from "@/lib/seo";
import { localeOpenGraph } from "@/types/locale";
import type { Metadata } from "next";

const dictionary = getDictionary("gl");

export const metadata: Metadata = {
  title: {
    default: dictionary.meta.title,
    template: `%s | ${site.name}`,
  },
  description: dictionary.meta.description,
  openGraph: {
    type: "website",
    locale: localeOpenGraph.gl,
    siteName: site.name,
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    url: `${site.url}/gl`,
    images: [
      {
        url: seoAssets.ogImage,
        width: 1024,
        height: 691,
        alt: seoAssets.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    images: [seoAssets.ogImage],
  },
};

export default function GlLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleLayoutShell locale="gl">{children}</LocaleLayoutShell>;
}
