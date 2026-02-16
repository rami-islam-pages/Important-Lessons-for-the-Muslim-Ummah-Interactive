interface LessonRendererProps {
  title: string
  children: React.ReactNode
}

export function LessonRenderer({ title, children }: LessonRendererProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-8 text-center font-display text-3xl font-bold text-cream-100">
        {title}
      </h1>
      <div className="lesson-content prose-custom space-y-4">
        {children}
      </div>
    </article>
  )
}
