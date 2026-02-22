'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { lessonsIndex } from '@/content/lessons-index'
import { useAuth } from '@/components/auth/AuthProvider'
import { useProgress } from '@/lib/hooks/useProgress'
import { cn } from '@/lib/utils/cn'

const QUIZ_STORAGE_KEY = 'islamicLessonsQuizResults'

function loadQuizResults(): Array<{ quizId: string; percentage: number }> {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(QUIZ_STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()
  const { isCompleted, completedCount } = useProgress()
  const quizResults = loadQuizResults()

  const totalLessons = lessonsIndex.filter((l) => l.number !== null).length

  const averageScore =
    quizResults.length > 0
      ? Math.round(
          quizResults.reduce((sum, r) => sum + r.percentage, 0) /
            quizResults.length
        )
      : null

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <div className="book-page">
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-3xl font-bold text-forest-900">
            Your Progress
          </h1>
          {user && (
            <button
              onClick={handleSignOut}
              className="rounded-lg border border-cream-400 px-4 py-2 text-sm text-ink-500 transition-colors hover:border-forest-600/30 hover:text-ink-700"
            >
              Sign Out
            </button>
          )}
        </div>

        {user && (
          <div className="mb-6 rounded-xl border border-cream-400/60 bg-cream-50 p-4 shadow-sm">
            <p className="text-sm text-ink-600">
              Signed in as <span className="font-medium text-forest-700">{user.email}</span>
            </p>
          </div>
        )}

        {/* Overview cards */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-5 text-center shadow-sm">
            <p className="font-display text-3xl font-bold text-forest-800">{completedCount}</p>
            <p className="mt-1 text-sm text-ink-500">Lessons Completed</p>
            <p className="text-xs text-ink-400">of {totalLessons}</p>
          </div>
          <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-5 text-center shadow-sm">
            <p className="font-display text-3xl font-bold text-forest-800">
              {averageScore !== null ? `${averageScore}%` : '\u2014'}
            </p>
            <p className="mt-1 text-sm text-ink-500">Average Quiz Score</p>
            {quizResults.length > 0 && (
              <p className="text-xs text-ink-400">{quizResults.length} attempt{quizResults.length !== 1 ? 's' : ''}</p>
            )}
          </div>
          <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-5 text-center shadow-sm">
            <p className="font-display text-3xl font-bold text-forest-800">
              {totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0}%
            </p>
            <p className="mt-1 text-sm text-ink-500">Overall Progress</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-3 overflow-hidden rounded-full bg-cream-300">
            <div
              className="h-full rounded-full bg-forest-600 transition-all"
              style={{ width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* Lesson progress list */}
        <section className="mb-10">
          <h2 className="mb-4 font-display text-xl font-semibold text-forest-900">
            Lessons
          </h2>
          <div className="space-y-2">
            {lessonsIndex.map((lesson) => {
              const completed = isCompleted(lesson.slug)
              return (
                <Link
                  key={lesson.slug}
                  href={`/lessons/${lesson.slug}`}
                  className={cn(
                    'flex items-center justify-between rounded-lg border px-4 py-3 transition-colors',
                    completed
                      ? 'border-forest-400/30 bg-forest-100/50 hover:border-forest-500/40'
                      : 'border-cream-400/60 bg-cream-50 hover:border-forest-600/20'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'flex h-7 w-7 items-center justify-center rounded-md text-xs font-medium',
                        completed
                          ? 'bg-forest-100 text-forest-700'
                          : 'bg-cream-300 text-ink-500'
                      )}
                    >
                      {completed ? (
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : lesson.number !== null ? (
                        String(lesson.number).padStart(2, '0')
                      ) : (
                        '\u2014'
                      )}
                    </span>
                    <span className="text-sm text-ink-700">{lesson.title}</span>
                  </div>
                  <span
                    className={cn(
                      'text-xs',
                      completed ? 'text-forest-600' : 'text-ink-400'
                    )}
                  >
                    {completed ? 'Completed' : 'Not started'}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Sign in prompt for guests */}
        {!loading && !user && (
          <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-6 text-center shadow-sm">
            <p className="text-sm text-ink-500">
              Sign in to save your progress across devices
            </p>
            <Link
              href="/login"
              className="mt-3 inline-block rounded-lg bg-forest-800 px-6 py-2 text-sm font-medium text-cream-100 transition-colors hover:bg-forest-700"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
