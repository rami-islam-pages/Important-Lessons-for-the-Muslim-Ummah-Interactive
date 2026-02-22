interface AyahBoxProps {
  header: string
  arabic: string
  translation: string
  translator?: string
  link?: string
}

export function AyahBox({ header, arabic, translation, translator, link }: AyahBoxProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-forest-600/20 bg-cream-50 shadow-sm">
      {/* Header */}
      <div className="border-b border-forest-600/15 bg-forest-800 px-4 py-2">
        <p className="font-display text-sm font-medium text-cream-200">{header}</p>
      </div>

      {/* Arabic text */}
      <div className="border-b border-cream-400/40 px-6 py-5">
        <p
          className="quran-text text-center text-2xl leading-[2.5] text-ink-800"
          lang="ar"
          dir="rtl"
        >
          {arabic}
        </p>
      </div>

      {/* Translation */}
      <div className="px-5 py-4">
        <p className="text-sm leading-relaxed text-ink-600">
          {translation}
          {translator && (
            <span className="mt-1 block text-xs text-ink-400">— {translator}</span>
          )}
        </p>
      </div>

      {/* Quran.com link */}
      {link && (
        <div className="border-t border-cream-400/40 px-4 py-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-forest-700 transition-colors hover:text-forest-800"
          >
            <span>View on Quran.com</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}
    </div>
  )
}
