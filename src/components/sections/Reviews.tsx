import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/types/dictionary";
import type { Review } from "@/types/review";

type ReviewsProps = {
  dictionary: Dictionary;
  reviews: Review[];
};

export function Reviews({ dictionary, reviews }: ReviewsProps) {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <Section ariaLabelledBy="reviews-title" className="bg-background">
      <Container>
        <Eyebrow>{dictionary.reviews.eyebrow}</Eyebrow>
        <h2
          id="reviews-title"
          className="mt-3 font-serif text-3xl leading-tight text-foreground sm:text-4xl"
        >
          {dictionary.reviews.title}
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="rounded-2xl border border-border-subtle bg-surface p-6"
              lang={review.locale}
            >
              <blockquote>
                <p className="text-base leading-relaxed text-foreground">
                  “{review.quote}”
                </p>
                <footer className="mt-4 text-sm text-muted">{review.author}</footer>
              </blockquote>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
