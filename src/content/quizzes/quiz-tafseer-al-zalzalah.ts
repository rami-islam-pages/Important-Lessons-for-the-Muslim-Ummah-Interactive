import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-zalzalah',
  lessonSlug: 'lesson-1',
  title: 'Surah Al-Zalzalah Quiz',
  sections: [
    {
      title: 'Surah Al Zalzalah Questions',
      questions: [
        {
          id: 'q50',
          number: 50,
          text: 'Surah Zalzala is a…',
          type: 'multiple-choice',
          options: [
            'Maki Surah.',
            'Madani Surah.',
          ],
          correctIndex: 3,
        },
        {
          id: 'q51',
          number: 51,
          text: 'Surah Zalzalah consists of…',
          type: 'multiple-choice',
          options: [
            'warning',
            'encouraging.',
            'All of the above.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q52',
          number: 52,
          text: 'The saying of Allah "And when the earth throws out all its contents" means:',
          type: 'multiple-choice',
          options: [
            'Mountains and hills.',
            'The dead and treasures.',
          ],
          correctIndex: 3,
        },
        {
          id: 'q53',
          number: 53,
          text: 'Earth is from among the witnesses which will bear witness for the people\'s actions',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
        {
          id: 'q54',
          number: 54,
          text: 'The saying of Allah "in scattered groups" means…',
          type: 'multiple-choice',
          options: [
            'everyone by itself.',
            'different groups.',
          ],
          correctIndex: 2,
        },
        {
          id: 'q55',
          number: 55,
          text: 'The saying of Allah "Whoever does an atom\'s weight of good will see it…" is similar to His saying "On the Day that each self finds the good it did, and the evil it did, present there in front of it…"',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
      ],
    },
  ],
}
