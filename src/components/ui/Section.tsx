import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  ariaLabelledBy?: string;
};

export function Section({
  id,
  children,
  className = "",
  as: Component = "section",
  ariaLabelledBy,
}: SectionProps) {
  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-28 ${className}`}
    >
      {children}
    </Component>
  );
}
