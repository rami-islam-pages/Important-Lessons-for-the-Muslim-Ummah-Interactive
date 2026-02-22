'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { bookConfig } from '@/content/book.config'
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  if (!isSupabaseConfigured) {
    return (
      <div className="book-page flex items-center justify-center">
        <div className="mx-4 w-full max-w-sm">
          <div className="rounded-2xl border border-cream-400/60 bg-cream-50 p-8 shadow-2xl text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-forest-800">
              <svg className="h-6 w-6 text-cream-100" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h1 className="font-display text-xl font-bold text-ink-800">Sign In</h1>
            <p className="mt-2 text-sm text-ink-500">Authentication is not configured yet. You can still browse all lessons and quizzes.</p>
            <Link href="/lessons" className="mt-6 inline-block rounded-lg bg-forest-800 px-6 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-forest-700">
              Continue to Lessons &rarr;
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const supabase = createClient()

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) {
        setError(error.message)
      } else {
        setMessage('Check your email for a confirmation link.')
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        setError(error.message)
      } else {
        router.push('/profile')
        router.refresh()
      }
    }

    setLoading(false)
  }

  const handleGoogleAuth = async () => {
    setError('')
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <div className="book-page flex flex-col items-center justify-center px-4">
      {/* Logo / Brand */}
      <div className="mb-8 text-center">
        <Link href="/" className="inline-block">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-forest-800 border border-forest-700">
            <svg className="h-7 w-7 text-cream-100" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h1 className="font-display text-lg font-semibold text-ink-800">
            {bookConfig.title.english}
          </h1>
        </Link>
      </div>

      {/* Auth Card */}
      <div className="w-full max-w-sm">
        <div className="rounded-2xl border border-cream-400/60 bg-cream-50 shadow-2xl">
          {/* Card Header */}
          <div className="border-b border-cream-400/60 px-8 py-6 text-center">
            <h2 className="font-display text-xl font-bold text-ink-800">
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="mt-1 text-sm text-ink-400">
              {mode === 'signin'
                ? 'Sign in to continue your learning'
                : 'Start tracking your progress today'
              }
            </p>
          </div>

          <div className="px-8 py-6">
            {/* Error / Success Messages */}
            {error && (
              <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}
            {message && (
              <div className="mb-4 rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {message}
              </div>
            )}

            {/* Social Login Buttons */}
            <button
              type="button"
              onClick={handleGoogleAuth}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-cream-400/60 bg-white px-4 py-2.5 text-sm font-medium text-ink-700 transition-all hover:border-cream-400 hover:bg-cream-50"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-cream-400/60" />
              <span className="text-xs font-medium uppercase tracking-wider text-ink-400">or</span>
              <div className="h-px flex-1 bg-cream-400/60" />
            </div>

            {/* Email Form */}
            <form onSubmit={handleEmailAuth} className="space-y-3">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-400">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg border border-cream-400/60 bg-white px-4 py-2.5 text-sm text-ink-700 placeholder:text-ink-400 focus:border-forest-600/40 focus:outline-none focus:ring-1 focus:ring-forest-600/20 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-ink-400">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="w-full rounded-lg border border-cream-400/60 bg-white px-4 py-2.5 text-sm text-ink-700 placeholder:text-ink-400 focus:border-forest-600/40 focus:outline-none focus:ring-1 focus:ring-forest-600/20 transition-colors"
                  placeholder={mode === 'signup' ? 'Create a password (6+ characters)' : 'Enter your password'}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-forest-800 py-2.5 text-sm font-semibold text-cream-100 transition-colors hover:bg-forest-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Please wait...
                  </span>
                ) : mode === 'signin' ? 'Sign in' : 'Create account'}
              </button>
            </form>
          </div>

          {/* Card Footer */}
          <div className="border-t border-cream-400/60 px-8 py-4 text-center">
            <button
              type="button"
              onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); setMessage(''); }}
              className="text-sm text-ink-500 transition-colors hover:text-ink-700"
            >
              {mode === 'signin' ? (
                <>Don&apos;t have an account? <span className="font-medium text-forest-700">Sign up</span></>
              ) : (
                <>Already have an account? <span className="font-medium text-forest-700">Sign in</span></>
              )}
            </button>
          </div>
        </div>

        {/* Skip link */}
        <div className="mt-6 text-center">
          <Link
            href="/lessons"
            className="text-sm text-ink-400 transition-colors hover:text-ink-600"
          >
            Continue without an account &rarr;
          </Link>
        </div>

        {/* Terms text */}
        <p className="mt-4 text-center text-xs text-ink-400">
          By continuing, you agree that your progress and quiz data will be stored to enhance your learning experience.
        </p>
      </div>
    </div>
  )
}
