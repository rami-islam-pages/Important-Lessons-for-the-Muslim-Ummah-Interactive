import { notFound } from 'next/navigation'
import Link from 'next/link'
import { lessonsIndex, getLessonBySlug } from '@/content/lessons-index'
import { QuizContainer } from '@/components/quiz/QuizContainer'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return lessonsIndex
    .filter((l) => l.hasQuiz)
    .map((lesson) => ({
      slug: lesson.slug,
    }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const lesson = getLessonBySlug(slug)
  if (!lesson) return { title: 'Quiz Not Found' }

  return {
    title: `${lesson.title} — Quiz`,
    description: `Test your knowledge on ${lesson.description}`,
  }
}

export default async function QuestionsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lesson = getLessonBySlug(slug)
  if (!lesson || !lesson.hasQuiz) notFound()

  let quiz = null
  try {
    const quizSlug = 'quiz-' + slug
    const mod = await import(`@/content/quizzes/${quizSlug}`)
    quiz = mod.default || mod.quiz
  } catch {
    // Quiz data not yet available
  }

  return (
    <div className="book-page">
      {/* Top navigation */}
      <nav className="sticky top-14 z-30 border-b border-cream-400/60 bg-cream-100/95 backdrop-blur-sm">
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4">
          <Link
            href={`/lessons/${slug}`}
            className="text-sm text-ink-500 transition-colors hover:text-forest-700"
          >
            &larr; Back to {lesson.title}
          </Link>
        </div>
      </nav>

      {quiz ? (
        <QuizContainer quiz={quiz} />
      ) : (
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-8 shadow-sm">
            <p className="text-ink-500">
              Quiz questions for this lesson are being prepared. Please check back soon.
            </p>
            <Link
              href={`/lessons/${slug}`}
              className="mt-4 inline-block text-sm text-forest-700 transition-colors hover:text-forest-800"
            >
              Return to lesson &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
