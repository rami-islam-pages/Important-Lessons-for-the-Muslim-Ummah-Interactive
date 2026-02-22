import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-kaafiroon',
  lessonSlug: 'lesson-1',
  title: 'Surah Al-Kaafiroon Quiz',
  sections: [
    {
      title: 'Surah Al Kaafiroon Questions',
      questions: [
        {
          id: 'q112',
          number: 112,
          text: 'Surah Al Kaafiroon is...',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 3,
        },
        {
          id: 'q113',
          number: 113,
          text: 'Surah Al Kaafiroon is read in the first rak\'ah after Al Faatihah in…',
          type: 'multiple-choice',
          options: [
            'the Sunnah before Fajr.',
            'the Sunnah after Maghrib.',
            'the Sunnah after Tawaaf.',
            'the Witr prayer.',
            'All of the above.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q114',
          number: 114,
          text: 'An act of worship which is done for other than Allah…',
          type: 'multiple-choice',
          options: [
            'is not considered worship.',
            'is a deficient worship.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q115',
          number: 115,
          text: 'The one being addressed with \'\'Say\'\' is…',
          type: 'multiple-choice',
          options: [
            'the Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645.',
            'the Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645 and everyone who could possibly be addressed with the similar words.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q116',
          number: 116,
          text: 'Kaafiroon are…',
          type: 'multiple-choice',
          options: [
            'all those whom the religion of our Prophet \u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645 has reached them and have not believed in it such as the Jews and the Christians.',
            'the Non-Muslims of Makkah.',
          ],
          correctIndex: 4,
        },
        {
          id: 'q117',
          number: 117,
          text: 'This Surah proves that we must stay far away from worshiping other than Allah and free ourselves from those who worship other than Allah with our heart, tongue, and limbs',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q118',
          number: 118,
          text: 'Repetition in this Surah…',
          type: 'multiple-choice',
          options: [
            'is for emphasis.',
            'Is to show that the first one proves the non-existence of the action while the second one proves that it has become an attribute of theirs.',
          ],
          correctIndex: 1,
        },
      ],
    },
  ],
}
