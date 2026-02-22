import Link from 'next/link'
import { videoLessons } from '@/content/videos'
import { bookConfig } from '@/content/book.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video Lessons',
  description: `Watch video explanations of "${bookConfig.subtitle.english}" by Sheikh Haytham Sarhaan.`,
}

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}

export default function VideosPage() {
  return (
    <div className="book-page">
      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Page header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-forest-900 sm:text-4xl">
            Video Lessons
          </h1>
          <p className="mt-2 text-sm text-ink-500">
            Video explanations of the book by {bookConfig.explainer.english}
          </p>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-gold-400 text-xs">❦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
        </div>

        {/* Primary playlist - Sheikh Haytham */}
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-forest-900">
              {bookConfig.youtube.primary.label}
            </h2>
            <Link
              href={bookConfig.youtube.primary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-forest-700 transition-colors hover:text-forest-800"
            >
              View full playlist &rarr;
            </Link>
          </div>

          <div className="space-y-8">
            {videoLessons.map((video) => (
              <div
                key={video.number}
                className="overflow-hidden rounded-xl border border-cream-400/60 bg-cream-50 shadow-sm"
              >
                <YouTubeEmbed videoId={video.youtubeId} title={video.title} />
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-display text-base font-semibold text-ink-800">
                      Lesson {video.number}
                    </h3>
                    <p className="mt-0.5 text-xs text-ink-400">
                      {bookConfig.title.english} | {bookConfig.youtube.primary.label}
                    </p>
                  </div>
                  <Link
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-forest-600/30 px-3 py-1.5 text-xs text-forest-700 transition-colors hover:border-forest-600/50 hover:bg-forest-100"
                  >
                    Watch on YouTube
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supplementary playlist - Ustadh Abdulaziz */}
        <section className="mb-12">
          <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-6 shadow-sm">
            <div className="mb-1 text-xs font-medium tracking-wider text-ink-400 uppercase">
              Additional Resource
            </div>
            <h2 className="font-display text-lg font-semibold text-forest-900">
              {bookConfig.youtube.supplementary.label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              Ustadh Abdulaziz al Haqqan has a playlist explaining Sheikh Haytham
              Sarhaan&apos;s book in further detail. This is a great supplementary
              resource for deeper understanding.
            </p>
            <Link
              href={bookConfig.youtube.supplementary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-forest-800 px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:bg-forest-700"
            >
              <span>View Playlist on YouTube</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Get the book CTA */}
        <section className="text-center">
          <div className="inline-block rounded-xl border border-cream-400/60 bg-cream-50 px-8 py-6 shadow-sm">
            <p className="text-sm text-ink-500">
              Get a free physical copy of the book
            </p>
            <Link
              href={bookConfig.bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-display text-base font-medium text-forest-700 transition-colors hover:text-forest-800"
            >
              Order from Furqaan Bookstore &rarr;
            </Link>
            <p className="mt-1 text-xs text-ink-400">
              Free book — $6.99 shipping/handling only
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
