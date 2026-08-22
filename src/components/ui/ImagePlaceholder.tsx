type ImagePlaceholderProps = {
  label: string;
  alt: string;
  className?: string;
  variant?: "light" | "neutral";
};

export function ImagePlaceholder({
  label,
  alt,
  className = "",
  variant = "neutral",
}: ImagePlaceholderProps) {
  const surfaceClass =
    variant === "light" ? "bg-surface/10" : "bg-sage-soft";

  return (
    <figure
      className={`relative flex h-full overflow-hidden rounded-2xl ${surfaceClass} ${className}`}
    >
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--placeholder-copper),transparent_42%),radial-gradient(circle_at_80%_70%,var(--placeholder-sage),transparent_46%)]"
      />
      <figcaption className="relative z-10 m-5 mt-auto w-fit rounded-full bg-surface/90 px-3 py-1 text-xs tracking-wide text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
