import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-kawthar',
  lessonSlug: 'lesson-1',
  title: 'Surah Al-Kawthar Quiz',
  sections: [
    {
      title: 'Surah Al Kawthar Questions',
      questions: [
        {
          id: 'q106',
          number: 106,
          text: 'Surah AL Kawthar is...',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 3,
        },
        {
          id: 'q107',
          number: 107,
          text: 'Al Kawthar is…',
          type: 'multiple-choice',
          options: [
            'a river.',
            'abundance of good and virtue.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q108',
          number: 108,
          text: 'Allah has specifically mentioned these two acts of worship, prayer and sacrificing animals, since they are the best acts of worship one can get closer to Allah with',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
        {
          id: 'q109',
          number: 109,
          text: '\'Shaaniaka\' means…',
          type: 'multiple-choice',
          options: [
            'the one who hates you.',
            'the one who criticizes you.',
            'the one who takes away from your rights.',
            'All of the above.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q110',
          number: 110,
          text: 'The saying of Allah "…is truly cut off from any goodness" indirectly proves that the one who loves the Prophet – may Allah praise and send him peace- will always be remembered and praised',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
        {
          id: 'q111',
          number: 111,
          text: 'This Surah shows that the Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645 will have a lot of supporters and followers',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
      ],
    },
  ],
}
