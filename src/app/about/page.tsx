import Link from 'next/link'
import { bookConfig } from '@/content/book.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: `About Rami Islamic Pages and "${bookConfig.subtitle.english}" by ${bookConfig.author.english}.`,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-forest-900">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Brand header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl font-bold text-gold-400 sm:text-5xl">
            Rami Islamic Pages
          </h1>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        </div>

        {/* Mission */}
        <section className="mb-10 rounded-xl border border-gold-400/15 bg-forest-800/40 p-6 sm:p-8">
          <h2 className="mb-4 font-display text-xl font-semibold text-cream-100">
            Our Mission
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-cream-300">
            This project aims to turn the work of Sheikh Haytham Sarhaan&apos;s (&#x062D;&#x0641;&#x0638;&#x0647; &#x0627;&#x0644;&#x0644;&#x0647;) explanation of <em>The Important Lessons for the Muslim Ummah</em> by Sheikh Ibn Baz (&#x0631;&#x062D;&#x0645;&#x0647; &#x0627;&#x0644;&#x0644;&#x0647;) into an interactive, accessible website.
          </p>
          <p
            className="mb-2 text-center font-arabic text-lg text-gold-400/90"
            lang="ar"
            dir="rtl"
          >
            أسأل الله أن يبارك فيه وينفع به الأمة
          </p>
          <p className="text-center text-sm italic text-cream-400">
            I ask Allah to put barakah in it and make it a means of benefit for the ummah.
          </p>
        </section>

        {/* Book info */}
        <section className="mb-10 rounded-xl border border-gold-400/15 bg-forest-800/40 p-6 sm:p-8">
          <h2 className="mb-4 font-display text-xl font-semibold text-cream-100">
            About the Book
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-cream-500 uppercase tracking-wider">Title</p>
              <p className="text-sm text-cream-200">{bookConfig.title.english}</p>
              <p className="font-arabic text-base text-cream-300" lang="ar" dir="rtl">
                {bookConfig.title.arabic}
              </p>
            </div>
            <div>
              <p className="text-xs text-cream-500 uppercase tracking-wider">Author</p>
              <p className="text-sm text-cream-200">{bookConfig.author.english}</p>
              <p className="font-arabic text-base text-cream-300" lang="ar" dir="rtl">
                {bookConfig.author.arabic}
              </p>
              <p className="text-xs text-cream-500">{bookConfig.author.honorific}</p>
            </div>
            <div>
              <p className="text-xs text-cream-500 uppercase tracking-wider">Explained by</p>
              <p className="text-sm text-cream-200">{bookConfig.explainer.english}</p>
              <p className="font-arabic text-base text-cream-300" lang="ar" dir="rtl">
                {bookConfig.explainer.arabic}
              </p>
              <p className="text-xs text-cream-500">{bookConfig.explainer.honorific}</p>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="rounded-xl border border-gold-400/15 bg-forest-800/40 p-6 sm:p-8">
          <h2 className="mb-4 font-display text-xl font-semibold text-cream-100">
            Resources
          </h2>
          <div className="space-y-3">
            <Link
              href={bookConfig.bookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-forest-700/30 px-4 py-3 text-sm text-cream-300 transition-colors hover:border-gold-400/20 hover:bg-forest-800/50"
            >
              <span>Get the Physical Book</span>
              <span className="text-gold-400">&rarr;</span>
            </Link>
            <Link
              href={bookConfig.youtube.primary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-forest-700/30 px-4 py-3 text-sm text-cream-300 transition-colors hover:border-gold-400/20 hover:bg-forest-800/50"
            >
              <span>Video Lessons &mdash; {bookConfig.youtube.primary.label}</span>
              <span className="text-gold-400">&rarr;</span>
            </Link>
            <Link
              href={bookConfig.youtube.supplementary.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-forest-700/30 px-4 py-3 text-sm text-cream-300 transition-colors hover:border-gold-400/20 hover:bg-forest-800/50"
            >
              <span>Additional Explanations &mdash; {bookConfig.youtube.supplementary.label}</span>
              <span className="text-gold-400">&rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
