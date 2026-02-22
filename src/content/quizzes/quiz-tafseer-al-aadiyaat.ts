import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-aadiyaat',
  lessonSlug: 'lesson-1',
  title: 'Surah Al-Aadiyaat Quiz',
  sections: [
    {
      title: 'Surah Al Aadiyaat Questions',
      questions: [
        {
          id: 'q56',
          number: 56,
          text: 'Surah Al Aadiyaat is a …',
          type: 'multiple-choice',
          options: [
            'Maki Surah.',
            'Madani Surah.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q57',
          number: 57,
          text: 'The meaning of the word \'\'Aadiyaat\'\' is…',
          type: 'multiple-choice',
          options: [
            'horses.',
            'everything which moves.',
            'All of the above.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q58',
          number: 58,
          text: 'Surah Al Aadiyaat consists of warning for not performing the obligatory rights',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q59',
          number: 59,
          text: 'Explain the meaning of the following words:\nDab\'han:\nQad\'han:\nNaq\'an:\nLakanood:',
          type: 'fill-blank',
          isTextarea: true,
        },
      ],
    },
  ],
}
