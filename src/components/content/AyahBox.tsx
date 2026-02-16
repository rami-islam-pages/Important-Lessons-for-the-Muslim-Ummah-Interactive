interface AyahBoxProps {
  header: string
  arabic: string
  translation: string
  translator?: string
  link?: string
}

export function AyahBox({ header, arabic, translation, translator, link }: AyahBoxProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-gold-400/20 bg-forest-800/40">
      {/* Header */}
      <div className="border-b border-gold-400/15 bg-forest-800/60 px-4 py-2">
        <p className="font-display text-sm font-medium text-gold-400">{header}</p>
      </div>

      {/* Arabic text */}
      <div className="border-b border-gold-400/10 px-6 py-5">
        <p
          className="quran-text text-center text-2xl leading-[2.5] text-cream-100"
          lang="ar"
          dir="rtl"
        >
          {arabic}
        </p>
      </div>

      {/* Translation */}
      <div className="px-5 py-4">
        <p className="text-sm leading-relaxed text-cream-300">
          {translation}
          {translator && (
            <span className="mt-1 block text-xs text-cream-500">— {translator}</span>
          )}
        </p>
      </div>

      {/* Quran.com link */}
      {link && (
        <div className="border-t border-gold-400/10 px-4 py-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-gold-400/70 transition-colors hover:text-gold-400"
          >
            <span>View on Quran.com</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}
    </div>
  )
}
