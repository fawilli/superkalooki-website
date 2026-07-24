import {GuideLayout} from '@/components/GuideLayout'
import {AI_SUMMARY} from '@/lib/jamaican-kalooki'
import {
  graphJsonLd,
  howToJsonLd,
  organizationJsonLd,
  webPageJsonLd,
} from '@/lib/json-ld'
import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jamaican Kalooki Scoring — Deadwood, Penalties & Winning',
  description:
    'How Jamaican Kalooki scoring works: card penalty values, deadwood, down and out, call and contract-error penalties, and lowest score after nine deals.',
  alternates: {canonical: '/jamaican-kalooki/scoring/'},
  openGraph: {
    title: 'Jamaican Kalooki Scoring',
    description: 'Deadwood values, double scoring on down-and-out, and 50-point penalties.',
    url: '/jamaican-kalooki/scoring/',
  },
}

export default function ScoringPage() {
  const jsonLd = graphJsonLd([
    organizationJsonLd(),
    webPageJsonLd({
      name: 'Jamaican Kalooki Scoring',
      description: metadata.description as string,
      path: '/jamaican-kalooki/scoring/',
    }),
    howToJsonLd({
      name: 'How Jamaican Kalooki scoring works',
      description: 'Score deadwood when a player goes out; lowest cumulative total after nine deals wins.',
      steps: [
        'When a player goes out, remaining cards in each hand are deadwood.',
        'Add each deadwood card’s penalty value to that player’s cumulative score.',
        'If the winner went down and out, opponents score double for that round.',
        'Apply 50-point penalties for over-calling or contract errors when they occur.',
        'After nine deals, the lowest cumulative score wins the match.',
      ],
    }),
  ])

  return (
    <GuideLayout
      currentPath="/jamaican-kalooki/scoring/"
      eyebrow="Scoring"
      jsonLd={jsonLd}
      summary={`${AI_SUMMARY} Scoring is based on deadwood left in hand when someone goes out; lowest total after nine deals wins.`}
      title="Jamaican Kalooki scoring & deadwood"
    >
      <p>
        In Jamaican Kalooki, you do <strong>not</strong> win by racing to 40 or 51 points. You win by finishing nine
        contract deals with the <strong>lowest cumulative score</strong>. Points are penalties for cards left in hand
        (deadwood) and for rule violations.
      </p>

      <h2>Card penalty values</h2>
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Penalty</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Joker</td>
            <td>50 pts</td>
          </tr>
          <tr>
            <td>Black Ace</td>
            <td>15 pts</td>
          </tr>
          <tr>
            <td>King, Queen, Jack, Ten</td>
            <td>10 pts</td>
          </tr>
          <tr>
            <td>2–9</td>
            <td>Face value</td>
          </tr>
          <tr>
            <td>Red Ace</td>
            <td>1 pt</td>
          </tr>
        </tbody>
      </table>

      <h2>Deadwood</h2>
      <p>
        <strong>Deadwood</strong> is every card still in your hand when another player goes out. Those values are added
        to your running total. Dumping high cards (especially jokers) before the go-out is core strategy — see{' '}
        <Link href="/jamaican-kalooki/strategy/">Jamaican Kalooki strategy</Link>.
      </p>

      <h2>Down and out</h2>
      <p>
        Going out on the same turn you first lay your contract is <strong>down and out</strong>. Opponents score{' '}
        <strong>double</strong> deadwood for that round — a powerful swing if you can pull it off.
      </p>

      <h2>Penalties</h2>
      <ul>
        <li>
          <strong>Over-call (more than three calls):</strong> 50 points; you may no longer call, refuse calls, or go
          down and out for the rest of that game.
        </li>
        <li>
          <strong>Contract error:</strong> 50 points; you cannot lay or go down and out that round (draw and discard
          only).
        </li>
      </ul>

      <p>
        Full contract tables and turn structure live in the{' '}
        <Link href="/rules/">Jamaican Kalooki rules</Link>. Ready to practice?{' '}
        <Link href="/play/">Play Super Kalooki on iOS</Link>.
      </p>
    </GuideLayout>
  )
}
