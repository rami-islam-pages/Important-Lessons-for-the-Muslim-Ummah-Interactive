import { notFound } from 'next/navigation'
import { lessonsIndex, getLessonBySlug, getAdjacentLessons } from '@/content/lessons-index'
import { LessonClient } from '@/components/layout/LessonClient'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return lessonsIndex.map((lesson) => ({
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
  if (!lesson) return { title: 'Lesson Not Found' }

  return {
    title: lesson.title,
    description: lesson.description,
  }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const lesson = getLessonBySlug(slug)
  if (!lesson) notFound()

  const { prev, next } = getAdjacentLessons(slug)

  let LessonContent: React.ComponentType | null = null
  try {
    const mod = await import(`@/content/lessons/${slug}`)
    LessonContent = mod.default
  } catch {
    // Content file not yet migrated
  }

  return (
    <LessonClient lesson={lesson} prev={prev} next={next}>
      {LessonContent ? (
        <LessonContent />
      ) : (
        <div className="rounded-xl border border-cream-400/60 bg-cream-50 p-8 text-center">
          <p className="text-ink-500">
            This lesson content is being prepared. Please check back soon.
          </p>
        </div>
      )}
    </LessonClient>
  )
}
