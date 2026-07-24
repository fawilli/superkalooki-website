import {GuideLayout} from '@/components/GuideLayout'
import {AI_SUMMARY} from '@/lib/jamaican-kalooki'
import {graphJsonLd, organizationJsonLd, webPageJsonLd} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jamaican Kalooki Strategy — Contracts, Jokers & Deadwood',
  description:
    'Beginner strategy for Jamaican Kalooki: meet contracts early, manage deadwood, use jokers wisely, track discards, and know when to call. Play Super Kalooki on iOS.',
  alternates: {canonical: '/jamaican-kalooki/strategy/'},
  openGraph: {
    title: 'Jamaican Kalooki Strategy Tips',
    description: 'Practical tips for contracts, melds, calling, and scoring in Jamaican Contract Rummy.',
    url: '/jamaican-kalooki/strategy/',
  },
}

export default function StrategyPage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    webPageJsonLd({
      name: 'Jamaican Kalooki Strategy',
      description: metadata.description as string,
      path: '/jamaican-kalooki/strategy/',
    }),
  ])

  return (
    <GuideLayout
      currentPath="/jamaican-kalooki/strategy/"
      eyebrow="Strategy"
      jsonLd={jsonLd}
      summary={`${AI_SUMMARY} Strong play means meeting each deal’s contract, shedding high deadwood, and treating jokers as both power and risk.`}
      title="Jamaican Kalooki strategy tips"
    >
      <p>
        These tips are for <strong>Jamaican Kalooki</strong> in Super Kalooki — nine changing contracts, calling with a
        penalty card, and lowest score wins. If you usually play Kalooki 40 or 51, leave the “race to the number”
        mindset at the door.
      </p>

      <h2>1. Build toward the contract first</h2>
      <p>
        Every deal has a required mix of threes and fours. Prioritise completing that contract before chasing fancy
        extras. You cannot lay until the full contract is satisfied — see the{' '}
        <Link href="/rules/">contract table</Link>.
      </p>

      <h2>2. Shed high deadwood early</h2>
      <p>
        Jokers (50), black aces (15), and face cards (10) punish you if someone goes out. Unload them when they no
        longer serve your contract. Details in{' '}
        <Link href="/jamaican-kalooki/scoring/">Jamaican Kalooki scoring</Link>.
      </p>

      <h2>3. Treat jokers as expensive wilds</h2>
      <p>
        A joker can finish a set or run, but a joker left in hand is a 50-point disaster. Prefer natural melds when you
        can; bank the joker only when it clearly accelerates going out.
      </p>

      <h2>4. Track discards and calls</h2>
      <p>
        Watch what opponents pick and throw. Calling gets you the card you need — at the cost of a penalty draw and one
        of your three calls. Save calls for cards that complete your contract.
      </p>

      <h2>5. Know when down and out is worth it</h2>
      <p>
        Going down and out doubles opponents’ scores for the round. If your hand is ready on first lay, take it. If you
        are one discard away and someone else looks tight, press the pace.
      </p>

      <h2>6. Practice solo, then host a table</h2>
      <p>
        Use Super Kalooki’s AI modes to rehearse contracts, then host a live table for 4–6 friends. Same Jamaican rules
        either way — <Link href="/play/">play online on iOS</Link>.
      </p>

      <p>
        Want more depth? Read{' '}
        <Link href="/blog/mastering-kalooki-strategies-and-tips-for-beginners/">
          Mastering Kalooki: Strategies and Tips for Beginners
        </Link>
        .
      </p>
    </GuideLayout>
  )
}
