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
      <div className="flex min-h-screen items-center justify-center bg-forest-900">
        <div className="mx-4 w-full max-w-md">
          <div className="rounded-2xl border border-gold-400/20 bg-forest-800/50 p-8 text-center">
            <h1 className="font-display text-2xl font-bold text-cream-100 mb-4">Sign In</h1>
            <p className="text-sm text-cream-400 mb-6">Authentication is not configured yet. You can still browse all lessons and quizzes.</p>
            <Link href="/lessons" className="inline-block rounded-lg bg-gold-400/10 px-6 py-2 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400/20">
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

  // Google OAuth requires enabling the Google provider in your Supabase dashboard:
  // 1. Go to Authentication > Providers > Google in the Supabase dashboard
  // 2. Enable Google provider
  // 3. Add your Google Cloud OAuth Client ID and Client Secret
  // 4. Set the authorized redirect URI in Google Cloud Console to your Supabase callback URL
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
    <div className="flex min-h-screen items-center justify-center bg-forest-900">
      <div className="mx-4 w-full max-w-md">
        <div className="rounded-2xl border border-gold-400/20 bg-forest-800/50 p-8">
          <div className="mb-6 text-center">
            <h1 className="font-display text-2xl font-bold text-cream-100">
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
            </h1>
            <p className="mt-1 text-sm text-cream-400">
              Save your progress and quiz results across devices
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-400/30 bg-red-900/20 p-3 text-sm text-red-300">
              {error}
            </div>
          )}
          {message && (
            <div className="mb-4 rounded-lg border border-emerald-400/30 bg-emerald-900/20 p-3 text-sm text-emerald-300">
              {message}
            </div>
          )}

          <form onSubmit={handleEmailAuth} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-cream-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-forest-600/50 bg-forest-800/50 px-4 py-2.5 text-sm text-cream-200 placeholder:text-cream-500 focus:border-gold-400/40 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-1 block text-sm text-cream-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full rounded-lg border border-forest-600/50 bg-forest-800/50 px-4 py-2.5 text-sm text-cream-200 placeholder:text-cream-500 focus:border-gold-400/40 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gold-400/15 py-2.5 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400/25 disabled:opacity-50"
            >
              {loading ? 'Please wait...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(''); setMessage(''); }}
              className="text-sm text-cream-400 transition-colors hover:text-cream-300"
            >
              {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-forest-700/50" />
            <span className="text-xs text-cream-500">or</span>
            <div className="h-px flex-1 bg-forest-700/50" />
          </div>

          <button
            type="button"
            onClick={handleGoogleAuth}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-forest-600/50 py-2.5 text-sm text-cream-300 transition-colors hover:border-forest-500/50 hover:bg-forest-800/50"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="mt-6 text-center">
            <Link
              href="/lessons"
              className="text-sm text-gold-400 transition-colors hover:text-gold-300"
            >
              Continue without signing in &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
