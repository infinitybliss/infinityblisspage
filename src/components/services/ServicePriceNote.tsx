type ServicePriceNoteProps = {
  note: string;
};

export function ServicePriceNote({ note }: ServicePriceNoteProps) {
  return (
    <p className="text-xs leading-relaxed text-muted">
      <span aria-hidden="true">* </span>
      {note}
    </p>
  );
}
