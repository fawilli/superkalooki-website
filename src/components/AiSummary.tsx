type Props = {
  children: string
  /** Visual tone — ivory pages use light; felt pages use dark */
  tone?: 'light' | 'dark'
}

/** Short, machine-quotable definition block for AIO / AEO. */
export function AiSummary({children, tone = 'light'}: Props) {
  const isDark = tone === 'dark'
  return (
    <aside
      aria-label="Summary"
      className={`rounded-xl border px-4 py-4 sm:px-5 sm:py-5 mb-8 ${
        isDark
          ? 'border-white/12 bg-felt-deep/80 text-ivory/80'
          : 'border-black/[0.08] bg-black/[0.03] text-text-mid'
      }`}
    >
      <p
        className={`text-[0.7rem] font-medium tracking-[0.16em] uppercase m-0 mb-2 ${
          isDark ? 'text-gold/80' : 'text-gold'
        }`}
      >
        Quick definition
      </p>
      <p className="text-[0.95rem] leading-relaxed m-0 text-pretty">{children}</p>
    </aside>
  )
}
