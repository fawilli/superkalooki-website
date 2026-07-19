import Image from 'next/image'

/** Landscape phone bezel for in-game screenshots (avoids object-cover cropping). */
export function PhoneFrame({
  src,
  alt,
  priority = false,
  className = '',
}: {
  src: string
  alt: string
  priority?: boolean
  className?: string
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="rounded-[1.15rem] sm:rounded-[1.6rem] border border-white/18 bg-[#0a120c] p-1.5 sm:p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-black/50">
        <div className="relative aspect-[2868/1320] overflow-hidden rounded-[0.85rem] sm:rounded-[1.15rem] bg-black">
          <Image
            alt={alt}
            className="object-contain"
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 720px"
            src={src}
          />
        </div>
      </div>
    </div>
  )
}
