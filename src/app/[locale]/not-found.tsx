import { notFound } from "next/navigation";
import { locale } from "next/root-params";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getLocaleFromParam } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

export default async function LocaleNotFound() {
  const rawLocale = await locale();
  const validLocale = getLocaleFromParam(rawLocale ?? "");

  if (!validLocale) {
    notFound();
  }

  const dictionary = getDictionary(validLocale);

  return (
    <main id="contenido">
      <Container className="max-w-xl py-24 text-center">
        <h1 className="font-serif text-4xl text-charcoal">
          {dictionary.notFound.title}
        </h1>
        <p className="mt-4 text-muted">{dictionary.notFound.text}</p>
        <div className="mt-8">
          <Button href={`/${validLocale}`}>{dictionary.notFound.cta}</Button>
        </div>
      </Container>
    </main>
  );
}
