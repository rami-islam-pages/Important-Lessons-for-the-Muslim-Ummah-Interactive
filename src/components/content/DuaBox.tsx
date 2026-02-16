interface DuaBoxProps {
  title: string
  arabic?: string
  transliteration?: string
  translation?: string
  children?: React.ReactNode
}

export function DuaBox({ title, arabic, transliteration, translation, children }: DuaBoxProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-gold-400/20 bg-forest-800/40">
      <div className="border-b border-gold-400/15 bg-forest-800/60 px-4 py-2">
        <h3 className="font-display text-base font-semibold text-gold-400">{title}</h3>
      </div>

      <div className="space-y-4 p-5">
        {arabic && (
          <p
            className="font-arabic text-center text-xl leading-[2.2] text-cream-100"
            lang="ar"
            dir="rtl"
          >
            {arabic}
          </p>
        )}

        {transliteration && (
          <p className="text-sm leading-relaxed text-cream-300">
            <strong className="text-cream-200">Transliteration: </strong>
            {transliteration}
          </p>
        )}

        {translation && (
          <p className="text-sm leading-relaxed text-cream-300">
            <strong className="text-cream-200">Translation: </strong>
            {translation}
          </p>
        )}

        {children}
      </div>
    </div>
  )
}
