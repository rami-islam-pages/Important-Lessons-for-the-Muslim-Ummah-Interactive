import Link from 'next/link'
import { bookConfig } from '@/content/book.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: `About Rami Islamic Pages and "${bookConfig.subtitle.english}" by ${bookConfig.author.english}.`,
}

export default function AboutPage() {
  return (
    <div className="book-page">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Brand header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl font-bold text-ink-800 sm:text-5xl">
            Rami Islamic Pages
          </h1>
          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-gold-400 text-xs">❦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
        </div>

        {/* Mission */}
        <section className="mb-10 rounded-xl border border-cream-400/60 bg-cream-50 p-6 sm:p-8">
          <h2 className="mb-4 font-display text-xl font-semibold text-ink-800">
            Our Mission
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-ink-600">
            This project aims to turn the work of Sheikh Haytham Sarhaan&apos;s (&#x062D;&#x0641;&#x0638;&#x0647; &#x0627;&#x0644;&#x0644;&#x0647;) explanation of <em>The Important Lessons for the Muslim Ummah</em> by Sheikh Ibn Baz (&#x0631;&#x062D;&#x0645;&#x0647; &#x0627;&#x0644;&#x0644;&#x0647;) into an interactive, accessible website.
          </p>
          <p
            className="mb-2 text-center font-arabic text-lg text-forest-700"
            lang="ar"
            dir="rtl"
          >
            أسأل الله أن يبارك فيه وينفع به الأمة
          </p>
          <p className="text-center text-sm italic text-ink-500">
            I ask Allah to put barakah in it and make it a means of benefit for the ummah.
          </p>
        </section>

        {/* Book info */}
        <section className="mb-10 rounded-xl border border-cream-400/60 bg-cream-50 p-6 sm:p-8">
          <h2 className="mb-4 font-display text-xl font-semibold text-ink-800">
            About the Book
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-ink-400 uppercase tracking-wider">Title</p>
              <p className="text-sm text-ink-700">{bookConfig.title.english}</p>
              <p className="font-arabic text-base text-ink-600" lang="ar" dir="rtl">
                {bookConfig.title.arabic}
              </p>
            </div>
            <div>
              <p className="text-xs text-ink-400 uppercase tracking-wider">Author</p>
              <p className="text-sm text-ink-700">{bookConfig.author.english}</p>
              <p className="font-arabic text-base text-ink-600" lang="ar" dir="rtl">
                {bookConfig.author.arabic}
              </p>
              <p className="text-xs text-ink-400">{bookConfig.author.honorific}</p>
            </div>
            <div>
              <p className="text-xs text-ink-400 uppercase tracking-wider">Explained by</p>
              <p className="text-sm text-ink-700">{bookConfig.explainer.english}</p>
              <p className="font-arabic text-base text-ink-600" lang="ar" dir="rtl">
                {bookConfig.explainer.arabic}
              </p>
              <p className="text-xs text-ink-400">{bookConfig.explainer.honorific}</p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="rounded-xl border border-cream-400/60 bg-cream-50 p-6 sm:p-8">
          <h2 className="mb-4 font-display text-xl font-semibold text-ink-800">
            Resources
          </h2>
          <div className="space-y-3">
            <Link
              href={bookConfig.bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-cream-400/60 px-4 py-3 text-sm text-ink-600 transition-colors hover:border-forest-600/20 hover:bg-cream-100"
            >
              <span>Get the Physical Book</span>
              <span className="text-forest-700">&rarr;</span>
            </Link>
            <Link
              href={bookConfig.youtube.primary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-cream-400/60 px-4 py-3 text-sm text-ink-600 transition-colors hover:border-forest-600/20 hover:bg-cream-100"
            >
              <span>Video Lessons &mdash; {bookConfig.youtube.primary.label}</span>
              <span className="text-forest-700">&rarr;</span>
            </Link>
            <Link
              href={bookConfig.youtube.supplementary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-cream-400/60 px-4 py-3 text-sm text-ink-600 transition-colors hover:border-forest-600/20 hover:bg-cream-100"
            >
              <span>Additional Explanations &mdash; {bookConfig.youtube.supplementary.label}</span>
              <span className="text-forest-700">&rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
