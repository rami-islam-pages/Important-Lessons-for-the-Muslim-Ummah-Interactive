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
      <div className="min-h-screen bg-forest-900">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-cream-400">Quiz not found.</p>
          <Link
            href="/quizzes"
            className="mt-4 inline-block text-sm text-gold-400 hover:text-gold-300"
          >
            &larr; Back to Quizzes
          </Link>
        </div>
      </div>
    )
  }

  const unlocked = isCompleted(quizMeta.lessonSlug)

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-forest-900">
        <nav className="sticky top-14 z-30 border-b border-forest-700/50 bg-forest-900/95 backdrop-blur-sm">
          <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
            <Link
              href="/quizzes"
              className="text-sm text-cream-400 transition-colors hover:text-gold-400"
            >
              &larr; All Quizzes
            </Link>
          </div>
        </nav>
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="rounded-xl border border-gold-400/20 bg-forest-800/40 p-8">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-cream-500"
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
            <p className="text-cream-300">This quiz is locked.</p>
            <p className="mt-2 text-sm text-cream-500">
              Complete{' '}
              <Link
                href={`/lessons/${quizMeta.lessonSlug}`}
                className="text-gold-400 hover:text-gold-300"
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
      <div className="min-h-screen bg-forest-900">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="text-cream-400">Loading quiz...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-forest-900">
      <nav className="sticky top-14 z-30 border-b border-forest-700/50 bg-forest-900/95 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
          <Link
            href="/quizzes"
            className="text-sm text-cream-400 transition-colors hover:text-gold-400"
          >
            &larr; All Quizzes
          </Link>
          <Link
            href={`/lessons/${quizMeta.lessonSlug}`}
            className="text-sm text-cream-400 transition-colors hover:text-gold-400"
          >
            Go to Lesson
          </Link>
        </div>
      </nav>

      {quiz ? (
        <QuizContainer quiz={quiz} />
      ) : (
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="rounded-xl border border-gold-400/20 bg-forest-800/40 p-8">
            <p className="text-cream-400">
              Quiz questions for this lesson are being prepared. Please check back soon.
            </p>
            <Link
              href="/quizzes"
              className="mt-4 inline-block text-sm text-gold-400 transition-colors hover:text-gold-300"
            >
              Back to Quizzes &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
