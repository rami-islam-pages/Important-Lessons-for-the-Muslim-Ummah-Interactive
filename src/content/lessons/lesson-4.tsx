import { SectionTitle } from '@/components/content/SectionTitle'
import { ComparisonTable } from '@/components/content/ComparisonTable'
import { ContentGrid } from '@/components/content/ContentGrid'

export default function Lesson04Content() {
  return (
    <>
      <SectionTitle>Fourth Lesson</SectionTitle>

      <SectionTitle>The Categories of Tawheed and Shirk</SectionTitle>

      <p>The categories of Tawheed are three: Lordship, Worship, and Names and Attributes.</p>

      <p><strong>Tawheed of Lordship:</strong> It is believing that surely Allah is the Creator of everything and the Manager of the affairs of His creations; He has no partners in any of that.</p>

      <p><strong>Tawheed of Worship:</strong> It is to believe that Allah is the only god that should be worshipped without any partners. This is the meaning of &apos;La ilaha ila Allah&apos;. All of the acts of worship such as the prayer, fasting, and other than them. It is a must to perform them sincerely for Allah alone. It is not permissible to do any act of worship for other than Allah.</p>

      <p><strong>Tawheed of the Names and Attributes:</strong> It is to believe in everything which is mentioned in the Qur&apos;an and the authentic statements of our Prophet regarding the names and attributes of Allah; to affirm them for Allah in a way that is befitting to Him the Most Perfect without distorting their meaning, denying them, describing them, or giving examples. Allah says &quot;Say, &quot;He is Allah, who is One. Allah—the Sustainer needed by all. He has never had offspring, nor was He born and there is none comparable to Him&quot; (112:1-4). He also says &quot;There is nothing like Him and He is the All Hearing the All Seeing&quot;) 42:11).</p>

      <p>Some of the scholars have divided Tawheed in 2 categories; combining Tawheed of the Names and Attributes with Tawheed of Lordship. That is also correct.</p>

      <SectionTitle>The Categories of Shirk</SectionTitle>

      <p>The categories of worshiping other than Allah are likewise three: Major Shirk, Minor Shirk, and Hidden Shirk.</p>

      <p><strong>Major Shirk:</strong> It destroys one&apos;s good deeds and leads to the eternal punishment if one dies without repenting. Allah says: &quot; Had they associated others with Him ˹in worship˺, their good deeds would have been wasted&quot; (6:88). He also says: &quot;It is not for the polytheists to maintain the mosques of Allah while they openly profess disbelief. Their deeds are void, and they will be in the Fire forever&quot; (9:17). Whoever dies without repenting from it, will not be forgiven and Paradise is prohibited. Allah says: &quot;Surely, Allah does not forgive associating others with Him ˹in worship˺, but forgives anything else of whoever He wills&quot; (4:48). He also says: &quot;Whoever associates others with Allah ˹in worship˺ will surely be forbidden Paradise by Allah. Their home will be the Fire. And the wrongdoers will have no helpers&quot; (5:72).</p>

      <p>From the examples: Supplicating to the dead and idols, seeking their help, making oaths to them, sacrificing for them, etc.</p>

      <p><strong>Minor Shirk:</strong> That which has been called Shirk in the Qur&apos;an and Sunnah; however, it is not Major Shirk. Such as showing off with a part of acts of worship, swearing by other than Allah, saying &quot;whatever Allah wills and so and so&quot;, etc.</p>

      <p>The Prophet ﷺ has said: &quot;That which I fear the most for you is Minor Shirk&quot;. When he was asked about it, he said: &quot;It is showing off with acts of worship&quot;. He has also said: &quot;Whoever swears by other than Allah has committed Shirk&quot;. He has also said: &quot;Do not say &apos;whatever Allah wills and so and so&apos;. Rather, say: &apos;whatever Allah wills then so and so&quot; (Abu Dawood, Authentic). A Muslim does no apostate due to this, nor is one punished eternally for it. Rather, it negates the completion of Tawheed.</p>

      <p><strong>The Hidden Shirk:</strong> The Prophet ﷺ has said: &quot;Should I not inform you of that which I fear for you more than the Dajjaal? They said: Of course O Messenger of Allah! He said: &quot;Hidden Shirk; A person gets up to pray and beautifies the prayer when s/he sees others watching him&quot;.</p>

      <p>It is correct to divide Shirk in 2 categories: Major and Minor. The Hidden Shirk could be present in both of them. It is present in the Major Shirk of the hypocrites since they hide disbelief and show off with Islam out of fear for themselves etc. It is also present in the Minor Shirk of the Muslims when they show off with a part of their worship as mentioned in the above Hadith. Allah is the granter of success.</p>

      <SectionTitle>The Categories of Prohibitions</SectionTitle>

      <ContentGrid variant="four-box" items={[
        { title: 'Major Shirk', description: 'Takes one out of the fold of Islam.' },
        { title: 'Minor Shirk', description: 'Lesser than the Major Shirk and greater than the rest of the major sins. Does not take one out of the fold of Islam.' },
        { title: 'Major Sins', description: 'Every action that is subjected to a specific punishment: curse, distanced from mercy, free from its doer, Etc.' },
        { title: 'Minor Sins', description: 'Every forbidden act that is not subjected to a specific punishment.' }
      ]} />

      <SectionTitle>Major Sins:</SectionTitle>

      <ContentGrid variant="four-box" items={[
        { title: 'How many?', description: 'No specific number; however, they are restricted by the above definition.' },
        { title: 'Its Ruling', description: `It is a must to repent from it due to the saying of the Prophet ﷺ: "The hired female mourner, if she does not repent before dying…" (Muslim).` },
        { title: 'Its Levels', description: `They vary due to the saying of the Prophet ﷺ: "Should I not inform you of the greatest major sins…" (Bukhari/Muslim)` },
        { title: 'The Ruling of its doer', description: '-Believer with incomplete Emaan or a believer due to the Emaan and a sinner due to the major sin. -We love them according to their Emaan and we hate them according to their major sins. -They should not be accompanied while they are doing the major sin.' }
      ]} />

      <SectionTitle>The Difference between Major and Minor Shirk</SectionTitle>

      <ComparisonTable columns={[
        { title: 'Minor Shirk', content: '1. Does not take one outside the fold of Islam 2. It does not destroy all the good deeds, but only the deed that it is present in. 3. The one who dies upon it, will not be in the Fire forever. 4. There is proof to show that it is Minor. 5. To make something a means (cause) that which Allah did not make a means. 6. Every sin that leads to Major Shirk is Minor Shirk. 7. Everything that the Qur\u2019an and authentic Hadith mention as Shirk or Kufr in the indefinite form and there are no other proofs that show that it is Major.' },
        { title: 'Major Shirk', content: '1. Takes one outside of the fold of Islam 2. It destroys all the good deeds. 3. The one who dies upon it, will be in the Fire forever. 4. There is proof which shows that it is Major. 5. Believes that the means has special powers in the universe 6. It is not forgiven, if one dies without repenting. 7. If one repents, Allah will accept the repentance except in two cases: If the sun rises from the west or at the moment of death.' }
      ]} />
    </>
  )
}
