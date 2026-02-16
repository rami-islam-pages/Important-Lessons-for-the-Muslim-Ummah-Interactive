export interface Note {
  id: string
  lessonSlug: string
  type: 'general' | 'selection'
  content: string
  selectionText?: string
  createdAt: string
  updatedAt: string
}

export interface Highlight {
  id: string
  lessonSlug: string
  text: string
  color: HighlightColor
  createdAt: string
}

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink' | 'orange'

export const HIGHLIGHT_COLORS: Record<HighlightColor, string> = {
  yellow: '#fef08a',
  green: '#bbf7d0',
  blue: '#bfdbfe',
  pink: '#fbcfe8',
  orange: '#fed7aa',
}
