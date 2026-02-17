'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils/cn'

interface TafseerSectionProps {
  surahName: string
  surahArabic?: string
  surahNumber?: string
  type?: 'makki' | 'madani'
  children: React.ReactNode
  defaultOpen?: boolean
}

export function TafseerSection({
  surahName,
  surahArabic,
  surahNumber,
  type,
  children,
  defaultOpen = false,
}: TafseerSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-gold-400/20 bg-forest-800/30">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-forest-800/50 sm:px-5"
      >
        <span
          className={cn(
            'flex h-5 w-5 shrink-0 items-center justify-center text-gold-400/70 transition-transform text-sm',
            isOpen && 'rotate-90'
          )}
        >
          ▸
        </span>

        <div className="flex flex-1 items-center gap-3 min-w-0">
          {surahNumber && (
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gold-400/10 font-display text-xs font-bold text-gold-400">
              {surahNumber}
            </span>
          )}
          <div className="min-w-0">
            <h3 className="font-display text-sm font-semibold text-cream-100 sm:text-base truncate">
              {surahName}
            </h3>
          </div>
        </div>

        {surahArabic && (
          <span className="font-arabic shrink-0 text-base text-gold-400/80 sm:text-lg" lang="ar" dir="rtl">
            {surahArabic}
          </span>
        )}

        {type && (
          <span
            className={cn(
              'shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium',
              type === 'makki'
                ? 'bg-gold-400/10 text-gold-400'
                : 'bg-emerald-400/10 text-emerald-400'
            )}
          >
            {type === 'makki' ? 'Makki' : 'Madani'}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="border-t border-gold-400/10 px-4 py-4 sm:px-5">
          <div className="lesson-content space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
