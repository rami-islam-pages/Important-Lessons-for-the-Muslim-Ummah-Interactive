'use client'

import Link from 'next/link'
import { lessonsIndex } from '@/content/lessons-index'
import { bookConfig } from '@/content/book.config'
import { useProgress } from '@/lib/hooks/useProgress'
import { cn } from '@/lib/utils/cn'

export default function LessonsPage() {
  const { isCompleted, completedCount } = useProgress()
  const totalLessons = lessonsIndex.filter((l) => l.number !== null).length

  return (
    <div className="book-page">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Page header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-forest-900 sm:text-4xl">
            {bookConfig.title.english}
          </h1>
          <p className="mt-2 text-sm text-ink-500">
            {bookConfig.author.english}
          </p>
          <p className="mt-1 text-xs text-ink-400">
            Explained by {bookConfig.explainer.english}
          </p>
          {/* Ornamental divider */}
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-gold-400 text-xs">❦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mb-10 max-w-md">
          <div className="flex items-center justify-between text-xs text-ink-500">
            <span>{completedCount} of {totalLessons} lessons completed</span>
            <span>{totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-cream-300">
            <div
              className="h-full rounded-full bg-forest-600 transition-all"
              style={{ width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* Lessons grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lessonsIndex.map((lesson, idx) => {
            const completed = isCompleted(lesson.slug)
            return (
              <Link
                key={lesson.slug}
                href={`/lessons/${lesson.slug}`}
                className={cn(
                  'group rounded-xl border p-5 transition-all shadow-sm hover:shadow-md',
                  completed
                    ? 'border-forest-400/30 bg-cream-50 hover:border-forest-500/40'
                    : 'border-cream-400/60 bg-cream-50 hover:border-forest-600/30'
                )}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
              {/* Lesson number badge */}
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-bold',
                    completed
                      ? 'bg-forest-100 text-forest-700'
                      : 'bg-forest-800/10 text-forest-800'
                  )}
                >
                  {completed ? (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : lesson.number !== null ? (
                    String(lesson.number).padStart(2, '0')
                  ) : (
                    '\u2014'
                  )}
                </span>
                <h2 className="font-display text-lg font-semibold text-ink-800 transition-colors group-hover:text-forest-700">
                  {lesson.title}
                </h2>
              </div>

              <p className="text-sm leading-relaxed text-ink-500">
                {lesson.description}
              </p>

              {/* Quiz indicator */}
              {lesson.hasQuiz && (
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest-600" />
                  <span className="text-xs text-forest-600">Quiz available</span>
                </div>
              )}
            </Link>
          )
        })}
      </div>
      </div>
    </div>
  )
}
