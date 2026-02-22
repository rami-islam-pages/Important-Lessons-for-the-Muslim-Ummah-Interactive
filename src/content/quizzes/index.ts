import type { LessonMeta } from '@/content/lessons-index'
import { lessonsIndex } from '@/content/lessons-index'

export interface QuizMeta {
  slug: string
  lessonSlug: string
  title: string
  lessonTitle: string
}

export const quizzesIndex: QuizMeta[] = [
  {
    slug: 'quiz-lesson-1',
    lessonSlug: 'lesson-1',
    title: 'Lesson 1 Questions - Short Surahs',
    lessonTitle: 'The First Lesson',
  },
  {
    slug: 'quiz-lesson-2',
    lessonSlug: 'lesson-2',
    title: 'Lesson 2 Questions - Pillars of Islam',
    lessonTitle: 'The Second Lesson',
  },
  {
    slug: 'quiz-lesson-5',
    lessonSlug: 'lesson-5',
    title: 'Lesson 5 Questions - Ihsaan',
    lessonTitle: 'The Fifth Lesson',
  },
  {
    slug: 'quiz-lesson-12',
    lessonSlug: 'lesson-12',
    title: 'Lesson 12 Questions - Ablution',
    lessonTitle: 'The Twelfth Lesson',
  },
  {
    slug: 'quiz-lesson-18',
    lessonSlug: 'lesson-18',
    title: 'Lesson 18 Questions - Funeral',
    lessonTitle: 'The Eighteenth Lesson',
  },
  {
    slug: 'quiz-purification',
    lessonSlug: 'lesson-12',
    title: 'Purification Quiz',
    lessonTitle: 'The Twelfth Lesson',
  },
]

export function getQuizBySlug(slug: string): QuizMeta | undefined {
  return quizzesIndex.find((q) => q.slug === slug)
}

export function getQuizForLesson(lessonSlug: string): QuizMeta | undefined {
  return quizzesIndex.find((q) => q.lessonSlug === lessonSlug)
}

export function getLessonForQuiz(quizSlug: string): LessonMeta | undefined {
  const quiz = getQuizBySlug(quizSlug)
  if (!quiz) return undefined
  return lessonsIndex.find((l) => l.slug === quiz.lessonSlug)
}
