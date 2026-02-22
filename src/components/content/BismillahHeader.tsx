export function BismillahHeader() {
  return (
    <div className="my-6 text-center">
      <p
        className="font-arabic text-2xl leading-relaxed text-forest-800"
        lang="ar"
        dir="rtl"
      >
        بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </p>
      <div className="mx-auto mt-2 flex items-center justify-center gap-3">
        <span className="h-px w-10 bg-gold-400/40" />
        <span className="h-1 w-1 rounded-full bg-gold-400/50" />
        <span className="h-px w-10 bg-gold-400/40" />
      </div>
    </div>
  )
}
