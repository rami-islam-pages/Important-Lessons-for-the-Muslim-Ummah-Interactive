'use client'

import Link from 'next/link'
import { tafseerIndex, getSurahBySlug, getAdjacentSurahs } from '@/content/tafseer/index'
import { surahComponents, MakkiMadaniDefinitions } from '@/content/tafseer/surahs'
import { useParams } from 'next/navigation'

export default function SurahTafseerPage() {
  const params = useParams()
  const slug = params.surah as string
  const surah = getSurahBySlug(slug)
  const { prev, next } = getAdjacentSurahs(slug)
  const SurahContent = surah ? surahComponents[slug] : null

  if (!surah || !SurahContent) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-cream-100">Surah not found</h1>
        <p className="mt-2 text-sm text-cream-400">The requested tafseer section could not be found.</p>
        <Link href="/tafseer" className="mt-4 inline-block text-sm text-gold-400 hover:text-gold-300">
          &larr; Back to Tafseer
        </Link>
      </div>
    )
  }

  // Show Makki/Madani definitions before Al-Zalzalah (third surah)
  const showDefinitions = slug === 'al-zalzalah'

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Back link */}
      <div className="mb-6">
        <Link
          href="/tafseer"
          className="text-sm text-cream-400 transition-colors hover:text-gold-400"
        >
          &larr; All Tafseer Sections
        </Link>
      </div>

      {/* Surah header */}
      <div className="mb-8 text-center">
        <h1 className="font-display text-2xl font-bold text-cream-100 sm:text-3xl">
          {surah.surahName}
        </h1>
        <p className="font-arabic mt-2 text-xl text-gold-400" lang="ar" dir="rtl">
          {surah.surahArabic}
        </p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <span className="text-xs text-cream-500">Surah {surah.surahNumber}</span>
          <span className="text-forest-600">|</span>
          <span
            className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${
              surah.type === 'makki'
                ? 'bg-amber-400/10 text-amber-400'
                : 'bg-emerald-400/10 text-emerald-400'
            }`}
          >
            {surah.type === 'makki' ? 'Makki' : 'Madani'}
          </span>
        </div>
      </div>

      {/* Makki/Madani definitions (shown before Al-Zalzalah) */}
      {showDefinitions && (
        <div className="mb-8 rounded-xl border border-gold-400/15 bg-forest-800/30 p-5">
          <h3 className="mb-3 font-display text-sm font-semibold text-gold-400">Definitions</h3>
          <div className="prose-sm text-cream-300">
            <MakkiMadaniDefinitions />
          </div>
        </div>
      )}

      {/* Tafseer content */}
      <div className="lesson-content">
        <SurahContent />
      </div>

      {/* Prev/Next navigation */}
      <div className="mt-10 flex items-center justify-between border-t border-forest-700/30 pt-6">
        {prev ? (
          <Link
            href={`/tafseer/${prev.slug}`}
            className="group flex items-center gap-2 text-sm text-cream-400 transition-colors hover:text-gold-400"
          >
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
            <span>{prev.surahName}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/tafseer/${next.slug}`}
            className="group flex items-center gap-2 text-sm text-cream-400 transition-colors hover:text-gold-400"
          >
            <span>{next.surahName}</span>
            <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
