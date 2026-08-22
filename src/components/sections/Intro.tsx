import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";
import type { Dictionary } from "@/types/dictionary";

type IntroProps = {
  dictionary: Dictionary;
};

export function Intro({ dictionary }: IntroProps) {
  return (
    <Section ariaLabelledBy="intro-title">
      <Container className="max-w-3xl text-center">
        <Eyebrow>{dictionary.intro.eyebrow}</Eyebrow>
        <h2
          id="intro-title"
          className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl"
        >
          {dictionary.intro.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {dictionary.intro.text}
        </p>
      </Container>
    </Section>
  );
}
