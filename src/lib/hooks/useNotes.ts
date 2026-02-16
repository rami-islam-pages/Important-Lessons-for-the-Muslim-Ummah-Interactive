'use client'

import { useState, useCallback, useEffect } from 'react'
import type { Note } from '@/lib/types/notes'

const STORAGE_KEY = 'islamicLessonsNotes'

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2)
}

function loadNotes(): Record<string, Note[]> {
  if (typeof window === 'undefined') return {}
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

function saveNotes(notes: Record<string, Note[]>) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

export function useNotes(lessonSlug: string) {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const allNotes = loadNotes()
    setNotes(allNotes[lessonSlug] || [])
  }, [lessonSlug])

  const addNote = useCallback(
    (content: string, selectionText?: string) => {
      const note: Note = {
        id: generateId(),
        lessonSlug,
        type: selectionText ? 'selection' : 'general',
        content,
        selectionText,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }
      setNotes((prev) => {
        const updated = [note, ...prev]
        const allNotes = loadNotes()
        allNotes[lessonSlug] = updated
        saveNotes(allNotes)
        return updated
      })
    },
    [lessonSlug]
  )

  const editNote = useCallback(
    (id: string, content: string) => {
      setNotes((prev) => {
        const updated = prev.map((n) =>
          n.id === id
            ? { ...n, content, updatedAt: new Date().toISOString() }
            : n
        )
        const allNotes = loadNotes()
        allNotes[lessonSlug] = updated
        saveNotes(allNotes)
        return updated
      })
    },
    [lessonSlug]
  )

  const deleteNote = useCallback(
    (id: string) => {
      setNotes((prev) => {
        const updated = prev.filter((n) => n.id !== id)
        const allNotes = loadNotes()
        allNotes[lessonSlug] = updated
        saveNotes(allNotes)
        return updated
      })
    },
    [lessonSlug]
  )

  return { notes, addNote, editNote, deleteNote }
}
