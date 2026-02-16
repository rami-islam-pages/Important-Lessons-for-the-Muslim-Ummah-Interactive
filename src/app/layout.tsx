import type { Metadata } from 'next'
import { EB_Garamond, Amiri, Scheherazade_New } from 'next/font/google'
import './globals.css'
import { bookConfig } from '@/content/book.config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AuthProvider } from '@/components/auth/AuthProvider'

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '700'],
})

const scheherazade = Scheherazade_New({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: {
    default: `${bookConfig.title.english} — ${bookConfig.author.english}`,
    template: `%s | ${bookConfig.title.english}`,
  },
  description: `An interactive study guide for "${bookConfig.subtitle.english}" by ${bookConfig.author.english}, explained by ${bookConfig.explainer.english}. Study the lessons, take quizzes, and track your progress.`,
  keywords: ['Islam', 'Islamic studies', 'Sheikh Ibn Baz', 'Quran', 'Muslim', 'lessons', 'Islamic education', 'Haytham Sarhaan'],
  authors: [{ name: bookConfig.author.english }],
  openGraph: {
    type: 'website',
    title: bookConfig.title.english,
    description: `An interactive study guide for Sheikh Ibn Baz's essential Islamic teachings.`,
    siteName: bookConfig.brand,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${ebGaramond.variable} ${amiri.variable} ${scheherazade.variable}`}
    >
      <head>
        <meta name="theme-color" content={bookConfig.themeColor} />
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📖</text></svg>" />
      </head>
      <body className="min-h-screen flex flex-col">
        <AuthProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
