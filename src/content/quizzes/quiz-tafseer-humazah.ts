import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-humazah',
  lessonSlug: 'lesson-1',
  title: 'Surah Humazah Quiz',
  sections: [
    {
      title: 'Surah Humazah Questions',
      questions: [
        {
          id: 'q80',
          number: 80,
          text: 'This Surah is…',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 3,
        },
        {
          id: 'q81',
          number: 81,
          text: 'The meaning of the word \'\'Wayl\'\' is…',
          type: 'multiple-choice',
          options: [
            'a \'valley\' in the Fire.',
            'a warning which includes a valley in the Fire and other than it.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q82',
          number: 82,
          text: 'Al Hamz is done by speech while Al-Lamz is done by gestures',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q83',
          number: 83,
          text: 'We benefit from the saying of Allah \'\'Thinking that wealth will make them last forever!\'\' that doing righteous deeds increases one\'s life span',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q84',
          number: 84,
          text: 'The meaning of the saying of Allah "And what will make you understand" is that…',
          type: 'multiple-choice',
          options: [
            'he knew about it',
            'he did not know about it',
          ],
          correctIndex: 1,
        },
        {
          id: 'q85',
          number: 85,
          text: 'In the saying of Allah, the Most High, \'\'It is Allah\'s kindled Fire\'\', that which will keep the fire going is…',
          type: 'multiple-choice',
          options: [
            'people.',
            'stones.',
            'All of the above.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q86',
          number: 86,
          text: 'The saying of Allah, the Most High, "which rages over the hearts" means:',
          type: 'multiple-choice',
          options: [
            'due to that which it believes.',
            'It penetrates through the body to the heart.',
          ],
          correctIndex: 0,
        },
      ],
    },
  ],
}
