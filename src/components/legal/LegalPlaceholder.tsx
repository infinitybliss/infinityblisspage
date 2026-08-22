import { Container } from "@/components/ui/Container";

type LegalPlaceholderProps = {
  title: string;
  body: string;
};

export function LegalPlaceholder({ title, body }: LegalPlaceholderProps) {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="font-serif text-4xl text-charcoal">{title}</h1>
      <p className="mt-6 text-base leading-relaxed text-muted">{body}</p>
    </Container>
  );
}
