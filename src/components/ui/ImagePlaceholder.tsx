type ImagePlaceholderProps = {
  label: string;
  alt: string;
  className?: string;
};

export function ImagePlaceholder({
  label,
  alt,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <figure
      className={`relative flex h-full overflow-hidden rounded-2xl bg-sage-soft ${className}`}
    >
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(156,81,52,0.12),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(111,127,105,0.28),transparent_46%)]"
      />
      <figcaption className="relative z-10 m-5 mt-auto w-fit rounded-full bg-ivory/80 px-3 py-1 text-xs tracking-wide text-muted">
        {label}
      </figcaption>
    </figure>
  );
}
