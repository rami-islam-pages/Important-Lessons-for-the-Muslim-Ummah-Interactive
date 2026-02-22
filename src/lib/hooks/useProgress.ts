'use client'

import { useState, useCallback, useEffect } from 'react'

const STORAGE_KEY = 'islamicLessonsProgress'

function loadProgress(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveProgress(slugs: string[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs))
}

export function useProgress() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  useEffect(() => {
    setCompletedLessons(loadProgress())
  }, [])

  const isCompleted = useCallback(
    (slug: string) => completedLessons.includes(slug),
    [completedLessons]
  )

  const markComplete = useCallback((slug: string) => {
    setCompletedLessons((prev) => {
      if (prev.includes(slug)) return prev
      const updated = [...prev, slug]
      saveProgress(updated)
      return updated
    })
  }, [])

  const unmarkComplete = useCallback((slug: string) => {
    setCompletedLessons((prev) => {
      const updated = prev.filter((s) => s !== slug)
      saveProgress(updated)
      return updated
    })
  }, [])

  return {
    completedLessons,
    completedCount: completedLessons.length,
    isCompleted,
    markComplete,
    unmarkComplete,
  }
}
