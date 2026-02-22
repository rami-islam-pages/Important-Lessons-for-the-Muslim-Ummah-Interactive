import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-quraysh',
  lessonSlug: 'lesson-1',
  title: 'Surah Quraysh Quiz',
  sections: [
    {
      title: 'Surah Quraysh Questions',
      questions: [
        {
          id: 'q92',
          number: 92,
          text: 'Surah Quraysh is…',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q93',
          number: 93,
          text: 'This Surah is closely related to Surah…',
          type: 'multiple-choice',
          options: [
            'Al Kaafiroon.',
            'Al Feel.',
            'An-Naas.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q94',
          number: 94,
          text: 'Quraysh used to travel to Shaam in the winter and to Yemen in the summer',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q95',
          number: 95,
          text: 'Allah has made Makkah great in the hearts of the Arabs so they respected them and they would not harm them…',
          type: 'multiple-choice',
          options: [
            'in Makkah.',
            'in Makkah and while traveling.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q96',
          number: 96,
          text: 'Allah has mentioned that He is the Lord of the House to show its virtue and status; even though, He is the Lord of everything',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
      ],
    },
  ],
}
