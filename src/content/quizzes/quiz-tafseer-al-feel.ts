import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-feel',
  lessonSlug: 'lesson-1',
  title: 'Surah Al-Feel Quiz',
  sections: [
    {
      title: 'Surah of the The Elephant Questions',
      questions: [
        {
          id: 'q87',
          number: 87,
          text: 'The surah of "The Elephant" is …',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q88',
          number: 88,
          text: 'From the benefits of this surah is also the fact that the biggest living creature on land fears to transgress against a house from the houses of Allah. So the people should likewise fear',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 2,
        },
        {
          id: 'q89',
          number: 89,
          text: 'The Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645 was born on the year of …',
          type: 'multiple-choice',
          options: [
            'the elephant',
            'the sadness.',
            'the drought.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q90',
          number: 90,
          text: 'This Surah is from the events and a miracle that happened prior to the prophethood of our Prophet –may Allah praise and send him peace-',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q91',
          number: 91,
          text: 'Mention the meaning of the following phrases:\n"Tayran abaabeel"\n"Ka\'asfin ma\'kool"',
          type: 'fill-blank',
          isTextarea: true,
        },
      ],
    },
  ],
}
