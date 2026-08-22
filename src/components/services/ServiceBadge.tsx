type ServiceBadgeProps = {
  label: string;
};

export function ServiceBadge({ label }: ServiceBadgeProps) {
  return (
    <span className="inline-block w-fit rounded-full bg-sage-soft px-2.5 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.16em] text-secondary">
      {label}
    </span>
  );
}
