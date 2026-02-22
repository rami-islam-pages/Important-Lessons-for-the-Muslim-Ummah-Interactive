'use client'

import Link from 'next/link'
import { quizzesIndex, type QuizMeta } from '@/content/quizzes/index'
import { useProgress } from '@/lib/hooks/useProgress'
import { cn } from '@/lib/utils/cn'

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

function QuizCard({ quiz, unlocked, bestScore }: { quiz: QuizMeta; unlocked: boolean; bestScore: number | null }) {
  return (
    <div
      className={cn(
        'rounded-xl border p-5 transition-all shadow-sm',
        unlocked
          ? 'border-cream-400/60 bg-cream-50 hover:border-forest-600/30 hover:shadow-md'
          : 'border-cream-400/40 bg-cream-200/50 opacity-60'
      )}
    >
      <div className="mb-3 flex items-center gap-3">
        <span
          className={cn(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold',
            unlocked
              ? 'bg-forest-800/10 text-forest-800'
              : 'bg-cream-300 text-ink-400'
          )}
        >
          {unlocked ? (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )}
        </span>
        <h2
          className={cn(
            'font-display text-lg font-semibold',
            unlocked ? 'text-ink-800' : 'text-ink-400'
          )}
        >
          {quiz.title}
        </h2>
      </div>

      <p className="text-sm text-ink-500">
        {quiz.lessonTitle}
      </p>

      {bestScore !== null && (
        <div className="mt-3 flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-forest-600" />
          <span className="text-xs text-forest-600">
            Best score: {bestScore}%
          </span>
        </div>
      )}

      <div className="mt-4">
        {unlocked ? (
          <Link
            href={`/quizzes/${quiz.slug}`}
            className="inline-block rounded-md bg-forest-800 px-4 py-2 text-xs font-medium text-cream-100 transition-colors hover:bg-forest-700"
          >
            {bestScore !== null ? 'Retake Quiz' : 'Start Quiz'} &rarr;
          </Link>
        ) : (
          <p className="text-xs text-ink-400">
            Complete{' '}
            <Link
              href={`/lessons/${quiz.lessonSlug}`}
              className="text-forest-700 hover:text-forest-800 font-medium"
            >
              {quiz.category === 'tafseer' ? 'Lesson 1' : quiz.lessonTitle}
            </Link>{' '}
            to unlock
          </p>
        )}
      </div>
    </div>
  )
}

export default function QuizzesPage() {
  const { isCompleted } = useProgress()
  const results = loadQuizResults()

  const lessonQuizzes = quizzesIndex.filter((q) => q.category !== 'tafseer')
  const tafseerQuizzes = quizzesIndex.filter((q) => q.category === 'tafseer')

  function getBestScore(quizSlug: string): number | null {
    const attempts = results.filter((r) => r.quizId === quizSlug)
    if (attempts.length === 0) return null
    return Math.max(...attempts.map((a) => a.percentage))
  }

  return (
    <div className="book-page">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-forest-900 sm:text-4xl">
            Quizzes
          </h1>
          <p className="mt-2 text-sm text-ink-500">
            Test your knowledge after completing each lesson
          </p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-gold-400 text-xs">❦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
        </div>

      {/* Lesson Quizzes */}
      <h2 className="mb-4 font-display text-xl font-semibold text-forest-900">
        Lesson Quizzes
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessonQuizzes.map((quiz) => (
          <QuizCard
            key={quiz.slug}
            quiz={quiz}
            unlocked={isCompleted(quiz.lessonSlug)}
            bestScore={getBestScore(quiz.slug)}
          />
        ))}
      </div>

      {/* Tafseer Quizzes */}
      <h2 className="mb-4 mt-12 font-display text-xl font-semibold text-forest-900">
        Tafseer Quizzes
      </h2>
      <p className="mb-4 text-sm text-ink-500">
        Individual quizzes for each surah covered in the Tafseer section
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tafseerQuizzes.map((quiz) => (
          <QuizCard
            key={quiz.slug}
            quiz={quiz}
            unlocked={isCompleted(quiz.lessonSlug)}
            bestScore={getBestScore(quiz.slug)}
          />
        ))}
      </div>
      </div>
    </div>
  )
}
