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
          className="rounded-lg border border-gold-400/15 bg-forest-800/30 p-4"
        >
          <h3 className="mb-2 font-display text-base font-semibold text-gold-400">
            {col.title}
          </h3>
          <p className="text-sm leading-relaxed text-cream-300">{col.content}</p>
        </div>
      ))}
    </div>
  )
}
