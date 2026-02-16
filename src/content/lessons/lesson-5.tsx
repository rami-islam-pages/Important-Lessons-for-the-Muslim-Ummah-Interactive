import { SectionTitle } from '@/components/content/SectionTitle'
import { ComparisonTable } from '@/components/content/ComparisonTable'

export default function Lesson05Content() {
  return (
    <>
      <SectionTitle>Fifth Lesson</SectionTitle>

      <SectionTitle>Ihsaan</SectionTitle>

      <p>The pillar of Ihsaan: It is to worship Allah as if you see Him, even though we do not see Him in this life, He sees us.</p>

      <p><strong>Ihsaan</strong> - It is one pillar which is divided into two levels:</p>

      <ComparisonTable columns={[
        { title: 'Worship of Mushaahadah', content: `(As if one sees Him) out of love, desiring, and yearning for that which is with Allah while fearing Him at the same time. For example: the worship of the Prophets and Messengers - peace be upon them-. The Prophet said: "…Should I not be a thankful slave!" It is possible for other than them to reach this level as well.` },
        { title: 'Worship of Muraaqabah', content: '(Of the one who knows that he is being observed). It is a worship out of fear and fleeing. A Muslim does not go outside of this circle.' }
      ]} />

      <SectionTitle>Tawheed Questions</SectionTitle>
    </>
  )
}
