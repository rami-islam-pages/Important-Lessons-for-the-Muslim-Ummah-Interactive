import { SectionTitle } from '@/components/content/SectionTitle'
import { ContentGrid } from '@/components/content/ContentGrid'

export default function IntroContent() {
  return (
    <>
      <SectionTitle>{"Explanation of the Author's Introduction"}</SectionTitle>

      <p>Ibn Baaz رحمه الله said:</p>
      <p>All praise and thanks are only for Allah, the Lord of everything that exists. The good end is for the obedient slaves of Allah. May Allah praise and send peace upon his slave and messenger, our prophet Muhammad, his family, and all of his companions.</p>
      <p>{"These words are about some of the obligations upon every Muslim regarding the religion and I have named it: \"The Important Lessons for Every Muslim\"."}</p>

      <SectionTitle>Why do we study these Important Lessons?</SectionTitle>

      <p>{"Because they are important as the author has mentioned, so the scholars have advised us to study them. If it is said: \"They are important, but for the beginners, while I am a student of Knowledge! My level is above the common Muslims\"."}</p>
      <p>{"Answer: S/he should be tested and if s/he does not pass, then they are even lower than the common Muslims! A student of knowledge should be humble and not think s/he is better than others. In Saheeh Bukharee that Mujaahid said: \"A shy and an arrogant person will not attain knowledge.\""}</p>

      <SectionTitle>{"What do 'The Important Lessons' consist of?"}</SectionTitle>

      <ol className="list-decimal list-inside space-y-2 my-4 text-cream-200">
        <li>{"The way the early scholars read the Qur'an, memorized it, reflected upon its meanings, and acted upon it."}</li>
        <li>Explanation of Islam, Imaan, Ihsaan, worshiping Allah alone, and the categories of Shirk or worshipping other than Allah.</li>
        <li>Explanation of the Prayer.</li>
        <li>Explanation of Wudu / Ablution.</li>
        <li>Beautifying oneself with the Islamic manners.</li>
        <li>Warning against the worship of other than Allah and the categories of sins.</li>
        <li>Preparing the dead body, praying the funeral prayer, and burying it.</li>
      </ol>

      <SectionTitle>Why do the scholars begin with the Name of Allah?</SectionTitle>

      <ContentGrid
        variant="four-box"
        items={[
          {
            number: '1.',
            content:
              'Following the example of the Book of Allah as well as the Prophets \u2013peace be upon them all-',
          },
          {
            number: '2.',
            content:
              'Following the Hadith: "Every important matter which does not begin with the name of Allah, it is deficient" Even though this narration is weak.',
          },
          {
            number: '3.',
            content:
              'Following the example of the early scholars of Islam; they would begin their books in the Name of Allah',
          },
          {
            number: '4.',
            content:
              'Seeking blessings or increase in goodness from the blessed Name of Allah.',
          },
        ]}
      />
    </>
  )
}
