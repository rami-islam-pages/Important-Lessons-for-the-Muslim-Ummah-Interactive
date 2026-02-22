import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-masad',
  lessonSlug: 'lesson-1',
  title: 'Surah Al-Masad Quiz',
  sections: [
    {
      title: 'Surah Al-Masad Questions',
      questions: [
        {
          id: 'q124',
          number: 124,
          text: 'Surah Al Masad is…',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q125',
          number: 125,
          text: 'Aboo Lahab …',
          type: 'multiple-choice',
          options: [
            'is the Prophet\'s \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645 uncle.',
            'is not related to the Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q126',
          number: 126,
          text: 'Dispraised until the Day of Judgment is…',
          type: 'multiple-choice',
          options: [
            'Aboo Lahab.',
            'everyone who hates the Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q127',
          number: 127,
          text: 'Mention the meaning of the following words:\n\u062A\u0651\u0628\u062A (Tabbat):\n\u0645\u0627 \u0643\u0633\u0628 (Maa-Kasaba):\n\u062C\u064A\u062F\u0647\u0627 (Jeedihaa):\n\u0645\u0633\u062F (Masad):',
          type: 'fill-blank',
          isTextarea: true,
        },
        {
          id: 'q128',
          number: 128,
          text: 'This Surah contains an amazing miracle from the miracles of Allah with Aboo Lahab and his wife; they did not accept Islam!',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
      ],
    },
  ],
}
