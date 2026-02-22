import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-an-nasr',
  lessonSlug: 'lesson-1',
  title: 'Surah An-Nasr Quiz',
  sections: [
    {
      title: 'Surah An-Nasr Questions',
      questions: [
        {
          id: 'q119',
          number: 119,
          text: 'Surah An-Nasr is…',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q120',
          number: 120,
          text: 'This Surah contains a glad tiding, a news, a command, and a hint',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q121',
          number: 121,
          text: 'Allah has treated this nation and this religion with mercy and kindness that cannot be imagined and is beyond comprehension',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
        {
          id: 'q122',
          number: 122,
          text: 'There is an indication in this Surah that the Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645 will pass away after a short period of time',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
        {
          id: 'q123',
          number: 123,
          text: 'Acting upon this Surah, the Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645 used to often recite on the bowing position and prostration "You are Perfect O Allah, our Lord, O Allah forgive me"',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
      ],
    },
  ],
}
