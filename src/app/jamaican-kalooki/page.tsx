import {GuideLayout} from '@/components/GuideLayout'
import {
  AI_SUMMARY,
  CANONICAL_DEFINITION,
  DEFINED_TERMS,
  DIFFERENTIATION_FAQS,
  NOT_KALOOKI_40_51,
} from '@/lib/jamaican-kalooki'
import {
  faqPageJsonLd,
  graphJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Is Jamaican Kalooki? — Contract Rummy from Jamaica',
  description:
    'Jamaican Kalooki is Contract Rummy with nine deals, sets and runs, jokers, and Jamaican scoring. Learn the rules and play free on iOS with Super Kalooki.',
  alternates: {canonical: '/jamaican-kalooki/'},
  openGraph: {
    title: 'What Is Jamaican Kalooki?',
    description: CANONICAL_DEFINITION,
    url: '/jamaican-kalooki/',
  },
}

export default function JamaicanKalookiHubPage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    webPageJsonLd({
      name: 'What Is Jamaican Kalooki?',
      description: metadata.description as string,
      path: '/jamaican-kalooki/',
    }),
    faqPageJsonLd(DIFFERENTIATION_FAQS),
  ])

  return (
    <GuideLayout
      currentPath="/jamaican-kalooki/"
      eyebrow="Jamaican Kalooki"
      jsonLd={jsonLd}
      summary={AI_SUMMARY}
      title="What is Jamaican Kalooki?"
    >
      <p>{CANONICAL_DEFINITION}</p>
      <p>{NOT_KALOOKI_40_51}</p>

      <h2>The game at the table</h2>
      <p>
        At a Jamaican Kalooki table you are not racing to hit 40 or 51. You work through nine deals. Each deal asks for
        a different <strong>contract</strong> — a mix of sets (threes) and runs (fours). Lay that contract, shed your
        cards, and keep the deadwood low. When the ninth deal ends, the lowest score wins.
      </p>
      <p>
        Super Kalooki is that game on your phone: same contracts, calling, and scoring — solo against AI or live with
        4–6 friends.
      </p>
      <p>
        Ready for detail? Read the <Link href="/rules/">full rules</Link>, see{' '}
        <Link href="/jamaican-kalooki/vs-other-variants/">how it differs from other Kalooki</Link>, or{' '}
        <Link href="/play/">download Super Kalooki on iOS</Link>.
      </p>

      <h2>Words you will hear</h2>
      <dl>
        {DEFINED_TERMS.map((item) => (
          <div key={item.term} className="mb-4">
            <dt className="font-semibold text-text-dark m-0">{item.term}</dt>
            <dd className="m-0 mt-1 text-text-mid">{item.definition}</dd>
          </div>
        ))}
      </dl>

      <h2>Common questions</h2>
      {DIFFERENTIATION_FAQS.map((faq) => (
        <div key={faq.question} className="mb-5">
          <h3 className="!text-base !font-semibold !border-0 !pb-0">{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </GuideLayout>
  )
}
