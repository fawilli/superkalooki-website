import {GuideLayout} from '@/components/GuideLayout'
import {AI_SUMMARY, TACKING_FAQS} from '@/lib/jamaican-kalooki'
import {
  faqPageJsonLd,
  graphJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'

const TITLE = 'What is tacking in Jamaican Kalooki?'
const DESCRIPTION =
  'Tacking in Jamaican Kalooki means adding a legal card to a table meld after you have laid your contract. Learn how tack differs from calling, then play Super Kalooki on iOS.'

export const metadata: Metadata = {
  title: 'What Is Tacking in Jamaican Kalooki? — Call vs Tack',
  description: DESCRIPTION,
  alternates: {canonical: '/jamaican-kalooki/tacking/'},
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/jamaican-kalooki/tacking/',
  },
}

export default function TackingPage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    webPageJsonLd({
      name: TITLE,
      description: DESCRIPTION,
      path: '/jamaican-kalooki/tacking/',
    }),
    faqPageJsonLd(TACKING_FAQS),
  ])

  return (
    <GuideLayout
      currentPath="/jamaican-kalooki/tacking/"
      eyebrow="Call and tack"
      jsonLd={jsonLd}
      showPlayNote={false}
      storeCampaign="website_guide_tacking"
      summary={`${AI_SUMMARY} After you lay your contract, Super Kalooki lets you tack legal cards onto table melds when the action is offered. Calling is a different move — it happens before you are down.`}
      title={TITLE}
    >
      <p>
        Super Kalooki players asked for this page: the App Store listing mentions{' '}
        <strong>call and tack</strong>, and the official rules already cover calling. This guide names tacking in
        player language, keeps it distinct from calling, and points you to a free iOS download. FAQ schema below matches
        the visible answers. Google’s AI-features bar is people-first, crawlable, snippet-eligible copy — not a fake
        AEO file.
      </p>

      <h2>What is tacking in Jamaican Kalooki?</h2>
      <p>
        Tacking is adding a legal card to a meld already on the table after you have laid your contract. Super Kalooki
        offers a tack action when the table opens that opportunity. It is not the same as calling a discard. If the app
        does not show tack on a given turn, that card is not a legal tack right now — do not force it.
      </p>

      <h2>What is the difference between calling and tacking?</h2>
      <p>
        <strong>Calling</strong> happens before you have laid down. You ask for a card just discarded. If the active
        player allows it, you take the discard plus one extra penalty card from the stock, and you cannot lay or discard
        on that call-turn. You get at most three calls per hand. Players who have already laid down cannot call. Full
        calling rules live in the <Link href="/rules/">Jamaican Kalooki rules</Link>.
      </p>
      <p>
        <strong>Tacking</strong> happens after you are down. You add a legal card to an existing table meld when Super
        Kalooki offers the tack action. You are not taking a discard from someone who just threw; you are extending a
        meld the table already accepted.
      </p>

      <h2>When can I tack?</h2>
      <p>
        Your first lay must still fully satisfy the contract for that deal — you cannot tack your way into a contract
        you have not met. After you are down, use tack when the app presents it. Super Kalooki is the rules engine at
        the table; this page does not invent extra house cases (which cards, which melds) beyond what the app accepts.
      </p>

      <h2>How do I download Super Kalooki on iPhone?</h2>
      <p>
        Open the Super Kalooki App Store listing and tap Get. The app is free on iPhone and iPad. Entertainment only —
        no real money, gambling, or prizes. Practice call and tack in Solo, then host a live table. Start at{' '}
        <Link href="/play/">Play Jamaican Kalooki on iOS</Link>.
      </p>

      <h2>Common questions</h2>
      {TACKING_FAQS.map((faq) => (
        <div key={faq.question} className="mb-5">
          <h3 className="!text-base !font-semibold !border-0 !pb-0">{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}

      <p>
        Next: <Link href="/jamaican-kalooki/scoring/">scoring and deadwood</Link>,{' '}
        <Link href="/jamaican-kalooki/strategy/">strategy tips</Link>, or the{' '}
        <Link href="/jamaican-kalooki/">Jamaican Kalooki hub</Link>.
      </p>
    </GuideLayout>
  )
}
