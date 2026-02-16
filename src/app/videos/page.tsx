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
    <div className="min-h-screen bg-forest-900">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Page header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl font-bold text-cream-100 sm:text-4xl">
            Video Lessons
          </h1>
          <p className="mt-2 text-sm text-cream-400">
            Video explanations of the book by {bookConfig.explainer.english}
          </p>
        </div>

        {/* Primary playlist - Sheikh Haytham */}
        <section className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-xl font-semibold text-cream-100">
              {bookConfig.youtube.primary.label}
            </h2>
            <Link
              href={bookConfig.youtube.primary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gold-400 transition-colors hover:text-gold-300"
            >
              View full playlist &rarr;
            </Link>
          </div>

          <div className="space-y-8">
            {videoLessons.map((video) => (
              <div
                key={video.number}
                className="overflow-hidden rounded-xl border border-gold-400/15 bg-forest-800/40"
              >
                <YouTubeEmbed videoId={video.youtubeId} title={video.title} />
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-display text-base font-semibold text-cream-100">
                      Lesson {video.number}
                    </h3>
                    <p className="mt-0.5 text-xs text-cream-500">
                      {bookConfig.title.english} | {bookConfig.youtube.primary.label}
                    </p>
                  </div>
                  <Link
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-gold-400/20 px-3 py-1.5 text-xs text-gold-400 transition-colors hover:border-gold-400/40 hover:bg-gold-400/10"
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
          <div className="rounded-xl border border-forest-600/50 bg-forest-800/30 p-6">
            <div className="mb-1 text-xs font-medium tracking-wider text-cream-500 uppercase">
              Additional Resource
            </div>
            <h2 className="font-display text-lg font-semibold text-cream-100">
              {bookConfig.youtube.supplementary.label}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-cream-400">
              Ustadh Abdulaziz al Haqqan has a playlist explaining Sheikh Haytham
              Sarhaan&apos;s book in further detail. This is a great supplementary
              resource for deeper understanding.
            </p>
            <Link
              href={bookConfig.youtube.supplementary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-gold-400/30 px-4 py-2 text-sm font-medium text-gold-400 transition-colors hover:border-gold-400/50 hover:bg-gold-400/10"
            >
              <span>View Playlist on YouTube</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>

        {/* Get the book CTA */}
        <section className="text-center">
          <div className="inline-block rounded-xl border border-gold-400/15 bg-forest-800/30 px-8 py-6">
            <p className="text-sm text-cream-400">
              Get a free physical copy of the book
            </p>
            <Link
              href={bookConfig.bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block font-display text-base font-medium text-gold-400 transition-colors hover:text-gold-300"
            >
              Order from Furqaan Bookstore &rarr;
            </Link>
            <p className="mt-1 text-xs text-cream-500">
              Free book — $6.99 shipping/handling only
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
