'use client'

import { track } from '@vercel/analytics'
import type { AnchorHTMLAttributes } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Analytics event name, e.g. "Phone Click". */
  event: string
  eventData?: Record<string, string>
}

/** A plain <a> that records a conversion event when clicked (phone, email, external project links). */
export default function TrackedLink({ event, eventData, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, eventData)
        onClick?.(e)
      }}
    />
  )
}
