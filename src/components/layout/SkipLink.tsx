import type { Dictionary } from "@/types/dictionary";

type SkipLinkProps = {
  dictionary: Dictionary;
};

export function SkipLink({ dictionary }: SkipLinkProps) {
  return (
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
    >
      {dictionary.skipToContent}
    </a>
  );
}
