'use client'

import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils/cn'
import type { Note } from '@/lib/types/notes'

interface NotesPanelProps {
  notes: Note[]
  onAdd: (content: string) => void
  onEdit: (id: string, content: string) => void
  onDelete: (id: string) => void
  isOpen: boolean
  onClose: () => void
}

export function NotesPanel({
  notes,
  onAdd,
  onEdit,
  onDelete,
  isOpen,
  onClose,
}: NotesPanelProps) {
  const [newNote, setNewNote] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState('')

  const handleAdd = useCallback(() => {
    if (!newNote.trim()) return
    onAdd(newNote.trim())
    setNewNote('')
  }, [newNote, onAdd])

  const startEdit = useCallback((note: Note) => {
    setEditingId(note.id)
    setEditText(note.content)
  }, [])

  const saveEdit = useCallback(() => {
    if (editingId && editText.trim()) {
      onEdit(editingId, editText.trim())
    }
    setEditingId(null)
    setEditText('')
  }, [editingId, editText, onEdit])

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-forest-700/50 bg-forest-900 shadow-xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-forest-700/50 px-4 py-3">
          <h2 className="font-display text-lg font-semibold text-cream-100">
            Notes
          </h2>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-cream-400 transition-colors hover:bg-forest-800 hover:text-cream-100"
            aria-label="Close notes panel"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Add note */}
        <div className="border-b border-forest-700/30 p-4">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write a note..."
            className="w-full resize-none rounded-lg border border-forest-600/50 bg-forest-800/50 px-3 py-2 text-sm text-cream-200 placeholder:text-cream-500 focus:border-gold-400/40 focus:outline-none"
            rows={3}
          />
          <button
            onClick={handleAdd}
            disabled={!newNote.trim()}
            className="mt-2 w-full rounded-lg bg-gold-400/10 px-3 py-2 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400/20 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Add Note
          </button>
        </div>

        {/* Notes list */}
        <div className="flex-1 overflow-y-auto p-4">
          {notes.length === 0 ? (
            <p className="text-center text-sm text-cream-500">
              No notes yet. Start by writing one above.
            </p>
          ) : (
            <div className="space-y-3">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="rounded-lg border border-forest-700/30 bg-forest-800/30 p-3"
                >
                  {note.selectionText && (
                    <p className="mb-2 border-l-2 border-gold-400/40 pl-2 text-xs text-cream-500 italic">
                      &ldquo;{note.selectionText.slice(0, 100)}
                      {note.selectionText.length > 100 ? '...' : ''}&rdquo;
                    </p>
                  )}

                  {editingId === note.id ? (
                    <div>
                      <textarea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="w-full resize-none rounded border border-forest-600/50 bg-forest-800/50 px-2 py-1.5 text-sm text-cream-200 focus:border-gold-400/40 focus:outline-none"
                        rows={3}
                        autoFocus
                      />
                      <div className="mt-1.5 flex gap-2">
                        <button
                          onClick={saveEdit}
                          className="rounded px-2 py-1 text-xs text-gold-400 hover:bg-gold-400/10"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="rounded px-2 py-1 text-xs text-cream-500 hover:bg-forest-800"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm leading-relaxed text-cream-300">
                        {note.content}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-xs text-cream-500">
                          {formatDate(note.updatedAt)}
                          {note.updatedAt !== note.createdAt && ' (edited)'}
                        </span>
                        <div className="flex gap-1">
                          <button
                            onClick={() => startEdit(note)}
                            className="rounded p-1 text-xs text-cream-500 hover:text-gold-400"
                            aria-label="Edit note"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => onDelete(note.id)}
                            className="rounded p-1 text-xs text-cream-500 hover:text-red-400"
                            aria-label="Delete note"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
