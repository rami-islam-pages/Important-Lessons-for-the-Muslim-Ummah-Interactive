import Link from 'next/link'
import { bookConfig } from '@/content/book.config'

export function Footer() {
  return (
    <footer className="border-t border-forest-800/20 bg-forest-800 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          {/* Ornamental divider */}
          <div className="flex items-center gap-3 text-gold-400/60">
            <span className="h-px w-12 bg-gold-400/30" />
            <span className="text-xs">❦</span>
            <span className="h-px w-12 bg-gold-400/30" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-cream-400">
            <Link
              href="/about"
              className="transition-colors hover:text-cream-100"
            >
              About
            </Link>
            <span className="text-forest-600">·</span>
            <Link
              href={bookConfig.bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream-100"
            >
              Get the Physical Book
            </Link>
            <span className="text-forest-600">·</span>
            <Link
              href={bookConfig.youtube.primary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream-100"
            >
              Video Lessons
            </Link>
            <span className="text-forest-600">·</span>
            <Link
              href={bookConfig.youtube.supplementary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream-100"
            >
              Additional Explanations
            </Link>
          </div>
          <p className="text-xs text-cream-500">
            Based on &ldquo;{bookConfig.subtitle.english}&rdquo; by {bookConfig.author.english}
          </p>
        </div>
      </div>
    </footer>
  )
}
