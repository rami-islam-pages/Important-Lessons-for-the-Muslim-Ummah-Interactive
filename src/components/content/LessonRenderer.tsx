interface LessonRendererProps {
  title: string
  children: React.ReactNode
}

export function LessonRenderer({ title, children }: LessonRendererProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-center font-display text-3xl font-bold text-forest-900">
        {title}
      </h1>
      {/* Ornamental divider */}
      <div className="mx-auto mb-8 flex items-center justify-center gap-3">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
        <span className="text-gold-400 text-xs">❦</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
      </div>
      <div className="lesson-content prose-custom space-y-4">
        {children}
      </div>
    </article>
  )
}
