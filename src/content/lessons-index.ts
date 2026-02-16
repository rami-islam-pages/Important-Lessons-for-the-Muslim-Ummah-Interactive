export interface LessonMeta {
  slug: string
  number: number | null
  title: string
  arabicTitle?: string
  description: string
  hasQuiz: boolean
}

export const lessonsIndex: LessonMeta[] = [
  {
    slug: 'intro',
    number: null,
    title: 'Explanation of the Introduction',
    description: 'Introduction to the book and its methodology',
    hasQuiz: false,
  },
  {
    slug: 'lesson-1',
    number: 1,
    title: 'The First Lesson',
    description: 'Al-Faatiha, Ayatul Kursi, and Short Surahs (99-114)',
    hasQuiz: true,
  },
  {
    slug: 'lesson-2',
    number: 2,
    title: 'The Second Lesson',
    description: 'The Pillars of Islam',
    hasQuiz: true,
  },
  {
    slug: 'lesson-3',
    number: 3,
    title: 'The Third Lesson',
    description: 'The Pillars of Eemaan (Faith)',
    hasQuiz: false,
  },
  {
    slug: 'lesson-4',
    number: 4,
    title: 'The Fourth Lesson',
    description: 'Categories of Tawheed and Shirk',
    hasQuiz: false,
  },
  {
    slug: 'lesson-5',
    number: 5,
    title: 'The Fifth Lesson',
    description: 'Ihsaan (Excellence in Worship)',
    hasQuiz: true,
  },
  {
    slug: 'lesson-6',
    number: 6,
    title: 'The Sixth Lesson',
    description: 'Pre-Conditions of Prayer',
    hasQuiz: false,
  },
  {
    slug: 'lesson-7',
    number: 7,
    title: 'The Seventh Lesson',
    description: 'Pillars of Prayer',
    hasQuiz: false,
  },
  {
    slug: 'lesson-8',
    number: 8,
    title: 'The Eighth Lesson',
    description: 'Obligations of Prayer',
    hasQuiz: false,
  },
  {
    slug: 'lesson-9',
    number: 9,
    title: 'The Ninth Lesson',
    description: 'The Tashahhud',
    hasQuiz: false,
  },
  {
    slug: 'lesson-10',
    number: 10,
    title: 'The Tenth Lesson',
    description: 'Recommended Acts of Prayer',
    hasQuiz: false,
  },
  {
    slug: 'lesson-11',
    number: 11,
    title: 'The Eleventh Lesson',
    description: 'Nullifiers of Prayer',
    hasQuiz: false,
  },
  {
    slug: 'lesson-12',
    number: 12,
    title: 'The Twelfth Lesson',
    description: 'Conditions of Ablution (Wudu)',
    hasQuiz: true,
  },
  {
    slug: 'lesson-13',
    number: 13,
    title: 'The Thirteenth Lesson',
    description: 'Obligatory Acts of Ablution',
    hasQuiz: false,
  },
  {
    slug: 'lesson-14',
    number: 14,
    title: 'The Fourteenth Lesson',
    description: 'Nullifiers of Ablution',
    hasQuiz: false,
  },
  {
    slug: 'lesson-15',
    number: 15,
    title: 'The Fifteenth Lesson',
    description: 'Islamic Qualities and Manners',
    hasQuiz: false,
  },
  {
    slug: 'lesson-16',
    number: 16,
    title: 'The Sixteenth Lesson',
    description: 'Islamic Etiquettes',
    hasQuiz: false,
  },
  {
    slug: 'lesson-17',
    number: 17,
    title: 'The Seventeenth Lesson',
    description: 'Warning from Shirk and Sins',
    hasQuiz: false,
  },
  {
    slug: 'lesson-18',
    number: 18,
    title: 'The Eighteenth Lesson',
    description: 'Preparing the Dead, Funeral Prayer, and Burial',
    hasQuiz: true,
  },
]

export function getLessonBySlug(slug: string): LessonMeta | undefined {
  return lessonsIndex.find((l) => l.slug === slug)
}

export function getAdjacentLessons(slug: string) {
  const index = lessonsIndex.findIndex((l) => l.slug === slug)
  return {
    prev: index > 0 ? lessonsIndex[index - 1] : null,
    next: index < lessonsIndex.length - 1 ? lessonsIndex[index + 1] : null,
  }
}
