export type QuestionType = 'multiple-choice' | 'multiple-select' | 'true-false' | 'fill-blank'

export interface BaseQuestion {
  id: string
  number: number
  text: string
  type: QuestionType
  section?: string
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice' | 'true-false'
  options: string[]
  correctIndex: number
}

export interface MultipleSelectQuestion extends BaseQuestion {
  type: 'multiple-select'
  options: string[]
  correctIndices: number[]
}

export interface FillBlankQuestion extends BaseQuestion {
  type: 'fill-blank'
  acceptableAnswers?: string[]
  isTextarea?: boolean
}

export type Question =
  | MultipleChoiceQuestion
  | MultipleSelectQuestion
  | FillBlankQuestion

export interface QuizSection {
  title: string
  questions: Question[]
}

export interface Quiz {
  id: string
  lessonSlug: string
  title: string
  sections: QuizSection[]
}

export interface QuizAttempt {
  quizId: string
  answers: Record<string, string | string[]>
  score: number
  total: number
  percentage: number
  completedAt: string
}
