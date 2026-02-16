interface SectionTitleProps {
  children: React.ReactNode
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mt-10 mb-4 border-l-4 border-gold-400/50 pl-4 font-display text-xl font-semibold text-cream-100 first:mt-0">
      {children}
    </h2>
  )
}
