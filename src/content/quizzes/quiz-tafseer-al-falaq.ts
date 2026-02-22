import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-falaq',
  lessonSlug: 'lesson-1',
  title: 'Surah Al-Falaq Quiz',
  sections: [
    {
      title: 'Surah Al Falaq Questions',
      questions: [
        {
          id: 'q139',
          number: 139,
          text: 'Surah Al Falaq is…',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q140',
          number: 140,
          text: 'It is recommended to read Surah Al Falaq…',
          type: 'multiple-choice',
          options: [
            'after the obligatory prayers.',
            'just before sleep.',
            'All of the above.',
          ],
          correctIndex: 3,
        },
        {
          id: 'q141',
          number: 141,
          text: 'Write the meaning of the following words:\n\u0623\u0639\u0648\u0630 (Aoodhu\'):\n\u0627\u0644\u0641\u0644\u0642 (Al Falaq):\n\u063A\u0627\u0633\u0650\u0642 (Ghaasiq):\n\u0648\u0642\u0650\u0628 (waqab):\n\u0627\u0644\u0646\u0651\u064E\u0641\u0651\u0627\u062B\u0627\u062A (An-Naffathaat):\n\u0627\u0644\u0639\u064F\u0642\u064E\u062F (Al\'Uqad):\n\u062D\u0627\u0633\u0650\u062F (Haasidin):',
          type: 'fill-blank',
          isTextarea: true,
        },
        {
          id: 'q142',
          number: 142,
          text: 'This Surah shows that…',
          type: 'multiple-choice',
          options: [
            'seeking refuge is done in general as well as specific.',
            'magic is real.',
            'All of the above.',
          ],
          correctIndex: 0,
        },
      ],
    },
  ],
}
