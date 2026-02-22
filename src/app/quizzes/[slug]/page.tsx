'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { quizzesIndex, getQuizBySlug } from '@/content/quizzes/index'
import { useProgress } from '@/lib/hooks/useProgress'
import { QuizContainer } from '@/components/quiz/QuizContainer'
import { useState, useEffect } from 'react'
import type { Quiz } from '@/lib/types/quiz'

export default function QuizPage() {
  const params = useParams()
  const slug = params.slug as string
  const quizMeta = getQuizBySlug(slug)
  const { isCompleted } = useProgress()
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!quizMeta) {
      setLoading(false)
      return
    }
    import(`@/content/quizzes/${slug}`)
      .then((mod) => {
        setQuiz(mod.default || mod.quiz)
      })
      .catch(() => {
        setQuiz(null)
      })
      .finally(() => setLoading(false))
  }, [slug, quizMeta])

  if (!quizMeta) {
    return (
      <div className="book-page">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-ink-500">Quiz not found.</p>
          <Link
            href="/quizzes"
            className="mt-4 inline-block text-sm text-forest-700 hover:text-forest-800"
          >
            &larr; Back to Quizzes
          </Link>
        </div>
      </div>
    )
  }

  const isTafseer = quizMeta.category === 'tafseer'
  const lessonLink = isTafseer ? '/tafseer' : `/lessons/${quizMeta.lessonSlug}`

  const unlocked = isCompleted(quizMeta.lessonSlug)

  if (!unlocked) {
    return (
      <div className="book-page">
        <nav className="sticky top-14 z-30 border-b border-cream-400/60 bg-cream-100/95 backdrop-blur-sm">
          <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
            <Link
              href="/quizzes"
              className="text-sm text-ink-500 transition-colors hover:text-forest-700"
            >
              &larr; All Quizzes
            </Link>
          </div>
        </nav>
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-8">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-ink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <p className="text-ink-600">This quiz is locked.</p>
            <p className="mt-2 text-sm text-ink-400">
              Complete{' '}
              <Link
                href={`/lessons/${quizMeta.lessonSlug}`}
                className="text-forest-700 hover:text-forest-800"
              >
                {quizMeta.lessonTitle}
              </Link>{' '}
              first to unlock this quiz.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="book-page">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-ink-500">Loading quiz...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="book-page">
      <nav className="sticky top-14 z-30 border-b border-cream-400/60 bg-cream-100/95 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
          <Link
            href="/quizzes"
            className="text-sm text-ink-500 transition-colors hover:text-forest-700"
          >
            &larr; All Quizzes
          </Link>
          <Link
            href={lessonLink}
            className="text-sm text-ink-500 transition-colors hover:text-forest-700"
          >
            {isTafseer ? 'Go to Tafseer' : 'Go to Lesson'}
          </Link>
        </div>
      </nav>

      {quiz ? (
        <QuizContainer quiz={quiz} />
      ) : (
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-8">
            <p className="text-ink-500">
              Quiz questions for this lesson are being prepared. Please check back soon.
            </p>
            <Link
              href="/quizzes"
              className="mt-4 inline-block text-sm text-forest-700 transition-colors hover:text-forest-800"
            >
              Back to Quizzes &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
