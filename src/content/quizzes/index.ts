import type { LessonMeta } from '@/content/lessons-index'
import { lessonsIndex } from '@/content/lessons-index'

export interface QuizMeta {
  slug: string
  lessonSlug: string
  title: string
  lessonTitle: string
  category?: 'lesson' | 'tafseer'
}

export const quizzesIndex: QuizMeta[] = [
  // Lesson quizzes
  {
    slug: 'quiz-lesson-1',
    lessonSlug: 'lesson-1',
    title: 'Lesson 1 - Introduction',
    lessonTitle: 'The First Lesson',
    category: 'lesson',
  },
  {
    slug: 'quiz-lesson-2',
    lessonSlug: 'lesson-2',
    title: 'Lesson 2 Questions - Pillars of Islam',
    lessonTitle: 'The Second Lesson',
    category: 'lesson',
  },
  {
    slug: 'quiz-lesson-5',
    lessonSlug: 'lesson-5',
    title: 'Lesson 5 Questions - Ihsaan',
    lessonTitle: 'The Fifth Lesson',
    category: 'lesson',
  },
  {
    slug: 'quiz-lesson-12',
    lessonSlug: 'lesson-12',
    title: 'Lesson 12 Questions - Ablution',
    lessonTitle: 'The Twelfth Lesson',
    category: 'lesson',
  },
  {
    slug: 'quiz-lesson-18',
    lessonSlug: 'lesson-18',
    title: 'Lesson 18 Questions - Funeral',
    lessonTitle: 'The Eighteenth Lesson',
    category: 'lesson',
  },
  {
    slug: 'quiz-purification',
    lessonSlug: 'lesson-12',
    title: 'Purification Quiz',
    lessonTitle: 'The Twelfth Lesson',
    category: 'lesson',
  },

  // Tafseer quizzes (Surah-specific from Lesson 1)
  {
    slug: 'quiz-tafseer-al-faatiha',
    lessonSlug: 'lesson-1',
    title: 'Surah Al Faatihah Quiz',
    lessonTitle: 'Tafseer - Al Faatihah',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-ayatul-kursee',
    lessonSlug: 'lesson-1',
    title: 'Ayatul Kursee Quiz',
    lessonTitle: 'Tafseer - Ayatul Kursee',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-zalzalah',
    lessonSlug: 'lesson-1',
    title: 'Surah Al-Zalzalah Quiz',
    lessonTitle: 'Tafseer - Al-Zalzalah',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-aadiyaat',
    lessonSlug: 'lesson-1',
    title: 'Surah Al-Aadiyaat Quiz',
    lessonTitle: 'Tafseer - Al-Aadiyaat',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-qaariah',
    lessonSlug: 'lesson-1',
    title: "Surah Al-Qaari'ah Quiz",
    lessonTitle: "Tafseer - Al-Qaari'ah",
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-at-takaathur',
    lessonSlug: 'lesson-1',
    title: 'Surah At-Takaathur Quiz',
    lessonTitle: 'Tafseer - At-Takaathur',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-asr',
    lessonSlug: 'lesson-1',
    title: "Surah Al-'Asr Quiz",
    lessonTitle: "Tafseer - Al-'Asr",
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-humazah',
    lessonSlug: 'lesson-1',
    title: 'Surah Humazah Quiz',
    lessonTitle: 'Tafseer - Humazah',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-feel',
    lessonSlug: 'lesson-1',
    title: 'Surah Al-Feel Quiz',
    lessonTitle: 'Tafseer - Al-Feel',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-quraysh',
    lessonSlug: 'lesson-1',
    title: 'Surah Quraysh Quiz',
    lessonTitle: 'Tafseer - Quraysh',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-maaoon',
    lessonSlug: 'lesson-1',
    title: "Surah Al-Maa'oon Quiz",
    lessonTitle: "Tafseer - Al-Maa'oon",
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-kawthar',
    lessonSlug: 'lesson-1',
    title: 'Surah Al-Kawthar Quiz',
    lessonTitle: 'Tafseer - Al-Kawthar',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-kaafiroon',
    lessonSlug: 'lesson-1',
    title: 'Surah Al-Kaafiroon Quiz',
    lessonTitle: 'Tafseer - Al-Kaafiroon',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-an-nasr',
    lessonSlug: 'lesson-1',
    title: 'Surah An-Nasr Quiz',
    lessonTitle: 'Tafseer - An-Nasr',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-masad',
    lessonSlug: 'lesson-1',
    title: 'Surah Al-Masad Quiz',
    lessonTitle: 'Tafseer - Al-Masad',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-ikhlaas',
    lessonSlug: 'lesson-1',
    title: 'Surah Al-Ikhlaas Quiz',
    lessonTitle: 'Tafseer - Al-Ikhlaas',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-al-falaq',
    lessonSlug: 'lesson-1',
    title: 'Surah Al Falaq Quiz',
    lessonTitle: 'Tafseer - Al Falaq',
    category: 'tafseer',
  },
  {
    slug: 'quiz-tafseer-an-naas',
    lessonSlug: 'lesson-1',
    title: 'Surah An-Naas Quiz',
    lessonTitle: 'Tafseer - An-Naas',
    category: 'tafseer',
  },
]

export function getQuizBySlug(slug: string): QuizMeta | undefined {
  return quizzesIndex.find((q) => q.slug === slug)
}

export function getQuizForLesson(lessonSlug: string): QuizMeta | undefined {
  return quizzesIndex.find((q) => q.lessonSlug === lessonSlug && q.category === 'lesson')
}

export function getLessonForQuiz(quizSlug: string): LessonMeta | undefined {
  const quiz = getQuizBySlug(quizSlug)
  if (!quiz) return undefined
  return lessonsIndex.find((l) => l.slug === quiz.lessonSlug)
}
