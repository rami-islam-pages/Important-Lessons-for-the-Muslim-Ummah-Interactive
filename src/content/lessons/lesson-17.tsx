import { SectionTitle } from '@/components/content/SectionTitle'
import { ComparisonTable } from '@/components/content/ComparisonTable'

export default function Lesson17Content() {
  return (
    <>
      <SectionTitle>Seventeenth Lesson</SectionTitle>

      <SectionTitle>Warning from Shirk and other Sins</SectionTitle>

      <p><strong>The Seven Destructive Sins:</strong> Shirk or Worshipping others beside Allah, magic, killing an innocent soul which Allah has prohibited to kill except with an Islamic excuse, interest, wrongfully consuming the wealth of the orphan, running away from the battlefield, accusing chaste believing women.</p>

      <p>Likewise; disobeying the parents, breaking the family ties, bearing false witness, taking false oaths, harming the neighbour, spilling people&apos;s blood, taking their wealth, violating their honor, taking intoxicants, gambling, backbiting, tale-carrying, and other major sins prohibited by Allah and His Messenger.</p>

      <SectionTitle>Explanation</SectionTitle>

      <p><strong>&quot;Shirk with Allah&quot;:</strong> Includes Major and Minor shirk.</p>

      <p><strong>&quot;Magic&quot;:</strong> Such as breaking a husband and a wife apart or bringing two people not interested in one another together. Whoever practices it or is pleased with it is not a Muslim. It is not allowed to visit them (sorcerers, black magicians), their websites, their channels, reading the horoscope in newspapers and magazines. It is not allowed to attempt getting rid of magic with magic; rather, it should be cured Islamically by reciting the Qur&apos;an, making supplications, and other permissible ways such as cupping.</p>

      <p><strong>&quot;Killing an innocent soul which Allah has prohibited to kill&quot;:</strong> Whether it is a Muslim, a non-Muslim living under Muslim rule, or a non-Muslim granted security by the Muslims.</p>

      <p><strong>&quot;Except with an Islamic excuse&quot;:</strong> They are three: &quot;The murderer, the adulterer, and the one who leaves Islam&quot;. <em>Translator&apos;s Note: This is only done in a Muslim country by Muslim authorities.</em></p>

      <p><strong>&quot;The orphan&quot;:</strong> Is the one whose father has passed away and has not reached puberty.</p>

      <p><strong>&quot;Running away from the battlefield&quot;:</strong> In an army that is fighting on the way of Allah.</p>

      <p><strong>&quot;Accusing chaste believing women&quot;:</strong> (Of adultery) even if they are not married.</p>

      <p><strong>&quot;Taking false oaths&quot;:</strong> Likewise swearing by other than Allah such as the Prophet &#xFDFA;, life, graves, etc.</p>

      <p><strong>&quot;Gambling&quot;:</strong> Every transaction that involves winning and losing.</p>

      <p><strong>&quot;Backbiting&quot;:</strong> The Prophet &#xFDFA; has defined it as &quot;mentioning about your brother that which he dislikes&quot;.</p>

      <p><strong>&quot;Tale-carrying&quot;:</strong> To carry speech between people in order to cause problems between them.</p>

      <SectionTitle>The Ruling of Competitions</SectionTitle>

      <ComparisonTable columns={[
        {
          title: 'Permissible without compensation, not permissible with compensation',
          content: 'This includes all the competitions except racing.'
        },
        {
          title: 'Prohibited',
          content: 'Nard (similar to backgammon), chess, and similar games.'
        },
        {
          title: 'Permissible with or without compensation',
          content: 'Horse and camel racing, and archery due to the saying of the Prophet \uFDFA: "There should be no prices for competitions except in archery, camel-racing, and horse-racing" (Abu Dawood, Authentic).'
        }
      ]} />
    </>
  )
}
