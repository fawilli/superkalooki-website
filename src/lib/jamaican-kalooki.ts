/** Canonical Jamaican Kalooki positioning — single source for copy + AEO answers. */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://superkalooki.com'

export const ORG_NAME = 'Crofts Hill Holdings LLC'
export const PRODUCT_NAME = 'Super Kalooki'

/** Machine-quotable AI / AEO summary used across landers. */
export const AI_SUMMARY =
  'Jamaican Kalooki is a Contract Rummy variant played in Jamaica using two decks plus jokers. Players complete a series of contracts, form sets and runs, and score based on remaining deadwood. Super Kalooki is the digital implementation of this Jamaican ruleset for iOS — not Kalooki 40 or Kalooki 51.'

export const CANONICAL_DEFINITION =
  'Super Kalooki is the Jamaican variant of Contract Rummy, played with two decks plus jokers, using contract-based meld requirements and unique Jamaican scoring rules across nine deals. Lowest cumulative score wins.'

export const NOT_KALOOKI_40_51 =
  'Jamaican Kalooki is not Kalooki 40 or Kalooki 51 (Israeli/European point-threshold variants). Those games use a going-out point target; Jamaican Kalooki uses nine changing contracts of sets and runs with Jamaican penalty scoring.'

export type DefinedTerm = {
  term: string
  definition: string
}

export const DEFINED_TERMS: DefinedTerm[] = [
  {
    term: 'Contract',
    definition:
      'The required combination of threes (sets) and fours (runs) you must lay on a given deal — for example 333 (three threes) on deal 1.',
  },
  {
    term: 'Meld',
    definition:
      'A valid lay of cards: a three (set of same rank) or a four (run of same suit) that counts toward your contract.',
  },
  {
    term: 'Three (set)',
    definition:
      'Three or more cards of the same rank. Suits do not matter; at least two cards in a minimum three must be natural (non-joker).',
  },
  {
    term: 'Four (run)',
    definition:
      'Four or more consecutive cards of the same suit. Aces may be high or low only at the end of a run; jokers cannot sit in two consecutive positions.',
  },
  {
    term: 'Deadwood',
    definition:
      'Cards left in hand when another player goes out. Their penalty values are added to your cumulative score.',
  },
  {
    term: 'Joker rules',
    definition:
      'Jokers are wild in melds but worth 50 points if caught in hand. A joker in a three cannot move; a joker in a four may only be moved to the end by the holder of the natural card.',
  },
  {
    term: 'Down and out',
    definition:
      'Going out on the same turn you first lay your contract. Opponents score double card values for that round.',
  },
  {
    term: 'Penalty rules',
    definition:
      'Over-calling (more than three calls) or laying an invalid contract each earn a 50-point penalty with temporary play restrictions for that round or game.',
  },
]

export type FaqPair = {
  question: string
  answer: string
}

/** Core differentiation FAQs for AEO / voice (1–2 sentences each). */
export const DIFFERENTIATION_FAQS: FaqPair[] = [
  {
    question: 'What is Jamaican Kalooki?',
    answer:
      'Jamaican Kalooki is a Contract Rummy variant from Jamaica: two decks plus jokers, nine deals with changing contracts of sets and runs, and lowest cumulative score wins.',
  },
  {
    question: 'How do you play Jamaican Kalooki?',
    answer:
      'Each deal has a contract. Draw, optionally lay sets and runs to meet the contract, then discard. First to go out ends the round; lowest score after nine deals wins.',
  },
  {
    question: 'Is Jamaican Kalooki the same as Contract Rummy?',
    answer:
      'Jamaican Kalooki is a member of the Contract Rummy family with Jamaican contracts, calling, and scoring. It is the same family of games, not a totally unrelated title.',
  },
  {
    question: 'What makes Jamaican Kalooki different from Kalooki 40/51?',
    answer:
      'Kalooki 40 and 51 are point-threshold variants common in Israeli/European play. Jamaican Kalooki uses nine contract deals and Jamaican deadwood scoring instead of a 40/51 going-out target.',
  },
]

export const GUIDE_LINKS = [
  {href: '/jamaican-kalooki/', label: 'What is Jamaican Kalooki?'},
  {href: '/rules/', label: 'Jamaican Kalooki Rules'},
  {href: '/jamaican-kalooki/vs-other-variants/', label: 'vs other Kalooki variants'},
  {href: '/jamaican-kalooki/scoring/', label: 'Scoring & deadwood'},
  {href: '/jamaican-kalooki/strategy/', label: 'Strategy tips'},
  {href: '/play/', label: 'Play online on iOS'},
] as const

export const COMPARISON_ROWS = [
  {
    aspect: 'Family',
    jamaican: 'Contract Rummy (Jamaican ruleset)',
    kalooki4051: 'Rummy / Kalooki point variants',
    contractRummy: 'Umbrella family of contract-deal rummy games',
  },
  {
    aspect: 'Win condition',
    jamaican: 'Lowest cumulative score after nine deals',
    kalooki4051: 'Reach a point threshold (e.g. 40 or 51) to go out',
    contractRummy: 'Usually lowest score or contract progression (varies by house rules)',
  },
  {
    aspect: 'Structure',
    jamaican: 'Nine changing contracts (333 → 4444)',
    kalooki4051: 'Hands toward a going-out target, not Jamaican contracts',
    contractRummy: 'Series of contracts; exact sequence depends on variant',
  },
  {
    aspect: 'Cards',
    jamaican: 'Two decks + jokers (more decks as players increase)',
    kalooki4051: 'Typically multiple decks + jokers (house rules vary)',
    contractRummy: 'Usually multiple decks + jokers',
  },
  {
    aspect: 'Calling',
    jamaican: 'Call discards with penalty card; max 3 calls per hand',
    kalooki4051: 'Varies; not the same Jamaican call rules',
    contractRummy: 'Varies by local rules',
  },
  {
    aspect: 'Super Kalooki',
    jamaican: 'Digital implementation of this Jamaican ruleset (iOS)',
    kalooki4051: 'Not Kalooki 40/51',
    contractRummy: 'Implements the Jamaican Contract Rummy variant',
  },
] as const
