'use client'

import {OpenInAppButton} from '@/components/OpenInAppButton'
import {useClientPlatform} from '@/hooks/useClientPlatform'

type Props = {
  join?: string
  seats?: string
}

/**
 * In-flow nudge when someone lands on /play?join=… but stays in the browser
 * (OS Universal / App Links already try to hand off; this is the soft fallback).
 * Preserves join/seats on the open URL — does not rewrite or strip invite params.
 */
export function InviteOpenBanner({join, seats}: Props) {
  const platform = useClientPlatform()

  if (!join) return null
  if (platform === null || platform === 'other') return null

  return (
    <section
      aria-label="Open invite in Super Kalooki"
      className="border-b border-gold/25 bg-felt-deep px-5 py-5 sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="m-0 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-gold/80">
            Table invite
          </p>
          <p className="m-0 mt-1 font-display text-lg text-ivory">Join this table in Super Kalooki</p>
          <p className="m-0 mt-1 text-sm leading-relaxed text-ivory/55">
            Open the app to take your seat. If you still need the app, download below — this invite link keeps working.
          </p>
        </div>
        <OpenInAppButton
          className="sk-btn sk-btn--gold sk-btn--lg shrink-0"
          emphasize
          query={{join, seats}}
        >
          Open in Super Kalooki
        </OpenInAppButton>
      </div>
    </section>
  )
}
