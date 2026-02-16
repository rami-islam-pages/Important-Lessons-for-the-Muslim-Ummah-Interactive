'use client'

import { useState, useCallback } from 'react'
import type { Quiz, Question, QuizAttempt } from '@/lib/types/quiz'

const STORAGE_KEY = 'islamicLessonsQuizResults'

function loadResults(): QuizAttempt[] {
  if (typeof window === 'undefined') return []
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

function saveResults(results: QuizAttempt[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results))
}

function gradeQuestion(
  question: Question,
  answer: string | string[] | undefined
): boolean {
  if (!answer) return false

  switch (question.type) {
    case 'multiple-choice':
    case 'true-false': {
      const q = question as { correctIndex: number }
      return answer === String(q.correctIndex)
    }
    case 'multiple-select': {
      const q = question as { correctIndices: number[] }
      const selected = Array.isArray(answer) ? answer.map(Number).sort() : []
      const correct = [...q.correctIndices].sort()
      return (
        selected.length === correct.length &&
        selected.every((v, i) => v === correct[i])
      )
    }
    case 'fill-blank': {
      const q = question as { acceptableAnswers?: string[] }
      if (!q.acceptableAnswers) return true // self-graded
      const ans = typeof answer === 'string' ? answer.toLowerCase().trim() : ''
      return q.acceptableAnswers.some(
        (a) => ans.includes(a.toLowerCase().trim())
      )
    }
    default:
      return false
  }
}

export function useQuiz(quiz: Quiz) {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({})
  const [submitted, setSubmitted] = useState(false)
  const [result, setResult] = useState<QuizAttempt | null>(null)

  const allQuestions = quiz.sections.flatMap((s) => s.questions)
  const gradableQuestions = allQuestions.filter(
    (q) =>
      q.type !== 'fill-blank' ||
      (q as { acceptableAnswers?: string[] }).acceptableAnswers
  )

  const setAnswer = useCallback(
    (questionId: string, value: string | string[]) => {
      setAnswers((prev) => ({ ...prev, [questionId]: value }))
    },
    []
  )

  const toggleMultiSelect = useCallback(
    (questionId: string, optionIndex: number) => {
      setAnswers((prev) => {
        const current = (prev[questionId] as string[]) || []
        const idx = String(optionIndex)
        const updated = current.includes(idx)
          ? current.filter((v) => v !== idx)
          : [...current, idx]
        return { ...prev, [questionId]: updated }
      })
    },
    []
  )

  const submit = useCallback(() => {
    let score = 0
    for (const q of gradableQuestions) {
      if (gradeQuestion(q, answers[q.id])) {
        score++
      }
    }

    const attempt: QuizAttempt = {
      quizId: quiz.id,
      answers,
      score,
      total: gradableQuestions.length,
      percentage:
        gradableQuestions.length > 0
          ? Math.round((score / gradableQuestions.length) * 100)
          : 0,
      completedAt: new Date().toISOString(),
    }

    const allResults = loadResults()
    allResults.push(attempt)
    saveResults(allResults)

    setResult(attempt)
    setSubmitted(true)
  }, [answers, gradableQuestions, quiz.id])

  const reset = useCallback(() => {
    setAnswers({})
    setSubmitted(false)
    setResult(null)
  }, [])

  const isCorrect = useCallback(
    (questionId: string) => {
      if (!submitted) return undefined
      const q = allQuestions.find((q) => q.id === questionId)
      if (!q) return undefined
      return gradeQuestion(q, answers[questionId])
    },
    [submitted, allQuestions, answers]
  )

  return {
    answers,
    setAnswer,
    toggleMultiSelect,
    submit,
    reset,
    submitted,
    result,
    isCorrect,
    totalQuestions: allQuestions.length,
    answeredCount: Object.keys(answers).length,
  }
}
