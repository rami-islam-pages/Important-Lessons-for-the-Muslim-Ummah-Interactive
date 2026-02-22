import Link from 'next/link'
import { bookConfig } from '@/content/book.config'

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900">
      {/* Subtle parchment texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(166,124,26,0.06)_0%,_transparent_70%)]" />

      {/* Decorative corner accents — Islamic geometric frame */}
      <div className="absolute top-6 left-6 h-16 w-16 border-t-2 border-l-2 border-gold-400/40 rounded-tl-sm" aria-hidden="true" />
      <div className="absolute top-6 right-6 h-16 w-16 border-t-2 border-r-2 border-gold-400/40 rounded-tr-sm" aria-hidden="true" />
      <div className="absolute bottom-6 left-6 h-16 w-16 border-b-2 border-l-2 border-gold-400/40 rounded-bl-sm" aria-hidden="true" />
      <div className="absolute bottom-6 right-6 h-16 w-16 border-b-2 border-r-2 border-gold-400/40 rounded-br-sm" aria-hidden="true" />

      {/* Main content card — book cover style */}
      <article className="relative z-10 mx-4 w-full max-w-lg animate-fade-in">
        <div className="rounded-xl border-2 border-gold-400/30 bg-cream-100 px-6 py-8 shadow-2xl sm:px-10 sm:py-10">
          {/* Inner decorative border */}
          <div className="rounded-lg border border-gold-400/20 px-5 py-6 sm:px-8 sm:py-8">
            {/* Bismillah */}
            <header className="mb-5 text-center">
              <h1
                className="font-arabic text-2xl leading-relaxed text-forest-800 sm:text-3xl"
                lang="ar"
                dir="rtl"
              >
                بسم الله الرحمن الرحيم
              </h1>
            </header>

            {/* Ornamental divider */}
            <div className="mx-auto mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
              <span className="text-gold-400 text-xs">❦</span>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
            </div>

            {/* Titles */}
            <div className="mb-5 text-center">
              <h2
                className="font-arabic mb-3 text-xl leading-relaxed text-forest-900 sm:text-2xl"
                lang="ar"
                dir="rtl"
              >
                {bookConfig.title.arabic}
              </h2>
              <p className="font-display text-xs tracking-[0.25em] text-ink-500 uppercase">
                The Important Lessons For The
              </p>
              <p className="font-display mt-1 text-2xl font-semibold tracking-wider text-forest-800 sm:text-3xl">
                MUSLIM UMMAH
              </p>
            </div>

            {/* Divider */}
            <div className="mx-auto mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold-400/40" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400/50" />
              <span className="h-px w-10 bg-gold-400/40" />
            </div>

            {/* Author */}
            <section className="mb-3 text-center">
              <p className="font-arabic text-xs text-gold-500" lang="ar" dir="rtl">
                لسماحة الشيخ
              </p>
              <h3
                className="font-arabic mt-1 text-lg text-ink-700"
                lang="ar"
                dir="rtl"
              >
                عبد العزيز بن عبد الله بن باز
              </h3>
              <p className="font-display mt-1 text-xs text-ink-500">
                By: Sheikh Abdul Aziz bin Abdullah Bin Baz
              </p>
              <p className="font-display mt-0.5 text-[10px] text-ink-400 italic">رحمه الله</p>
            </section>

            {/* Explainer */}
            <section className="mb-6 text-center">
              <p className="font-arabic text-xs text-gold-500" lang="ar" dir="rtl">
                شرحها فضيلة الشيخ
              </p>
              <h4
                className="font-arabic mt-1 text-base text-ink-700"
                lang="ar"
                dir="rtl"
              >
                هيثم بن محمد جميل سرحان
              </h4>
              <p className="font-display mt-1 text-xs text-ink-500">
                Explained by: Sheikh Haytham ibn Muhammad Jameel Sarhaan
              </p>
              <p className="mt-0.5 text-[10px] text-ink-400">
                Former teacher in Masjid Nabawi
              </p>
            </section>

            {/* Enter button */}
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/lessons"
                className="group relative inline-flex items-center gap-2 rounded-lg border-2 border-forest-800 bg-forest-800 px-10 py-3 font-display text-lg font-medium text-cream-100 shadow-md transition-all hover:bg-forest-700 hover:shadow-lg"
              >
                <span>Enter</span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </Link>

              <Link
                href={bookConfig.bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ink-400 transition-colors hover:text-forest-700"
              >
                Get the physical book &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Brand footer */}
        <p className="mt-4 text-center text-xs text-cream-400">
          <Link href="/about" className="transition-colors hover:text-cream-200">
            {bookConfig.brand}
          </Link>
        </p>
      </article>
    </div>
  )
}
