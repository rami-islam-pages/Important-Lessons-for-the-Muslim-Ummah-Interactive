import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-qaariah',
  lessonSlug: 'lesson-1',
  title: "Surah Al-Qaari'ah Quiz",
  sections: [
    {
      title: 'Surah Al Qaari\'ah Questions',
      questions: [
        {
          id: 'q60',
          number: 60,
          text: 'Surah Al Qaari\'ah is a…',
          type: 'multiple-choice',
          options: [
            'Maki Surah.',
            'Madani Surah.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q61',
          number: 61,
          text: 'From the goals of Surah Al Qaari\'ah is warning from:',
          type: 'multiple-choice',
          options: [
            'the shock of the Day of Judgement',
            'trials of this life.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q62',
          number: 62,
          text: 'Al Qaari\'ah is…',
          type: 'multiple-choice',
          options: [
            'the verses of warning.',
            'the Day of Judgement.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q63',
          number: 63,
          text: 'Explain the meaning of the following phrases:\n"like scattered moths"\n"like carded wool"',
          type: 'fill-blank',
          isTextarea: true,
        },
        {
          id: 'q64',
          number: 64,
          text: 'The Scale mentioned in this Surah is…',
          type: 'multiple-choice',
          options: [
            'an actual Scale.',
            'a metaphor for justice.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q65',
          number: 65,
          text: '"a good life" meaning in…',
          type: 'multiple-choice',
          options: [
            'this life.',
            'Paradise.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q66',
          number: 66,
          text: '"his mother will be Hell" means:',
          type: 'multiple-choice',
          options: [
            'the fire will accompany him like the mother accompanies her child.',
            'the thin layer of skin surrounding the brain will burn in the fire.',
            'All of the above.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q67',
          number: 67,
          text: 'The saying of Allah "What will make you realize what it is?!" …',
          type: 'multiple-choice',
          options: [
            'magnifies its reality.',
            'asks about it.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q68',
          number: 68,
          text: 'From the names of the Fire –may Allah protect us from it- are:',
          type: 'multiple-choice',
          options: [
            'Al Haawiyah.',
            'Jahannam.',
            'Al Hutamah.',
            'Ladha.',
            'Sa\'eer.',
            'Saqar.',
            'All of the above.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q69',
          number: 69,
          text: '"a hot blazing Fire" –may Allah protect us from it- is ________ times more intense than the fire of this world',
          type: 'multiple-choice',
          options: [
            'seventy.',
            'ninety.',
            'ninety-nine.',
          ],
          correctIndex: 2,
        },
      ],
    },
  ],
}
