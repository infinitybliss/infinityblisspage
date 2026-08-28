import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Dictionary } from "@/types/dictionary";

type BookingPageFallbackProps = {
  dictionary: Dictionary;
};

export function BookingPageFallback({ dictionary }: BookingPageFallbackProps) {
  return (
    <main id="contenido" className="bg-background" aria-busy="true">
      <Container className="max-w-6xl py-12 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>{dictionary.booking.pageEyebrow}</Eyebrow>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
            {dictionary.booking.pageTitle}
          </h1>
          <p className="mt-8 text-sm text-muted" role="status">
            {dictionary.booking.loadingLabel}
          </p>
        </div>
      </Container>
    </main>
  );
}
