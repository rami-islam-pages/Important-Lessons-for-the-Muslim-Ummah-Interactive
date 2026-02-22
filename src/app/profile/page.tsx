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
    <div className="min-h-screen bg-forest-900">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-3xl font-bold text-cream-100">
            Your Progress
          </h1>
          {user && (
            <button
              onClick={handleSignOut}
              className="rounded-lg border border-forest-600/50 px-4 py-2 text-sm text-cream-400 transition-colors hover:border-forest-500/50 hover:text-cream-300"
            >
              Sign Out
            </button>
          )}
        </div>

        {user && (
          <div className="mb-6 rounded-xl border border-gold-400/15 bg-forest-800/30 p-4">
            <p className="text-sm text-cream-300">
              Signed in as <span className="font-medium text-gold-400">{user.email}</span>
            </p>
          </div>
        )}

        {/* Overview cards */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gold-400/15 bg-forest-800/40 p-5 text-center">
            <p className="font-display text-3xl font-bold text-gold-400">{completedCount}</p>
            <p className="mt-1 text-sm text-cream-400">Lessons Completed</p>
            <p className="text-xs text-cream-500">of {totalLessons}</p>
          </div>
          <div className="rounded-xl border border-gold-400/15 bg-forest-800/40 p-5 text-center">
            <p className="font-display text-3xl font-bold text-gold-400">
              {averageScore !== null ? `${averageScore}%` : '\u2014'}
            </p>
            <p className="mt-1 text-sm text-cream-400">Average Quiz Score</p>
            {quizResults.length > 0 && (
              <p className="text-xs text-cream-500">{quizResults.length} attempt{quizResults.length !== 1 ? 's' : ''}</p>
            )}
          </div>
          <div className="rounded-xl border border-gold-400/15 bg-forest-800/40 p-5 text-center">
            <p className="font-display text-3xl font-bold text-gold-400">
              {totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0}%
            </p>
            <p className="mt-1 text-sm text-cream-400">Overall Progress</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="h-3 overflow-hidden rounded-full bg-forest-700/50">
            <div
              className="h-full rounded-full bg-gold-400/60 transition-all"
              style={{ width: `${totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0}%` }}
            />
          </div>
        </div>

        {/* Lesson progress list */}
        <section className="mb-10">
          <h2 className="mb-4 font-display text-xl font-semibold text-cream-100">
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
                      ? 'border-emerald-400/20 bg-emerald-900/10 hover:border-emerald-400/30'
                      : 'border-forest-700/30 bg-forest-800/30 hover:border-gold-400/20 hover:bg-forest-800/50'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        'flex h-7 w-7 items-center justify-center rounded-md text-xs font-medium',
                        completed
                          ? 'bg-emerald-400/15 text-emerald-400'
                          : 'bg-forest-700/50 text-cream-400'
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
                    <span className="text-sm text-cream-200">{lesson.title}</span>
                  </div>
                  <span
                    className={cn(
                      'text-xs',
                      completed ? 'text-emerald-400' : 'text-cream-500'
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
          <div className="rounded-xl border border-gold-400/15 bg-forest-800/30 p-6 text-center">
            <p className="text-sm text-cream-400">
              Sign in to save your progress across devices
            </p>
            <Link
              href="/login"
              className="mt-3 inline-block rounded-lg bg-gold-400/10 px-6 py-2 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400/20"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
