import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-copper text-white hover:bg-copper-hover",
  secondary:
    "border border-charcoal/15 bg-transparent text-charcoal hover:border-copper hover:text-copper",
  ghost:
    "text-charcoal hover:text-copper",
} as const;

type ButtonVariant = keyof typeof variants;

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaLabel?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  onClick?: () => void;
  ariaExpanded?: never;
  ariaControls?: never;
  ariaLabel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClassName =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors";

function isInternalHref(href: string): boolean {
  return href.startsWith("/") || href.startsWith("#");
}

export function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const classes = `${baseClassName} ${variants[variant]} ${className}`;

  if (props.href) {
    if (isInternalHref(props.href)) {
      return (
        <Link href={props.href} className={classes} onClick={props.onClick} aria-label={props.ariaLabel}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={props.href}
        className={classes}
        onClick={props.onClick}
        aria-label={props.ariaLabel}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      className={classes}
      onClick={props.onClick}
      aria-expanded={props.ariaExpanded}
      aria-controls={props.ariaControls}
      aria-label={props.ariaLabel}
    >
      {children}
    </button>
  );
}
