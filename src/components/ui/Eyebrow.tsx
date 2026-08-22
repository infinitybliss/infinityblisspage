type EyebrowProps = {
  children: string;
  id?: string;
  className?: string;
};

export function Eyebrow({ children, id, className = "" }: EyebrowProps) {
  return (
    <p
      id={id}
      className={`text-xs font-medium uppercase tracking-[0.22em] text-secondary ${className}`}
    >
      {children}
    </p>
  );
}
