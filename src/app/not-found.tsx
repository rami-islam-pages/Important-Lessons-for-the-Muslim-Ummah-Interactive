import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="book-page flex items-center justify-center">
      <div className="text-center">
        <p className="font-display text-6xl font-bold text-forest-700/20">404</p>
        <h1 className="mt-4 font-display text-xl font-semibold text-ink-800">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-ink-500">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/lessons"
          className="mt-6 inline-block rounded-lg bg-forest-800 px-5 py-2.5 text-sm font-medium text-cream-100 transition-colors hover:bg-forest-700"
        >
          Go to Lessons
        </Link>
      </div>
    </div>
  )
}
