'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { lessonsIndex } from '@/content/lessons-index'
import { bookConfig } from '@/content/book.config'
import { useAuth } from '@/components/auth/AuthProvider'

export default function ProfilePage() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

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
            <p className="mt-1 text-xs text-cream-500">
              Your progress and quiz results are saved to the cloud.
            </p>
          </div>
        )}

        {/* Overview cards */}
        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gold-400/15 bg-forest-800/40 p-5 text-center">
            <p className="font-display text-3xl font-bold text-gold-400">0</p>
            <p className="mt-1 text-sm text-cream-400">Lessons Completed</p>
            <p className="text-xs text-cream-500">of {lessonsIndex.length}</p>
          </div>
          <div className="rounded-xl border border-gold-400/15 bg-forest-800/40 p-5 text-center">
            <p className="font-display text-3xl font-bold text-gold-400">&mdash;</p>
            <p className="mt-1 text-sm text-cream-400">Average Quiz Score</p>
          </div>
          <div className="rounded-xl border border-gold-400/15 bg-forest-800/40 p-5 text-center">
            <p className="font-display text-3xl font-bold text-gold-400">0</p>
            <p className="mt-1 text-sm text-cream-400">Videos Watched</p>
            <p className="text-xs text-cream-500">of 6</p>
          </div>
        </div>

        {/* Lesson progress list */}
        <section className="mb-10">
          <h2 className="mb-4 font-display text-xl font-semibold text-cream-100">
            Lessons
          </h2>
          <div className="space-y-2">
            {lessonsIndex.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/lessons/${lesson.slug}`}
                className="flex items-center justify-between rounded-lg border border-forest-700/30 bg-forest-800/30 px-4 py-3 transition-colors hover:border-gold-400/20 hover:bg-forest-800/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-forest-700/50 text-xs font-medium text-cream-400">
                    {lesson.number !== null
                      ? String(lesson.number).padStart(2, '0')
                      : '\u2014'}
                  </span>
                  <span className="text-sm text-cream-200">{lesson.title}</span>
                </div>
                <span className="text-xs text-cream-500">Not started</span>
              </Link>
            ))}
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
