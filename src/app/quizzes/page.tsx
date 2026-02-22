'use client'

import Link from 'next/link'
import { quizzesIndex } from '@/content/quizzes/index'
import { useProgress } from '@/lib/hooks/useProgress'
import { cn } from '@/lib/utils/cn'
import type { Metadata } from 'next'

const STORAGE_KEY = 'islamicLessonsQuizResults'

function loadQuizResults(): Array<{ quizId: string; percentage: number }> {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export default function QuizzesPage() {
  const { isCompleted } = useProgress()
  const results = loadQuizResults()

  function getBestScore(quizSlug: string): number | null {
    const attempts = results.filter((r) => r.quizId === quizSlug)
    if (attempts.length === 0) return null
    return Math.max(...attempts.map((a) => a.percentage))
  }

  return (
    <div className="min-h-screen bg-forest-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-cream-100 sm:text-4xl">
            Quizzes
          </h1>
          <p className="mt-2 text-sm text-cream-400">
            Test your knowledge after completing each lesson
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quizzesIndex.map((quiz) => {
            const unlocked = isCompleted(quiz.lessonSlug)
            const bestScore = getBestScore(quiz.slug)

            return (
              <div
                key={quiz.slug}
                className={cn(
                  'rounded-xl border p-5 transition-all',
                  unlocked
                    ? 'border-gold-400/15 bg-forest-800/50 hover:border-gold-400/30 hover:bg-forest-800/70 hover:shadow-lg hover:shadow-gold-400/5'
                    : 'border-forest-700/20 bg-forest-800/20 opacity-60'
                )}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold',
                      unlocked
                        ? 'bg-gold-400/10 text-gold-400'
                        : 'bg-forest-700/30 text-cream-500'
                    )}
                  >
                    {unlocked ? (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    )}
                  </span>
                  <h2
                    className={cn(
                      'font-display text-lg font-semibold',
                      unlocked ? 'text-cream-100' : 'text-cream-400'
                    )}
                  >
                    {quiz.title}
                  </h2>
                </div>

                <p className="text-sm text-cream-400">
                  {quiz.lessonTitle}
                </p>

                {bestScore !== null && (
                  <div className="mt-3 flex items-center gap-1.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                    <span className="text-xs text-emerald-400/80">
                      Best score: {bestScore}%
                    </span>
                  </div>
                )}

                <div className="mt-4">
                  {unlocked ? (
                    <Link
                      href={`/quizzes/${quiz.slug}`}
                      className="inline-block rounded-md bg-gold-400/10 px-4 py-2 text-xs font-medium text-gold-400 transition-colors hover:bg-gold-400/20"
                    >
                      {bestScore !== null ? 'Retake Quiz' : 'Start Quiz'} &rarr;
                    </Link>
                  ) : (
                    <p className="text-xs text-cream-500">
                      Complete{' '}
                      <Link
                        href={`/lessons/${quiz.lessonSlug}`}
                        className="text-gold-400/60 hover:text-gold-400"
                      >
                        {quiz.lessonTitle}
                      </Link>{' '}
                      to unlock
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
