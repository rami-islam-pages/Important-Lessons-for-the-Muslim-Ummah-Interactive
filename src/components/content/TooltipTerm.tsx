'use client'

import { useState } from 'react'

interface TooltipTermProps {
  term: string
  definition: string
}

export function TooltipTerm({ term, definition }: TooltipTermProps) {
  const [show, setShow] = useState(false)

  return (
    <span
      className="relative inline-block cursor-help border-b border-dotted border-gold-400/50 text-gold-400"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
      role="button"
      aria-label={`${term}: ${definition}`}
    >
      {term}
      {show && (
        <span className="absolute bottom-full left-1/2 z-50 mb-2 w-48 -translate-x-1/2 rounded-lg border border-gold-400/20 bg-forest-800 px-3 py-2 text-xs text-cream-200 shadow-lg">
          {definition}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-forest-800" />
        </span>
      )}
    </span>
  )
}
