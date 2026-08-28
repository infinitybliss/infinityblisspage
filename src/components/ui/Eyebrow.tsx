type EyebrowProps = {
  children: string;
  id?: string;
  className?: string;
};

export function Eyebrow({ children, id, className = "" }: EyebrowProps) {
  return (
    <p
      id={id}
      className={`text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-muted sm:text-sm ${className}`}
    >
      {children}
    </p>
  );
}
