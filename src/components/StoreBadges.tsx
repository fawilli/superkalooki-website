const APP_STORE =
  'https://apps.apple.com/in/app/super-kalooki/id6451106023'

export function StoreBadges({centered = false}: {centered?: boolean}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-3 ${centered ? 'justify-center' : ''}`}
    >
      <a
        aria-label="Download on the App Store"
        className="inline-block no-underline min-h-11"
        href={APP_STORE}
        rel="noopener noreferrer"
        target="_blank"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Download on the App Store"
          height={44}
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          style={{height: 44, width: 'auto', display: 'block'}}
        />
      </a>
      <span
        aria-label="Get it on Google Play — Coming Soon"
        className="inline-block cursor-not-allowed relative min-h-11"
        title="Coming Soon"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Get it on Google Play"
          height={44}
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          style={{
            height: 44,
            width: 'auto',
            display: 'block',
            opacity: 0.38,
            filter: 'grayscale(0.3)',
          }}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold/90 text-black text-[0.75rem] font-bold px-[0.6rem] py-[0.2rem] rounded-sm whitespace-nowrap tracking-[0.05em]">
          Soon
        </span>
      </span>
    </div>
  )
}
