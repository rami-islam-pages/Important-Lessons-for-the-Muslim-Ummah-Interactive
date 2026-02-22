import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-maaoon',
  lessonSlug: 'lesson-1',
  title: "Surah Al-Maa'oon Quiz",
  sections: [
    {
      title: 'Surah Al Maa\'oon Questions',
      questions: [
        {
          id: 'q97',
          number: 97,
          text: 'Surah Al Maa\'oon is …',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q98',
          number: 98,
          text: 'The meaning of the word \'deen\' in the saying of Allah "Have you seen the one who denies the deen" is…',
          type: 'multiple-choice',
          options: [
            'Resurrection and Recompense.',
            'others rights such as paying back the loan.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q99',
          number: 99,
          text: 'The meaning of the word \'yada\'u\' is to…',
          type: 'multiple-choice',
          options: [
            'abandon.',
            'harshly push away.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q100',
          number: 100,
          text: 'The orphan is the one who\'s ________ dies.',
          type: 'multiple-choice',
          options: [
            'father.',
            'mother.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q101',
          number: 101,
          text: 'The orphan is considered an orphan …',
          type: 'multiple-choice',
          options: [
            'as long as one has not reached puberty.',
            'even after puberty.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q102',
          number: 102,
          text: 'The forgetfulness in the prayer is the forgetfulness which is blameworthy; as for the negligence regarding the prayer, then that happens to everyone',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
        {
          id: 'q103',
          number: 103,
          text: 'The ruling of showing off is …',
          type: 'multiple-choice',
          options: [
            'permissible.',
            'disliked.',
            'prohibited.',
            'minor shirk.',
            'major shirk.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q104',
          number: 104,
          text: 'This Surah encourages to help others',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q105',
          number: 105,
          text: 'Al Maa\'oon mentioned in the verse is…',
          type: 'multiple-choice',
          options: [
            'the dish.',
            'everything which is customary to spend and donate.',
          ],
          correctIndex: 0,
        },
      ],
    },
  ],
}
