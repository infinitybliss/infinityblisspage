type PendingValueProps = {
  value: string | null;
  pendingLabel: string;
};

export function PendingValue({ value, pendingLabel }: PendingValueProps) {
  if (value) {
    return <span>{value}</span>;
  }

  return <span className="text-muted">{pendingLabel}</span>;
}
