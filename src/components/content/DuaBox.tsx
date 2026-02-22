interface DuaBoxProps {
  title: string
  arabic?: string
  transliteration?: string
  translation?: string
  children?: React.ReactNode
}

export function DuaBox({ title, arabic, transliteration, translation, children }: DuaBoxProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-forest-600/20 bg-cream-50 shadow-sm">
      <div className="border-b border-forest-600/15 bg-forest-800 px-4 py-2">
        <h3 className="font-display text-base font-semibold text-cream-200">{title}</h3>
      </div>

      <div className="space-y-4 p-5">
        {arabic && (
          <p
            className="font-arabic text-center text-xl leading-[2.2] text-ink-800"
            lang="ar"
            dir="rtl"
          >
            {arabic}
          </p>
        )}

        {transliteration && (
          <p className="text-sm leading-relaxed text-ink-600">
            <strong className="text-ink-700">Transliteration: </strong>
            {transliteration}
          </p>
        )}

        {translation && (
          <p className="text-sm leading-relaxed text-ink-600">
            <strong className="text-ink-700">Translation: </strong>
            {translation}
          </p>
        )}

        {children}
      </div>
    </div>
  )
}
