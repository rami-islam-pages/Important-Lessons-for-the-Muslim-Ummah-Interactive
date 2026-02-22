'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { bookConfig } from '@/content/book.config'
import { useAuth } from '@/components/auth/AuthProvider'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { href: '/lessons', label: 'Lessons' },
  { href: '/tafseer', label: 'Tafseer' },
  { href: '/quizzes', label: 'Quizzes' },
  { href: '/videos', label: 'Videos' },
  { href: '/profile', label: 'Progress' },
]

export function Header() {
  const pathname = usePathname()
  const { user } = useAuth()
  const isLandingPage = pathname === '/'

  if (isLandingPage) return null

  return (
    <header className="sticky top-0 z-40 border-b border-forest-700/50 bg-forest-900/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold text-gold-400 transition-colors hover:text-gold-300"
        >
          {bookConfig.title.english}
        </Link>

        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
                pathname.startsWith(link.href)
                  ? 'bg-forest-700/50 text-gold-400'
                  : 'text-cream-300 hover:bg-forest-800 hover:text-cream-100'
              )}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Link
              href="/profile"
              className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gold-400/15 text-sm font-semibold text-gold-400"
              title={user.email ?? 'Profile'}
            >
              {(user.email?.[0] ?? 'U').toUpperCase()}
            </Link>
          ) : (
            <Link
              href="/login"
              className="ml-2 rounded-md bg-gold-400/10 px-3 py-1.5 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400/20"
            >
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
