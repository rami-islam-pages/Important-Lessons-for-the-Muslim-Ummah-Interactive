'use client'

import { useState } from 'react'
import type { Quiz } from '@/lib/types/quiz'
import { useQuiz } from '@/lib/hooks/useQuiz'
import { cn } from '@/lib/utils/cn'

interface QuizContainerProps {
  quiz: Quiz
}

export function QuizContainer({ quiz }: QuizContainerProps) {
  const {
    answers,
    setAnswer,
    toggleMultiSelect,
    submit,
    reset,
    submitted,
    result,
    isCorrect,
    totalQuestions,
    answeredCount,
  } = useQuiz(quiz)

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-2 text-center font-display text-2xl font-bold text-forest-900">
        {quiz.title}
      </h1>

      {/* Progress bar */}
      <div className="mb-8 text-center">
        <div className="mx-auto h-2 w-48 overflow-hidden rounded-full bg-cream-300">
          <div
            className="h-full rounded-full bg-forest-600 transition-all"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-ink-400">
          {answeredCount} of {totalQuestions} answered
        </p>
      </div>

      {/* Results banner */}
      {result && (
        <div className="mb-8 rounded-xl border border-forest-600/20 bg-cream-50 p-6 text-center shadow-sm">
          <p className="font-display text-4xl font-bold text-forest-800">
            {result.percentage}%
          </p>
          <p className="mt-1 text-sm text-ink-500">
            {result.score} out of {result.total} correct
          </p>
          <button
            onClick={reset}
            className="mt-4 rounded-lg bg-forest-800 px-4 py-2 text-sm font-medium text-cream-100 transition-colors hover:bg-forest-700"
          >
            Retake Quiz
          </button>
        </div>
      )}

      {/* Questions grouped by section */}
      {quiz.sections.map((section, sIdx) => (
        <div key={sIdx} className="mb-10">
          <h2 className="mb-4 border-l-4 border-forest-600 pl-3 font-display text-lg font-semibold text-ink-800">
            {section.title}
          </h2>

          <div className="space-y-5">
            {section.questions.map((question) => {
              const correct = isCorrect(question.id)
              return (
                <div
                  key={question.id}
                  className={cn(
                    'rounded-lg border p-4 transition-colors',
                    submitted && correct === true
                      ? 'border-forest-400/30 bg-forest-100/50'
                      : submitted && correct === false
                        ? 'border-red-300/40 bg-red-50'
                        : 'border-cream-400/60 bg-cream-50'
                  )}
                >
                  <p className="mb-3 text-sm font-medium text-ink-700">
                    <span className="mr-1 text-forest-700">{question.number}.</span>
                    {question.text}
                  </p>

                  {/* Multiple choice / True-false */}
                  {(question.type === 'multiple-choice' ||
                    question.type === 'true-false') && (
                    <div className="space-y-2">
                      {'options' in question &&
                        question.options.map((opt, oIdx) => (
                          <label
                            key={oIdx}
                            className={cn(
                              'flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                              answers[question.id] === String(oIdx)
                                ? 'bg-forest-100 text-ink-800'
                                : 'text-ink-600 hover:bg-cream-200',
                              submitted &&
                                'correctIndex' in question &&
                                oIdx === question.correctIndex &&
                                'bg-forest-100 text-forest-700'
                            )}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={String(oIdx)}
                              checked={answers[question.id] === String(oIdx)}
                              onChange={() => setAnswer(question.id, String(oIdx))}
                              disabled={submitted}
                              className="accent-forest-700"
                            />
                            {opt}
                          </label>
                        ))}
                    </div>
                  )}

                  {/* Multiple select */}
                  {question.type === 'multiple-select' && (
                    <div className="space-y-2">
                      {'options' in question &&
                        question.options.map((opt, oIdx) => {
                          const selected = (
                            (answers[question.id] as string[]) || []
                          ).includes(String(oIdx))
                          return (
                            <label
                              key={oIdx}
                              className={cn(
                                'flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                                selected
                                  ? 'bg-forest-100 text-ink-800'
                                  : 'text-ink-600 hover:bg-cream-200',
                                submitted &&
                                  'correctIndices' in question &&
                                  question.correctIndices.includes(oIdx) &&
                                  'bg-forest-100 text-forest-700'
                              )}
                            >
                              <input
                                type="checkbox"
                                checked={selected}
                                onChange={() =>
                                  toggleMultiSelect(question.id, oIdx)
                                }
                                disabled={submitted}
                                className="accent-forest-700"
                              />
                              {opt}
                            </label>
                          )
                        })}
                    </div>
                  )}

                  {/* Fill in blank */}
                  {question.type === 'fill-blank' && (
                    <div>
                      {'isTextarea' in question && question.isTextarea ? (
                        <textarea
                          value={(answers[question.id] as string) || ''}
                          onChange={(e) =>
                            setAnswer(question.id, e.target.value)
                          }
                          disabled={submitted}
                          rows={3}
                          className="w-full resize-none rounded-lg border border-cream-400 bg-cream-100 px-3 py-2 text-sm text-ink-700 placeholder:text-ink-400 focus:border-forest-600 focus:outline-none disabled:opacity-60"
                          placeholder="Write your answer..."
                        />
                      ) : (
                        <input
                          type="text"
                          value={(answers[question.id] as string) || ''}
                          onChange={(e) =>
                            setAnswer(question.id, e.target.value)
                          }
                          disabled={submitted}
                          className="w-full rounded-lg border border-cream-400 bg-cream-100 px-3 py-2 text-sm text-ink-700 placeholder:text-ink-400 focus:border-forest-600 focus:outline-none disabled:opacity-60"
                          placeholder="Your answer..."
                        />
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* Submit button */}
      {!submitted && (
        <div className="sticky bottom-4 flex justify-center pt-4">
          <button
            onClick={submit}
            className="rounded-lg bg-forest-800 px-8 py-3 font-display text-base font-medium text-cream-100 shadow-lg transition-all hover:bg-forest-700 hover:shadow-xl"
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  )
}
