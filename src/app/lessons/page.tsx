import Link from 'next/link'
import { lessonsIndex } from '@/content/lessons-index'
import { bookConfig } from '@/content/book.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lessons',
  description: `All 18 lessons from "${bookConfig.subtitle.english}" by ${bookConfig.author.english}.`,
}

export default function LessonsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Page header */}
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl font-bold text-cream-100 sm:text-4xl">
          {bookConfig.title.english}
        </h1>
        <p className="mt-2 text-sm text-cream-400">
          {bookConfig.author.english}
        </p>
        <p className="mt-1 text-xs text-cream-500">
          Explained by {bookConfig.explainer.english}
        </p>
      </div>

      {/* Lessons grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessonsIndex.map((lesson, idx) => (
          <Link
            key={lesson.slug}
            href={`/lessons/${lesson.slug}`}
            className="group rounded-xl border border-gold-400/15 bg-forest-800/50 p-5 transition-all hover:border-gold-400/30 hover:bg-forest-800/70 hover:shadow-lg hover:shadow-gold-400/5"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            {/* Lesson number badge */}
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold-400/10 font-display text-sm font-bold text-gold-400">
                {lesson.number !== null
                  ? String(lesson.number).padStart(2, '0')
                  : '—'}
              </span>
              <h2 className="font-display text-lg font-semibold text-cream-100 transition-colors group-hover:text-gold-300">
                {lesson.title}
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-cream-400">
              {lesson.description}
            </p>

            {/* Quiz indicator */}
            {lesson.hasQuiz && (
              <div className="mt-3 flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold-400/60" />
                <span className="text-xs text-gold-400/60">Quiz available</span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
