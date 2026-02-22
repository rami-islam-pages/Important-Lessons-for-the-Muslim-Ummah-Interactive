import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-an-naas',
  lessonSlug: 'lesson-1',
  title: 'Surah An-Naas Quiz',
  sections: [
    {
      title: 'Surah An-Naas Questions',
      questions: [
        {
          id: 'q143',
          number: 143,
          text: 'Surah An-Naas is…',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q144',
          number: 144,
          text: 'It is recommended to read Surah Al-Naas…',
          type: 'multiple-choice',
          options: [
            'after the obligatory prayers.',
            'just before sleeping.',
            'All of the above.',
          ],
          correctIndex: 2,
        },
        {
          id: 'q145',
          number: 145,
          text: 'What is the meaning of the word \'Al Khannaas\'?',
          type: 'fill-blank',
          isTextarea: true,
        },
      ],
    },
  ],
}
