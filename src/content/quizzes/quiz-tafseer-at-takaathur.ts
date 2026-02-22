import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-at-takaathur',
  lessonSlug: 'lesson-1',
  title: 'Surah At-Takaathur Quiz',
  sections: [
    {
      title: 'Surah At-Takaathur Questions',
      questions: [
        {
          id: 'q70',
          number: 70,
          text: 'This Surah is...',
          type: 'multiple-choice',
          options: [
            'Maki Surah.',
            'Madani Surah.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q71',
          number: 71,
          text: 'This Surah contains…',
          type: 'multiple-choice',
          options: [
            'news regarding the people\'s situation.',
            'criticism of the people for being preoccupied with other than what they were created for.',
          ],
          correctIndex: 6,
        },
        {
          id: 'q72',
          number: 72,
          text: 'This Surah prohibits competition for more gains even if it is done for the sake of Allah',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q73',
          number: 73,
          text: 'The statement when someone dies: "S/he has moved on to the final abode" is…',
          type: 'multiple-choice',
          options: [
            'a rejection of the resurrection',
            'permissible',
          ],
          correctIndex: 0,
        },
        {
          id: 'q74',
          number: 74,
          text: 'In His saying "Until you visit", Allah has called them visitors and did not call them residents. Why?',
          type: 'multiple-choice',
          options: [
            'Since the life of the grave is a place which is meant to be a door to the next life',
            'Since they went from their house to the grave and it does not belong to them',
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
}
