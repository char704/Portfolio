export default function ChapterLabel({ index, title }) {
  return (
    <div className="flex items-center gap-3 text-xs font-bold uppercase text-muted">
      <span className="rounded-full border border-line px-3 py-1 text-accent">{index}</span>
      <span>{title}</span>
    </div>
  );
}
