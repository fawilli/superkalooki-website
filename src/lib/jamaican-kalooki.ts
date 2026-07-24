/** Canonical Jamaican Kalooki copy — player-facing; shared across landers + FAQ schema. */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com'

export const ORG_NAME = 'Crofts Hill Holdings LLC'
export const PRODUCT_NAME = 'Super Kalooki'

/** Short summary for page tops (also useful for AI quotability). */
export const AI_SUMMARY =
  'Jamaican Kalooki is Contract Rummy the Jamaican way: two decks plus jokers, nine deals with changing contracts of sets and runs, and the lowest score wins. Super Kalooki brings that table to iOS — solo or with friends.'

export const CANONICAL_DEFINITION =
  'Jamaican Kalooki is the Jamaican form of Contract Rummy. You play with two decks and jokers across nine deals. Each deal has a contract — the sets and runs you must lay before you can go out. After nine deals, the lowest cumulative score wins.'

export const NOT_KALOOKI_40_51 =
  'If you have played Kalooki 40 or Kalooki 51, this is a different game. Those versions race to a point target to go out. Jamaican Kalooki runs nine contract deals and scores the cards left in your hand.'

export type DefinedTerm = {
  term: string
  definition: string
}

export const DEFINED_TERMS: DefinedTerm[] = [
  {
    term: 'Contract',
    definition:
      'The mix of threes (sets) and fours (runs) you must lay on that deal — for example 333 means three threes on deal 1.',
  },
  {
    term: 'Meld',
    definition: 'A valid lay: a three (same rank) or a four (same-suit run) that counts toward your contract.',
  },
  {
    term: 'Three (set)',
    definition:
      'Three or more cards of the same rank. Suits do not matter. A minimum three needs at least two real (non-joker) cards.',
  },
  {
    term: 'Four (run)',
    definition:
      'Four or more consecutive cards of the same suit. Aces can sit high or low only at the end of a run. Jokers cannot sit next to each other in a four.',
  },
  {
    term: 'Deadwood',
    definition:
      'Cards still in your hand when someone else goes out. Their point values are added to your score — so high cards hurt.',
  },
  {
    term: 'Joker rules',
    definition:
      'Jokers are wild in melds but cost 50 points if you are caught holding one. A joker in a three stays put; in a four it can only move to the end when someone holds the natural card.',
  },
  {
    term: 'Down and out',
    definition:
      'Going out on the same turn you first lay your contract. Everyone else scores double that round.',
  },
  {
    term: 'Penalties',
    definition:
      'More than three calls, or laying the wrong contract, costs 50 points and limits what you can do for that round or game.',
  },
]

export type FaqPair = {
  question: string
  answer: string
}

export const DIFFERENTIATION_FAQS: FaqPair[] = [
  {
    question: 'What is Jamaican Kalooki?',
    answer:
      'Jamaican Kalooki is Contract Rummy from Jamaica: two decks plus jokers, nine deals with changing contracts of sets and runs, and lowest score wins.',
  },
  {
    question: 'How do you play Jamaican Kalooki?',
    answer:
      'Each deal has a contract. Draw, lay your sets and runs when you can meet it, then discard. First player out ends the round; after nine deals, lowest total wins.',
  },
  {
    question: 'Is Jamaican Kalooki the same as Contract Rummy?',
    answer:
      'Yes — it is a Contract Rummy game with Jamaican contracts, calling, and scoring. Same family; Jamaican house rules.',
  },
  {
    question: 'What makes Jamaican Kalooki different from Kalooki 40/51?',
    answer:
      'Kalooki 40 and 51 are built around hitting a point target to go out. Jamaican Kalooki uses nine contract deals and scores the cards left in hand instead.',
  },
]

export const GUIDE_LINKS = [
  {href: '/jamaican-kalooki/', label: 'What is Jamaican Kalooki?'},
  {href: '/rules/', label: 'Full rules'},
  {href: '/jamaican-kalooki/vs-other-variants/', label: 'How it differs from other Kalooki'},
  {href: '/jamaican-kalooki/scoring/', label: 'Scoring & deadwood'},
  {href: '/jamaican-kalooki/strategy/', label: 'Strategy tips'},
  {href: '/play/', label: 'Play on iOS'},
] as const

export const COMPARISON_ROWS = [
  {
    aspect: 'What kind of game?',
    jamaican: 'Contract Rummy, Jamaican style',
    kalooki4051: 'Rummy with a point target to go out',
    contractRummy: 'Family of contract-deal rummy games',
  },
  {
    aspect: 'How you win',
    jamaican: 'Lowest score after nine deals',
    kalooki4051: 'Reach about 40 or 51 points to go out',
    contractRummy: 'Often lowest score or finishing contracts (house rules vary)',
  },
  {
    aspect: 'Structure',
    jamaican: 'Nine changing contracts (333 → 4444)',
    kalooki4051: 'Hands aimed at a going-out number',
    contractRummy: 'A series of contracts; the exact list depends on the variant',
  },
  {
    aspect: 'Cards',
    jamaican: 'Two decks + jokers (more decks as the table grows)',
    kalooki4051: 'Usually multiple decks + jokers',
    contractRummy: 'Usually multiple decks + jokers',
  },
  {
    aspect: 'Calling',
    jamaican: 'Call a discard, take a penalty card; max 3 calls per hand',
    kalooki4051: 'Different call rules (if any)',
    contractRummy: 'Depends on local rules',
  },
  {
    aspect: 'In Super Kalooki',
    jamaican: 'This is the ruleset you play on iOS',
    kalooki4051: 'Not this app',
    contractRummy: 'Super Kalooki plays the Jamaican variant',
  },
] as const
