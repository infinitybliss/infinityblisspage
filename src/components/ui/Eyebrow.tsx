type EyebrowProps = {
  children: string;
  id?: string;
};

export function Eyebrow({ children, id }: EyebrowProps) {
  return (
    <p
      id={id}
      className="text-xs font-medium uppercase tracking-[0.22em] text-sage"
    >
      {children}
    </p>
  );
}
