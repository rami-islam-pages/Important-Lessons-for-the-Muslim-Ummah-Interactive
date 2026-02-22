import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-asr',
  lessonSlug: 'lesson-1',
  title: "Surah Al-'Asr Quiz",
  sections: [
    {
      title: 'Surah Al \'Asr Questions',
      questions: [
        {
          id: 'q75',
          number: 75,
          text: 'Surah Al \'Asr is a…',
          type: 'multiple-choice',
          options: [
            'Maki Surah',
            'Madani Surah',
          ],
          correctIndex: 1,
        },
        {
          id: 'q76',
          number: 76,
          text: 'Surah Al \'Asr is a proof for seeking knowledge, acting upon it, teaching it, and patience',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q77',
          number: 77,
          text: 'Which of the following statements are correct regarding taking an oath in other than Allah:',
          type: 'multiple-choice',
          options: [
            'Allah may take an oath in anything He wishes from His creations.',
            'It is not permissible for the created beings to take an oath in other than Allah.',
            'Created beings may take an oath in other than Allah.',
            'The first and second answer.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q78',
          number: 78,
          text: 'Patience is divided into…',
          type: 'multiple-choice',
          options: [
            'Two categories.',
            'Three categories.',
            'Four categories',
          ],
          correctIndex: 0,
        },
        {
          id: 'q79',
          number: 79,
          text: 'The Surah consists of four orders: The first two help the person to improve himself while the second two help one improve others',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
      ],
    },
  ],
}
