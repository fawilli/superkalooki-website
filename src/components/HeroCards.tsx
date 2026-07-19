import Image from 'next/image'

type FanCard = {
  src: string
  alt: string
  rotate: number
  x: string
  y: string
  z: number
}

const HERO_FAN: FanCard[] = [
  {src: '/cards/Heart_A.png', alt: 'Ace of Hearts', rotate: -28, x: '2%', y: '18%', z: 1},
  {src: '/cards/Spade_K.png', alt: 'King of Spades', rotate: -16, x: '14%', y: '10%', z: 2},
  {src: '/cards/Diamond_Q.png', alt: 'Queen of Diamonds', rotate: -6, x: '26%', y: '6%', z: 3},
  {src: '/cards/Club_J.png', alt: 'Jack of Clubs', rotate: 4, x: '38%', y: '5%', z: 4},
  {src: '/cards/Heart_10.png', alt: 'Ten of Hearts', rotate: 14, x: '50%', y: '8%', z: 5},
  {src: '/cards/Spade_9.png', alt: 'Nine of Spades', rotate: 24, x: '62%', y: '14%', z: 6},
  {src: '/cards/Joker_Red.png', alt: 'Red Joker', rotate: 34, x: '74%', y: '22%', z: 7},
]

/** Overlapping hand of real Super Kalooki card art for the marketing hero. */
export function HeroCardFan({className = ''}: {className?: string}) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto h-[280px] w-full max-w-xl sm:h-[340px] lg:h-[400px] ${className}`}
    >
      {HERO_FAN.map((card) => (
        <div
          key={card.src}
          className="absolute w-[108px] sm:w-[128px] lg:w-[148px] drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out will-change-transform hover:-translate-y-2"
          style={{
            left: card.x,
            top: card.y,
            zIndex: card.z,
            transform: `rotate(${card.rotate}deg)`,
          }}
        >
          <Image
            alt=""
            className="h-auto w-full rounded-md"
            height={267}
            priority={card.z <= 3}
            src={card.src}
            width={217}
          />
        </div>
      ))}
    </div>
  )
}

const CONTRACT_SET = [
  {src: '/cards/Heart_7.png', alt: 'Seven of Hearts'},
  {src: '/cards/Diamond_7.png', alt: 'Seven of Diamonds'},
  {src: '/cards/Club_7.png', alt: 'Seven of Clubs'},
]

const CONTRACT_RUN = [
  {src: '/cards/Spade_9.png', alt: 'Nine of Spades'},
  {src: '/cards/Spade_10.png', alt: 'Ten of Spades'},
  {src: '/cards/Spade_J.png', alt: 'Jack of Spades'},
  {src: '/cards/Spade_Q.png', alt: 'Queen of Spades'},
]

/** Compact contract melds (set of 3 + run of 4) using real card art. */
export function ContractMeldCards({className = ''}: {className?: string}) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      <MeldRow label="Set of 3" cards={CONTRACT_SET} />
      <MeldRow label="Run of 4" cards={CONTRACT_RUN} />
    </div>
  )
}

function MeldRow({
  label,
  cards,
}: {
  label: string
  cards: {src: string; alt: string}[]
}) {
  return (
    <div>
      <p className="text-[0.7rem] font-medium tracking-[0.16em] uppercase text-gold/75 mb-2.5">{label}</p>
      <div className="flex items-end -space-x-6 sm:-space-x-7">
        {cards.map((card, i) => (
          <Image
            key={card.src}
            alt={card.alt}
            className="relative h-auto w-[72px] sm:w-[88px] rounded-md shadow-lg ring-1 ring-black/40"
            height={267}
            src={card.src}
            style={{zIndex: i + 1}}
            width={217}
          />
        ))}
      </div>
    </div>
  )
}
