import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { localeHtmlLang } from "@/types/locale";
import type { Locale } from "@/types/locale";
import type { ReactNode } from "react";

type LocaleLayoutShellProps = {
  locale: Locale;
  children: ReactNode;
};

export function LocaleLayoutShell({ locale, children }: LocaleLayoutShellProps) {
  const dictionary = getDictionary(locale);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(localeHtmlLang[locale])}`,
        }}
      />
      <SkipLink dictionary={dictionary} />
      <Header locale={locale} dictionary={dictionary} />
      <div className="flex-1">{children}</div>
      <Footer locale={locale} dictionary={dictionary} />
    </>
  );
}
