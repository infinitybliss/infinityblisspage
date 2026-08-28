type ServiceBadgeProps = {
  label: string;
};

export function ServiceBadge({ label }: ServiceBadgeProps) {
  return (
    <span className="inline-block w-fit rounded-full bg-sage-soft px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-muted">
      {label}
    </span>
  );
}
