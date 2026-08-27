import Link from "next/link";
import type { ReactNode } from "react";

const variants = {
  primary:
    "bg-primary text-foreground hover:bg-primary-hover",
  secondary:
    "border border-border-subtle bg-transparent text-foreground hover:border-primary hover:text-primary",
  ghost: "text-foreground hover:text-primary",
  "on-dark":
    "bg-primary text-foreground hover:bg-primary-hover",
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
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

function isInternalHref(href: string): boolean {
  return href.startsWith("/") || href.startsWith("#");
}

export function Button(props: ButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const classes = `${baseClassName} ${variants[variant]} ${className}`;

  if (props.href) {
    if (isInternalHref(props.href)) {
      return (
        <Link
          href={props.href}
          className={classes}
          onClick={props.onClick}
          aria-label={props.ariaLabel}
        >
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
