export default function LessonsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="book-page">
      {children}
    </div>
  )
}
