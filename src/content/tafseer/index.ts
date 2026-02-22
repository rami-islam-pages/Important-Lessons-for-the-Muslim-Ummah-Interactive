export interface SurahMeta {
  slug: string
  surahName: string
  surahArabic: string
  surahNumber: string
  type: 'makki' | 'madani'
}

export const tafseerIndex: SurahMeta[] = [
  {
    slug: 'al-faatiha',
    surahName: 'Al-Faatiha - The Opening',
    surahArabic: 'الفاتحة',
    surahNumber: '1',
    type: 'makki',
  },
  {
    slug: 'ayatul-kursee',
    surahName: 'Ayatul Kursee',
    surahArabic: 'آية الكرسي',
    surahNumber: '2:255',
    type: 'madani',
  },
  {
    slug: 'al-zalzalah',
    surahName: 'Al-Zalzalah - The Quake',
    surahArabic: 'الزلزلة',
    surahNumber: '99',
    type: 'madani',
  },
  {
    slug: 'al-aadiyaat',
    surahName: "Al-Aadiyaat - The Courser Horses",
    surahArabic: 'العاديات',
    surahNumber: '100',
    type: 'makki',
  },
  {
    slug: 'al-qaariah',
    surahName: "Al-Qaari'ah - The Striking Hour",
    surahArabic: 'القارعة',
    surahNumber: '101',
    type: 'makki',
  },
  {
    slug: 'at-takaathur',
    surahName: 'At-Takaathur - Competition for worldly gains',
    surahArabic: 'التكاثر',
    surahNumber: '102',
    type: 'makki',
  },
  {
    slug: 'al-asr',
    surahName: "Al-'Asr - By the time",
    surahArabic: 'العصر',
    surahNumber: '103',
    type: 'makki',
  },
  {
    slug: 'al-humazah',
    surahName: 'Al-Humazah - The Backbiters',
    surahArabic: 'الهمزة',
    surahNumber: '104',
    type: 'makki',
  },
  {
    slug: 'al-feel',
    surahName: 'Al-Feel - The Elephant',
    surahArabic: 'الفيل',
    surahNumber: '105',
    type: 'makki',
  },
  {
    slug: 'quraysh',
    surahName: 'Quraysh',
    surahArabic: 'قريش',
    surahNumber: '106',
    type: 'makki',
  },
  {
    slug: 'al-maaoon',
    surahName: "Al-Maa'oon - Simplest Aid",
    surahArabic: 'الماعون',
    surahNumber: '107',
    type: 'makki',
  },
  {
    slug: 'al-kawthar',
    surahName: 'Al-Kawthar',
    surahArabic: 'الكوثر',
    surahNumber: '108',
    type: 'makki',
  },
  {
    slug: 'al-kaafiroon',
    surahName: 'Al-Kaafiroon - The Disbelievers',
    surahArabic: 'الكافرون',
    surahNumber: '109',
    type: 'makki',
  },
  {
    slug: 'an-nasr',
    surahName: 'An-Nasr - The Victory',
    surahArabic: 'النصر',
    surahNumber: '110',
    type: 'madani',
  },
  {
    slug: 'al-masad',
    surahName: 'Al-Masad - The palm-fibre rope',
    surahArabic: 'المسد',
    surahNumber: '111',
    type: 'makki',
  },
  {
    slug: 'al-ikhlaas',
    surahName: 'Al-Ikhlaas - Sincerity',
    surahArabic: 'الإخلاص',
    surahNumber: '112',
    type: 'makki',
  },
  {
    slug: 'al-falaq',
    surahName: 'Al-Falaq - The Daybreak',
    surahArabic: 'الفلق',
    surahNumber: '113',
    type: 'makki',
  },
  {
    slug: 'an-naas',
    surahName: 'An-Naas - The People',
    surahArabic: 'الناس',
    surahNumber: '114',
    type: 'makki',
  },
]

export function getSurahBySlug(slug: string): SurahMeta | undefined {
  return tafseerIndex.find((s) => s.slug === slug)
}

export function getAdjacentSurahs(slug: string) {
  const index = tafseerIndex.findIndex((s) => s.slug === slug)
  return {
    prev: index > 0 ? tafseerIndex[index - 1] : null,
    next: index < tafseerIndex.length - 1 ? tafseerIndex[index + 1] : null,
  }
}
