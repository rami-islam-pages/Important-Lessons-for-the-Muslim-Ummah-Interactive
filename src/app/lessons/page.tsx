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

      {/* Progress bar */}
      <div className="mx-auto mb-8 max-w-md">
        <div className="flex items-center justify-between text-xs text-cream-400">
          <span>{completedCount} of {totalLessons} lessons completed</span>
          <span>{totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-forest-700/50">
          <div
            className="h-full rounded-full bg-gold-400/60 transition-all"
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
                'group rounded-xl border p-5 transition-all hover:shadow-lg hover:shadow-gold-400/5',
                completed
                  ? 'border-emerald-400/20 bg-forest-800/50 hover:border-emerald-400/30 hover:bg-forest-800/70'
                  : 'border-gold-400/15 bg-forest-800/50 hover:border-gold-400/30 hover:bg-forest-800/70'
              )}
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Lesson number badge */}
              <div className="mb-3 flex items-center gap-3">
                <span
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-lg font-display text-sm font-bold',
                    completed
                      ? 'bg-emerald-400/15 text-emerald-400'
                      : 'bg-gold-400/10 text-gold-400'
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
          )
        })}
      </div>
    </div>
  )
}
