import { SectionTitle } from '@/components/content/SectionTitle'
import Link from 'next/link'

export default function Lesson01Content() {
  return (
    <>
<SectionTitle>Lesson One</SectionTitle>

      <SectionTitle>The Opening Chapter (Al Faatiha) and some short chapters</SectionTitle>


                <p>The Opening Chapter, Al Faatiha, and some short chapters from Surah Az-Zalzalah to Surah An-Naas; reading it correctly to a Qur'an teacher, memorizing it, and knowing that which is obligatory to understand.</p>


      <SectionTitle>Clarification:</SectionTitle>


                <p>The memorization should be according to the way the companions did it; every day ten verses along with reading a concise explanation such as Tafseer As-Sa'di and acting upon them while seeking the help of Allah.</p>


      <SectionTitle>Which Qur'an explanation should a student of knowledge begin with?</SectionTitle>


                <p>The student is advised to begin with the explanation of the Qur'an by As-Sa'di "Tayseer Al-Kareem Ar-Rahmaan Fee Tafseeri Kalaam Al-Manaan" may Allah have mercy on him and forgive him. Why?</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-4">
                    <div className="rounded-lg border border-gold-500/30 bg-forest-800/50 p-4 text-center">
                        <div className="text-cream-100 text-sm leading-relaxed">The scholars have advised with it and given it great attention</div>
                    </div>
                    <div className="rounded-lg border border-gold-500/30 bg-forest-800/50 p-4 text-center">
                        <div className="text-cream-100 text-sm leading-relaxed">It is concise and thus appropriate for a new student to read.</div>
                    </div>
                    <div className="rounded-lg border border-gold-500/30 bg-forest-800/50 p-4 text-center">
                        <div className="text-cream-100 text-sm leading-relaxed">It's expressions are easy and clear; without any ambiguity.</div>
                    </div>
                    <div className="rounded-lg border border-gold-500/30 bg-forest-800/50 p-4 text-center">
                        <div className="text-cream-100 text-sm leading-relaxed">It helps one to act upon the Qur'an by the help of Allah</div>
                    </div>
                    <div className="rounded-lg border border-gold-500/30 bg-forest-800/50 p-4 text-center sm:col-span-2 lg:col-span-1">
                        <div className="text-cream-100 text-sm leading-relaxed">The author – may Allah have mercy on him– emphasizes the Oneness of Allah</div>
                    </div>
                </div>


      <SectionTitle>The types of people with regard to the Qur'an:</SectionTitle>


                <p>With regard to the Qur'an, there are two extremes and one moderation</p>

                <div className="my-4 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="rounded-lg border border-red-500/40 bg-red-900/20 p-4 text-center">
                            <h3 className="text-red-400 font-semibold text-lg mb-2">Negligence</h3>
                            <p className="text-cream-200 text-sm">Some abandon the Qur'an and that is done by abandoning:</p>
                        </div>

                        <div className="rounded-lg border border-orange-500/40 bg-orange-900/20 p-4 text-center">
                            <h3 className="text-orange-400 font-semibold text-lg mb-2">Extremism</h3>
                            <p className="text-cream-200 text-sm">They read and memorize without pondering nor acting upon it.</p>
                        </div>

                        <div className="rounded-lg border border-emerald-500/40 bg-emerald-900/20 p-4 text-center">
                            <h3 className="text-emerald-400 font-semibold text-lg mb-2">Moderation</h3>
                            <p className="text-cream-200 text-sm">They read, memorize, ponder, and act upon it. This is the way of the early scholars and those who follow them.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        <div className="rounded-md border border-red-500/30 bg-red-900/10 px-3 py-2 text-center text-cream-200 text-sm">Reading</div>
                        <div className="rounded-md border border-red-500/30 bg-red-900/10 px-3 py-2 text-center text-cream-200 text-sm">Memorization</div>
                        <div className="rounded-md border border-red-500/30 bg-red-900/10 px-3 py-2 text-center text-cream-200 text-sm">Pondering</div>
                        <div className="rounded-md border border-red-500/30 bg-red-900/10 px-3 py-2 text-center text-cream-200 text-sm">Acting upon it</div>
                        <div className="rounded-md border border-red-500/30 bg-red-900/10 px-3 py-2 text-center text-cream-200 text-sm col-span-2 sm:col-span-1">Treating sickness with it</div>
                    </div>
                </div>

                <p>Allah says: "And the Messenger has said, 'O my Lord, surely my people have abandoned this Qur'an" (Qur'an 25:30). The Prophet –may Allah praise and send him peace- has said: "From the offspring of this person will come people who will read the Qur'an, but it does not pass their throat (i.e. they do not understand it). They kill the Muslims and leave alone the idol worshipers. They will leave Islam just as an arrow passes through the target. If I reach them, I will kill them as the people of 'Aad were killed" (Bukhari 3610 and Muslim 1064).</p>


      <SectionTitle>Selections from "Tayseer Al-Kareem Ar-Rahmaan Fee Tafseeri Kalaam Al-Manaan" by Abdu-Rrahmaan As-Sa'di -may Allah have mercy on him- and questions about it</SectionTitle>

      {/* Link to standalone Tafseer section */}
      <Link
        href="/tafseer"
        className="group my-6 flex items-center justify-between rounded-xl border border-gold-400/20 bg-gold-400/5 p-6 transition-all hover:border-gold-400/40 hover:bg-gold-400/10"
      >
        <div>
          <h3 className="font-display text-lg font-semibold text-cream-100">
            Quran Tafseer Section
          </h3>
          <p className="mt-1 text-sm text-cream-400">
            Read the tafseer of Al-Faatiha, Ayatul Kursee, and 16 short surahs from Az-Zalzalah to An-Naas
          </p>
        </div>
        <span className="text-2xl text-gold-400 transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>

    </>
  )
}
