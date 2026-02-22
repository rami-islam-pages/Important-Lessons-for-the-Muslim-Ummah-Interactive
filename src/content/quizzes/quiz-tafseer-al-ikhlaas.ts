import type { Quiz } from '@/lib/types/quiz'

export const quiz: Quiz = {
  id: 'quiz-tafseer-al-ikhlaas',
  lessonSlug: 'lesson-1',
  title: 'Surah Al-Ikhlaas Quiz',
  sections: [
    {
      title: 'Surah Al-Ikhlaas Questions',
      questions: [
        {
          id: 'q129',
          number: 129,
          text: 'Surah Al-Ikhlaas is …',
          type: 'multiple-choice',
          options: [
            'Maki.',
            'Madani.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q130',
          number: 130,
          text: 'Surah Al-Ikhlaas is called with this name since…',
          type: 'multiple-choice',
          options: [
            'all of it is a description of Allah',
            'it purifies those who read it from worshipping other than Allah',
            'All of the above.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q131',
          number: 131,
          text: 'This Surah is equal in reward to…',
          type: 'multiple-choice',
          options: [
            'half of the Qur\'an.',
            'quarter of the Qur\'an',
            'third of the Qur\'an.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q132',
          number: 132,
          text: 'This Surah is read in the second unit after Al Faatihah in the following prayers:',
          type: 'multiple-choice',
          options: [
            'the Sunnah before Fajr.',
            'the Sunnah after Maghrib.',
            'the Sunnah after Tawaaf.',
            'Witr prayer.',
            'All of the above.',
          ],
          correctIndex: 0,
        },
        {
          id: 'q133',
          number: 133,
          text: 'It is recommended to recite Surah Al Kaafiroon and Al Ikhlass during the day and night in order to affirm the three categories of Tawheed',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 2,
        },
        {
          id: 'q134',
          number: 134,
          text: 'Surah Al Ikhlaas consist of…',
          type: 'multiple-choice',
          options: [
            'Tawheed of worship.',
            'Tawheed of Lordship and the Names and Attributes.',
          ],
          correctIndex: 2,
        },
        {
          id: 'q135',
          number: 135,
          text: 'The meaning of "Say" is…',
          type: 'multiple-choice',
          options: [
            'make a statement only.',
            'a statement, actions, and belief.',
          ],
          correctIndex: 4,
        },
        {
          id: 'q136',
          number: 136,
          text: 'The saying of Allah "He is Allah, the One and only" means One in His Lordship, Worship, and Names and Attributes',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 0,
        },
        {
          id: 'q137',
          number: 137,
          text: 'The saying of Allah "Allah, the Everlasting Sustainer of all" means…',
          type: 'multiple-choice',
          options: [
            'the One everyone turns to for all of their needs.',
            'the One Who is Self Sufficient and the Sustainer of All.',
            'the Master who is complete in His dominion, Lordship, Worship, and His Names and Attributes.',
            'All of the above.',
          ],
          correctIndex: 1,
        },
        {
          id: 'q138',
          number: 138,
          text: 'To attribute a child or parents to Allah is Major Disbelief',
          type: 'true-false',
          options: ['True', 'False'],
          correctIndex: 1,
        },
      ],
    },
  ],
}
