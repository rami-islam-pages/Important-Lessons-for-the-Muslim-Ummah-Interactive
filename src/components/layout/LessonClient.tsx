'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useNotes } from '@/lib/hooks/useNotes'
import { useProgress } from '@/lib/hooks/useProgress'
import { NotesPanel } from '@/components/notes/NotesPanel'
import { LessonRenderer } from '@/components/content/LessonRenderer'
import { getQuizForLesson } from '@/content/quizzes/index'
import type { LessonMeta } from '@/content/lessons-index'

interface LessonClientProps {
  lesson: LessonMeta
  prev: LessonMeta | null
  next: LessonMeta | null
  children: React.ReactNode
}

export function LessonClient({ lesson, prev, next, children }: LessonClientProps) {
  const [notesOpen, setNotesOpen] = useState(false)
  const { notes, addNote, editNote, deleteNote } = useNotes(lesson.slug)
  const { isCompleted, markComplete, unmarkComplete } = useProgress()
  const completed = isCompleted(lesson.slug)
  const quizMeta = getQuizForLesson(lesson.slug)

  return (
    <>
      {/* Top navigation */}
      <nav className="sticky top-14 z-30 border-b border-forest-700/50 bg-forest-900/95 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
          <Link
            href="/lessons"
            className="text-sm text-cream-400 transition-colors hover:text-gold-400"
          >
            &larr; All Lessons
          </Link>
          <div className="flex items-center gap-2">
            {quizMeta && (
              <Link
                href={`/quizzes/${quizMeta.slug}`}
                className="rounded-md bg-gold-400/10 px-3 py-1.5 text-xs font-medium text-gold-400 transition-colors hover:bg-gold-400/20"
              >
                Take Quiz
              </Link>
            )}
            <button
              onClick={() => setNotesOpen(true)}
              className="rounded-md bg-forest-800/60 px-3 py-1.5 text-xs text-cream-400 transition-colors hover:bg-forest-700/60 hover:text-cream-100"
              aria-label="Open notes"
            >
              Notes ({notes.length})
            </button>
          </div>
        </div>
      </nav>

      {/* Lesson content */}
      <LessonRenderer title={lesson.title}>
        {children}
      </LessonRenderer>

      {/* Completion + Bottom navigation */}
      <div className="mx-auto max-w-3xl px-4 pb-12">
        {/* Mark complete button */}
        {lesson.number !== null && (
          <div className="flex justify-center py-6">
            <button
              onClick={() =>
                completed
                  ? unmarkComplete(lesson.slug)
                  : markComplete(lesson.slug)
              }
              className={
                completed
                  ? 'flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-900/20 px-6 py-3 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-900/30'
                  : 'flex items-center gap-2 rounded-lg border border-gold-400/30 bg-gold-400/10 px-6 py-3 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400/20'
              }
            >
              {completed ? (
                <>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Completed
                </>
              ) : (
                'Mark as Completed'
              )}
            </button>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-forest-700/30 pt-6">
          {prev ? (
            <Link
              href={`/lessons/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-cream-400 transition-colors hover:text-gold-400"
            >
              <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
              <span>{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/lessons/${next.slug}`}
              className="group flex items-center gap-2 text-sm text-cream-400 transition-colors hover:text-gold-400"
            >
              <span>{next.title}</span>
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Notes panel */}
      <NotesPanel
        notes={notes}
        onAdd={(content) => addNote(content)}
        onEdit={editNote}
        onDelete={deleteNote}
        isOpen={notesOpen}
        onClose={() => setNotesOpen(false)}
      />
    </>
  )
}
