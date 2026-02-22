import { cn } from '@/lib/utils/cn'

type GridVariant = 'five-box' | 'four-box' | 'three-category' | 'negligence-items'

interface GridItem {
  content?: string
  title?: string
  number?: string
  variant?: 'negligence' | 'extremism' | 'moderation'
  description?: string
}

interface ContentGridProps {
  variant: GridVariant
  items: GridItem[]
}

const variantColors: Record<string, string> = {
  negligence: 'border-red-300/40 bg-red-50',
  extremism: 'border-orange-300/40 bg-orange-50',
  moderation: 'border-forest-300/40 bg-forest-100/50',
}

const variantTitleColors: Record<string, string> = {
  negligence: 'text-red-700',
  extremism: 'text-orange-700',
  moderation: 'text-forest-700',
}

const gridCols: Record<GridVariant, string> = {
  'five-box': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  'four-box': 'grid-cols-1 sm:grid-cols-2',
  'three-category': 'grid-cols-1 sm:grid-cols-3',
  'negligence-items': 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
}

export function ContentGrid({ variant, items }: ContentGridProps) {
  return (
    <div className={cn('my-6 grid gap-3', gridCols[variant])}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={cn(
            'rounded-lg border p-4 transition-colors',
            item.variant
              ? variantColors[item.variant]
              : 'border-cream-400/60 bg-cream-50 shadow-sm',
            variant === 'negligence-items' && 'text-center'
          )}
        >
          {item.number && (
            <span className="mb-1 block font-display text-sm font-semibold text-forest-700">
              {item.number}
            </span>
          )}
          {item.title && (
            <h3
              className={cn(
                'mb-2 font-display text-base font-semibold',
                item.variant ? variantTitleColors[item.variant] : 'text-forest-800'
              )}
            >
              {item.title}
            </h3>
          )}
          {item.description ? (
            <p className="text-sm leading-relaxed text-ink-600">{item.description}</p>
          ) : (
            <p className="text-sm leading-relaxed text-ink-600">{item.content}</p>
          )}
        </div>
      ))}
    </div>
  )
}
