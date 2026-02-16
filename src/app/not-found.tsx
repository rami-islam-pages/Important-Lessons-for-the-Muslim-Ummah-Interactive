import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-forest-900">
      <div className="text-center">
        <p className="font-display text-6xl font-bold text-gold-400/30">404</p>
        <h1 className="mt-4 font-display text-xl font-semibold text-cream-100">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-cream-400">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/lessons"
          className="mt-6 inline-block rounded-lg bg-gold-400/10 px-5 py-2.5 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400/20"
        >
          Go to Lessons
        </Link>
      </div>
    </div>
  )
}
