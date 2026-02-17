import Link from 'next/link'
import { bookConfig } from '@/content/book.config'

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest-900">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)]" />

      {/* Decorative corner accents */}
      <div className="absolute top-4 left-4 h-12 w-12 border-t-2 border-l-2 border-gold-400/30" aria-hidden="true" />
      <div className="absolute top-4 right-4 h-12 w-12 border-t-2 border-r-2 border-gold-400/30" aria-hidden="true" />
      <div className="absolute bottom-4 left-4 h-12 w-12 border-b-2 border-l-2 border-gold-400/30" aria-hidden="true" />
      <div className="absolute bottom-4 right-4 h-12 w-12 border-b-2 border-r-2 border-gold-400/30" aria-hidden="true" />

      {/* Main content card */}
      <article className="relative z-10 mx-4 w-full max-w-lg animate-fade-in">
        <div className="rounded-2xl border border-gold-400/20 bg-forest-800/60 px-6 py-6 shadow-2xl backdrop-blur-sm sm:px-10 sm:py-8">
          {/* Bismillah */}
          <header className="mb-4 text-center">
            <h1
              className="font-arabic text-2xl leading-relaxed text-gold-400 sm:text-3xl"
              lang="ar"
              dir="rtl"
            >
              بسم الله الرحمن الرحيم
            </h1>
          </header>

          {/* Divider */}
          <div className="mx-auto mb-4 h-px w-24 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

          {/* Titles */}
          <div className="mb-4 text-center">
            <h2
              className="font-arabic mb-2 text-xl leading-relaxed text-cream-100 sm:text-2xl"
              lang="ar"
              dir="rtl"
            >
              {bookConfig.title.arabic}
            </h2>
            <p className="font-display text-xs tracking-widest text-cream-400 uppercase">
              The Important Lessons For The
            </p>
            <p className="font-display mt-0.5 text-xl font-semibold tracking-wider text-cream-100 sm:text-2xl">
              MUSLIM UMMAH
            </p>
          </div>

          {/* Divider */}
          <div className="mx-auto mb-3 h-px w-16 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

          {/* Author */}
          <section className="mb-2 text-center">
            <p className="font-arabic text-xs text-gold-300/80" lang="ar" dir="rtl">
              لسماحة الشيخ
            </p>
            <h3
              className="font-arabic mt-0.5 text-lg text-cream-200"
              lang="ar"
              dir="rtl"
            >
              عبد العزيز بن عبد الله بن باز
            </h3>
            <p className="font-display mt-0.5 text-xs text-cream-400">
              By: Sheikh Abdul Aziz bin Abdullah Bin Baz
            </p>
          </section>

          {/* Explainer */}
          <section className="mb-5 text-center">
            <p className="font-arabic text-xs text-gold-300/80" lang="ar" dir="rtl">
              شرحها فضيلة الشيخ
            </p>
            <h4
              className="font-arabic mt-0.5 text-base text-cream-200"
              lang="ar"
              dir="rtl"
            >
              هيثم بن محمد جميل سرحان
            </h4>
            <p className="font-display mt-0.5 text-xs text-cream-400">
              Explained by: Sheikh Haytham ibn Muhammad Jameel Sarhaan
            </p>
            <p className="mt-0 text-[10px] text-cream-500">
              Former teacher in Masjid Nabawi
            </p>
          </section>

          {/* Enter button */}
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/lessons"
              className="group relative inline-flex items-center gap-2 rounded-lg border border-gold-400/40 bg-gold-400/10 px-8 py-2.5 font-display text-lg font-medium text-gold-400 transition-all hover:border-gold-400/70 hover:bg-gold-400/20 hover:shadow-lg hover:shadow-gold-400/10"
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
              className="text-xs text-cream-500 transition-colors hover:text-gold-400"
            >
              Get the physical book &rarr;
            </Link>
          </div>
        </div>

        {/* Brand footer */}
        <p className="mt-4 text-center text-xs text-forest-500">
          {bookConfig.brand}
        </p>
      </article>
    </div>
  )
}
