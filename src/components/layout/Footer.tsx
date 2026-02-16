import Link from 'next/link'
import { bookConfig } from '@/content/book.config'

export function Footer() {
  return (
    <footer className="border-t border-forest-700/30 bg-forest-900 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-display text-sm text-cream-400">
            {bookConfig.brand}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-cream-500">
            <Link
              href={bookConfig.bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-400"
            >
              Get the Physical Book
            </Link>
            <span className="text-forest-600">|</span>
            <Link
              href={bookConfig.youtube.primary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-400"
            >
              Video Lessons
            </Link>
            <span className="text-forest-600">|</span>
            <Link
              href={bookConfig.youtube.supplementary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold-400"
            >
              Additional Explanations
            </Link>
          </div>
          <p className="text-xs text-forest-500">
            Based on &ldquo;{bookConfig.subtitle.english}&rdquo; by {bookConfig.author.english}
          </p>
        </div>
      </div>
    </footer>
  )
}
