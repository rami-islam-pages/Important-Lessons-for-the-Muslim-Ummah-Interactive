export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-forest-900">
      {children}
    </div>
  )
}
