import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/data/site";
import { fontSans, fontSerif } from "@/lib/fonts";
import { getLocaleFromParam, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeHtmlLang, localeOpenGraph } from "@/types/locale";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#F7F3EE",
};

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);

  if (!validLocale) {
    return {};
  }

  const dictionary = getDictionary(validLocale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: dictionary.meta.title,
      template: `%s | ${site.name}`,
    },
    description: dictionary.meta.description,
    openGraph: {
      type: "website",
      locale: localeOpenGraph[validLocale],
      siteName: site.name,
      title: dictionary.meta.title,
      description: dictionary.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const validLocale = getLocaleFromParam(locale);

  if (!validLocale) {
    notFound();
  }

  const dictionary = getDictionary(validLocale);

  return (
    <html
      lang={localeHtmlLang[validLocale]}
      className={`${fontSans.variable} ${fontSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <SkipLink dictionary={dictionary} />
        <Header locale={validLocale} dictionary={dictionary} />
        <div className="flex-1">{children}</div>
        <Footer locale={validLocale} dictionary={dictionary} />
      </body>
    </html>
  );
}
