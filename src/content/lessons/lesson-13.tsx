import { SectionTitle } from '@/components/content/SectionTitle'
import { DuaBox } from '@/components/content/DuaBox'

export default function Lesson13Content() {
  return (
    <>
      <SectionTitle>Thirteenth Lesson</SectionTitle>

      <SectionTitle>Obligatory Acts of Ablution</SectionTitle>

      <p>They are 6:</p>

      <p><strong>1. Washing the face, rinsing the mouth, cleaning the nose</strong></p>

      <p><strong>2. Washing the arms from the finger tips to and including the elbows</strong></p>

      <p><strong>3. Wiping the entire head and the ears</strong></p>

      <p><strong>4. Washing the feet including the ankles</strong></p>

      <p><strong>5. Washing the parts in order</strong></p>

      <p><strong>6. Continuity</strong></p>

      <p>It is recommended to wash the face, arms, feet, mouth, and nose three times. The obligation is one time. As for wiping the head then it is to be done only once as the authentic Hadith show.</p>

      <SectionTitle>Accomplishing Continuity during Ablution</SectionTitle>
      <p>Do not delay washing a part of ablution until the part before it dries.</p>

      <SectionTitle>How to Perform Ablution (Step-by-Step)</SectionTitle>

      <ol className="list-decimal list-inside space-y-3 my-4 text-cream-200">
        <li><strong>Say &quot;Bismillah&quot;</strong> - If one intends to make ablution, s/he should say &quot;Bismillah&quot;</li>
        <li><strong>Wash the hands</strong> - Wash the hands to the wrist three times with water</li>
        <li><strong>Rinse mouth and nose</strong> - Fill the right hand with water and rinse the mouth with it and put water in the nose. Use the thumb and index finger of the left hand to remove the water from the nose. Do this three times.</li>
        <li><strong>Wash the face</strong> - Wash the face three times from the usual hair line to the chin and from ear to ear</li>
        <li><strong>Wash arms including elbows</strong> - Wash hands and arms including the elbows three times; beginning with the right one then the left</li>
        <li><strong>Wipe the head</strong> - Wipe the head; beginning with both hands from the hair line to the back of the head and return to the front once again</li>
        <li><strong>Wipe the ears</strong> - Wipe the ears by putting the index fingers inside the ears</li>
        <li><strong>Wash the feet</strong> - Wash feet including the ankles three times</li>
      </ol>

      <SectionTitle>Du&apos;a After Completing Ablution</SectionTitle>
      <DuaBox
        title="Du'a After Completing Ablution"
        arabic="أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ"
        translation={'"I bear witness that none should be worshipped except Allah alone without any partners and I bear witness that Muhammad is His slave and Messenger"'}
      >
        <p>Tirmidhi has narrated: <strong>&quot;O Allah, make me from those who repent and purify themselves&quot;</strong>.</p>
      </DuaBox>

      <SectionTitle>Important Ruling</SectionTitle>
      <p><strong>Ruling of washing more than we are ordered:</strong> It is not allowed to increase by washing more in ablution such as one washes some parts more than three times, or washes the arm almost to the shoulder, the feet to almost the knee, or to wipe the neck.</p>
    </>
  )
}
