interface ComparisonTableProps {
  columns: {
    title: string
    content: string
  }[]
}

export function ComparisonTable({ columns }: ComparisonTableProps) {
  return (
    <div className="my-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {columns.map((col, idx) => (
        <div
          key={idx}
          className="rounded-lg border border-cream-400/60 bg-cream-50 p-4 shadow-sm"
        >
          <h3 className="mb-2 font-display text-base font-semibold text-forest-800">
            {col.title}
          </h3>
          <p className="text-sm leading-relaxed text-ink-600">{col.content}</p>
        </div>
      ))}
    </div>
  )
}
