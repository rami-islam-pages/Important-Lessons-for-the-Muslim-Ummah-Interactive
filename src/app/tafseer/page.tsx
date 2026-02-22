import Link from 'next/link'
import { tafseerIndex } from '@/content/tafseer/index'

export const metadata = {
  title: 'Quran Tafseer - Important Lessons for the Muslim Ummah',
  description:
    'Selections from Tayseer Al-Kareem Ar-Rahmaan by Abdu-Rrahmaan As-Sa\'di covering Al-Faatiha, Ayatul Kursee, and short surahs from Az-Zalzalah to An-Naas.',
}

export default function TafseerPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Page header */}
      <div className="mb-10 text-center">
        <h1 className="font-display text-3xl font-bold text-ink-800 sm:text-4xl">
          Quran Tafseer
        </h1>
        <div className="mx-auto mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
          <span className="text-gold-400 text-xs">❦</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
        </div>
        <p className="mt-2 text-sm text-ink-500">
          Selections from &ldquo;Tayseer Al-Kareem Ar-Rahmaan Fee Tafseeri Kalaam Al-Manaan&rdquo;
        </p>
        <p className="mt-1 text-xs text-ink-400">
          By Abdu-Rrahmaan As-Sa&rsquo;di &mdash; may Allah have mercy on him
        </p>
      </div>

      {/* Surah grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tafseerIndex.map((surah, idx) => (
          <Link
            key={surah.slug}
            href={`/tafseer/${surah.slug}`}
            className="group rounded-xl border border-cream-400/60 bg-cream-50 p-5 transition-all hover:border-forest-600/30 hover:bg-cream-100 hover:shadow-lg hover:shadow-forest-600/5"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-forest-800 font-display text-sm font-bold text-cream-100">
                {surah.surahNumber}
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-ink-800 transition-colors group-hover:text-forest-800">
                  {surah.surahName}
                </h2>
                <p className="font-arabic text-sm text-ink-500" lang="ar" dir="rtl">
                  {surah.surahArabic}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span
                className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${
                  surah.type === 'makki'
                    ? 'bg-amber-400/10 text-amber-400'
                    : 'bg-forest-100 text-forest-700'
                }`}
              >
                {surah.type === 'makki' ? 'Makki' : 'Madani'}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Back link */}
      <div className="mt-10 text-center">
        <Link
          href="/lessons/lesson-1"
          className="text-sm text-ink-500 transition-colors hover:text-forest-700"
        >
          &larr; Back to Lesson 1
        </Link>
      </div>
    </div>
  )
}
