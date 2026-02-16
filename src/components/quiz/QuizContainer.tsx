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
      <h1 className="mb-2 text-center font-display text-2xl font-bold text-cream-100">
        {quiz.title}
      </h1>

      {/* Progress bar */}
      <div className="mb-8 text-center">
        <div className="mx-auto h-2 w-48 overflow-hidden rounded-full bg-forest-700/50">
          <div
            className="h-full rounded-full bg-gold-400/60 transition-all"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-cream-500">
          {answeredCount} of {totalQuestions} answered
        </p>
      </div>

      {/* Results banner */}
      {result && (
        <div className="mb-8 rounded-xl border border-gold-400/20 bg-forest-800/50 p-6 text-center">
          <p className="font-display text-4xl font-bold text-gold-400">
            {result.percentage}%
          </p>
          <p className="mt-1 text-sm text-cream-400">
            {result.score} out of {result.total} correct
          </p>
          <button
            onClick={reset}
            className="mt-4 rounded-lg bg-gold-400/10 px-4 py-2 text-sm font-medium text-gold-400 transition-colors hover:bg-gold-400/20"
          >
            Retake Quiz
          </button>
        </div>
      )}

      {/* Questions grouped by section */}
      {quiz.sections.map((section, sIdx) => (
        <div key={sIdx} className="mb-10">
          <h2 className="mb-4 border-l-4 border-gold-400/40 pl-3 font-display text-lg font-semibold text-cream-100">
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
                      ? 'border-emerald-400/30 bg-emerald-900/10'
                      : submitted && correct === false
                        ? 'border-red-400/30 bg-red-900/10'
                        : 'border-forest-700/30 bg-forest-800/30'
                  )}
                >
                  <p className="mb-3 text-sm font-medium text-cream-200">
                    <span className="mr-1 text-gold-400">{question.number}.</span>
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
                                ? 'bg-gold-400/10 text-cream-100'
                                : 'text-cream-400 hover:bg-forest-800/50',
                              submitted &&
                                'correctIndex' in question &&
                                oIdx === question.correctIndex &&
                                'bg-emerald-400/10 text-emerald-300'
                            )}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={String(oIdx)}
                              checked={answers[question.id] === String(oIdx)}
                              onChange={() => setAnswer(question.id, String(oIdx))}
                              disabled={submitted}
                              className="accent-gold-400"
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
                                  ? 'bg-gold-400/10 text-cream-100'
                                  : 'text-cream-400 hover:bg-forest-800/50',
                                submitted &&
                                  'correctIndices' in question &&
                                  question.correctIndices.includes(oIdx) &&
                                  'bg-emerald-400/10 text-emerald-300'
                              )}
                            >
                              <input
                                type="checkbox"
                                checked={selected}
                                onChange={() =>
                                  toggleMultiSelect(question.id, oIdx)
                                }
                                disabled={submitted}
                                className="accent-gold-400"
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
                          className="w-full resize-none rounded-lg border border-forest-600/50 bg-forest-800/50 px-3 py-2 text-sm text-cream-200 placeholder:text-cream-500 focus:border-gold-400/40 focus:outline-none disabled:opacity-60"
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
                          className="w-full rounded-lg border border-forest-600/50 bg-forest-800/50 px-3 py-2 text-sm text-cream-200 placeholder:text-cream-500 focus:border-gold-400/40 focus:outline-none disabled:opacity-60"
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
            className="rounded-lg bg-gold-400/20 px-8 py-3 font-display text-base font-medium text-gold-400 shadow-lg transition-all hover:bg-gold-400/30 hover:shadow-xl"
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  )
}
