import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/types/locale";

type LocaleNotFoundProps = {
  locale: Locale;
};

export function LocaleNotFound({ locale }: LocaleNotFoundProps) {
  const dictionary = getDictionary(locale);

  return (
    <main id="contenido">
      <Container className="max-w-xl py-24 text-center">
        <h1 className="font-serif text-4xl text-foreground">
          {dictionary.notFound.title}
        </h1>
        <p className="mt-4 text-muted">{dictionary.notFound.text}</p>
        <div className="mt-8">
          <Button href={`/${locale}`}>{dictionary.notFound.cta}</Button>
        </div>
      </Container>
    </main>
  );
}
