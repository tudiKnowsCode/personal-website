'use client'

import { useRef, useState } from 'react'
import { track } from '@vercel/analytics'
import { mailHref, site, telHref } from '@/data/site'

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID

const projectTypes = ['New website', 'Redesign', 'Ordering or automation', 'Something else']

const inputClass =
  'w-full border border-grey-line bg-white px-4 py-3 text-[16px] text-navy placeholder:text-grey-muted focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15'

const labelClass = 'mb-1.5 block text-[15px] font-bold'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const successRef = useRef<HTMLDivElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      setStatus('error')
      return
    }
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(String(res.status))
      track('Lead', { projectType: String(data.projectType ?? 'unspecified') })
      setStatus('sent')
      requestAnimationFrame(() => successRef.current?.focus())
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="py-10 focus:outline-none">
        <h3 className="display text-4xl">Got it, thanks</h3>
        <p className="mt-4 max-w-sm leading-relaxed text-grey-text">
          I&apos;ll get back to you within one business day. If it&apos;s urgent, call or text me at{' '}
          <a href={telHref} className="link text-navy">
            {site.phone}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className={labelClass}>
            Email
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className={labelClass}>
          Phone <span className="font-normal text-grey-muted">(optional)</span>
        </label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
      </div>

      <fieldset>
        <legend className={labelClass}>What do you need?</legend>
        <div className="mt-1 grid gap-2 sm:grid-cols-2">
          {projectTypes.map((type) => {
            const id = `cf-type-${type.replace(/\W+/g, '-').toLowerCase()}`
            return (
              <div key={type}>
                <input type="radio" id={id} name="projectType" value={type} className="peer sr-only" />
                <label
                  htmlFor={id}
                  className="block cursor-pointer border border-grey-line px-4 py-2.5 text-[15px] font-medium text-grey-text hover:border-navy peer-checked:border-navy peer-checked:bg-navy peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#5B8DEF]"
                >
                  {type}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          What do you want your website to help with?
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          placeholder="For example: more calls, online orders, looking more professional, less time on paperwork…"
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* Honeypot: Formspree drops submissions that fill this in. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      {status === 'error' && (
        <p role="alert" className="border-l-4 border-red-700 bg-red-50 px-4 py-3 text-[15px] text-red-900">
          Sorry, that didn&apos;t go through. Please email{' '}
          <a href={mailHref} className="font-bold underline">
            {site.email}
          </a>{' '}
          or call or text {site.phone}.
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-navy w-full disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
    </form>
  )
}
