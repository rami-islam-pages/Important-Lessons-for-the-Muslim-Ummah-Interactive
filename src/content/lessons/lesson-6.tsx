import { SectionTitle } from '@/components/content/SectionTitle'
import { ComparisonTable } from '@/components/content/ComparisonTable'
import { ContentGrid } from '@/components/content/ContentGrid'

export default function Lesson06Content() {
  return (
    <>
      <SectionTitle>Sixth Lesson</SectionTitle>

      <SectionTitle>Pre-Conditions of the Prayer</SectionTitle>

      <p>Prayer has nine conditions:</p>
      <p>1. Islam 2. Sanity 3. Tamyeez (Age of differentiating) 4. Having Wudu 5. Removing Najaasah/ impurities 6. Covering the Private Parts 7. Entering of the time of prayer 8. Facing the Ka&apos;bah 9. Intention</p>

      <p><strong>Condition 1: Islam</strong><br />The opposite of disbelief. If the one who insults Allah or worships other than Him and prays, the prayer is invalid unless s/he repents.</p>

      <p><strong>Condition 2: Sanity</strong><br />The opposite of insanity. Likewise, being intoxicated.</p>

      <p><strong>Condition 3: Tamyeez</strong><br />It does not mean puberty. Its meaning is differentiating between things; one knows the question and the answer. There is no specific age. Usually it is 7 years old. When is the prayer of the child valid? If the child is able to differentiate, otherwise prayer is invalid.</p>

      <p><strong>Condition 4: Wudoo</strong><br />It includes:</p>

      <ComparisonTable columns={[
        { title: 'Major Impurity', content: 'Needs a shower.' },
        { title: 'Minor Impurity', content: 'Needs Wudu.' }
      ]} />

      <p><strong>Condition 5: Removing Impurities</strong><br />From body, place, and clothes. If one prays with it while knowing, able to remove it, and remembers it then the prayer is invalid. Removing it is divided into three categories:</p>

      <ContentGrid variant="three-category" items={[
        { title: 'Severe:', description: 'The saliva of the dog. The Prophet ﷺ ordered to wash it 7 times; the first time with sand. The Hadith is in Muslim.' },
        { title: 'Light:', description: 'The urine of a boy who has not begun eating, mathee, and manee even though it is pure but the Prophet ﷺ would sprinkle water if it was wet (no need to wash and squeeze) and dust it off if it was dry.' },
        { title: 'Moderate:', description: 'Urine etc. Is removed by washing it and squeezing out the water.' }
      ]} />

      <p><strong>Impure Substances</strong><br />Human urine and faeces, urine and dung of animals which is not permissible to eat their meat, predatory beasts except what is difficult to avoid such as cats, mule, and donkey. Moreover, the blood which flows from an animal after it is slaughtered, the blood which comes out of the two organs, the animals that die without being slaughtered except for those that have no flowing blood, the ones from the sea, and locusts.</p>

      <p><strong>Condition 6: Covering the Private Parts</strong><br />Three different levels:</p>

      <ContentGrid variant="three-category" items={[
        { title: 'Moderate:', description: 'Other than those mentioned in the other two; it is a condition to cover from the belly button to the knees. It is recommended to cover the shoulders and to dress fully appropriate.' },
        { title: 'Severe:', description: 'The private parts of a women who has reached puberty; she must cover the entire body except for the face which she should cover in the presence of strangers.' },
        { title: 'Light:', description: 'Such as the private parts of a seven to ten year old; they should at least cover the two private parts.' }
      ]} />

      <p><strong>Condition 7: Prayer Time</strong><br />The prayer is not valid to pray before the time enters nor to delay until after the time except if it is combined with another prayer due to a valid reason. If one intentionally prays after the time, then this is a sin.</p>

      <p><strong>Condition 8: Facing the Qiblah</strong><br />Recommended prayers while traveling are an exception; one prays whichever direction the means of transportation is traveling. Example: Prayer in the plane. Moreover, the one who is unable to face or fears an enemy is also excused.</p>

      <p><strong>Condition 9: Intention</strong><br />Should be in the heart. To verbalize it is considered an innovation in the act of worship. The prayer is valid even if one thinks about it sometime before the prayer or intends to pray the obligation of the time.</p>

      <SectionTitle>Important Points to Remember</SectionTitle>
      <p>1- It is not acceptable to leave out a condition whether intentionally, out of ignorance, or forgetfully; except if one prays with some impurity on out of ignorance or forgetfully then the prayer is valid.</p>
      <p>2- The conditions should be present before one begins the acts of worship. Their presence is a must until the act of worship is completed.</p>
    </>
  )
}
