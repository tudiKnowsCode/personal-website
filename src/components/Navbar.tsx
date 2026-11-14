'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, Phone, X } from 'lucide-react'
import { Logo } from './Logo'
import TrackedLink from './TrackedLink'
import { site, telHref } from '@/data/site'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-navy-line bg-navy text-white">
      <div className="container-site flex h-[68px] items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name}, home`} onClick={() => setOpen(false)}>
          <Logo onDark />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[15px] font-medium text-navy-muted hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <TrackedLink
            href={telHref}
            event="Phone Click"
            eventData={{ location: 'navbar' }}
            className="text-[15px] font-bold hover:underline"
          >
            {site.phone}
          </TrackedLink>
          <Link href="/#contact" className="btn-white !px-5 !py-2.5 !text-[15px]">
            Get a quote
          </Link>
        </div>

        <div className="flex items-center lg:hidden">
          <TrackedLink
            href={telHref}
            event="Phone Click"
            eventData={{ location: 'navbar-mobile' }}
            aria-label={`Call or text ${site.phone}`}
            className="grid h-11 w-11 place-items-center"
          >
            <Phone size={20} aria-hidden="true" />
          </TrackedLink>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-navy-line lg:hidden">
        <nav aria-label="Mobile" className="container-site pb-6 pt-2">
          <ul>
            {links.map((l) => (
              <li key={l.href} className="border-b border-navy-line">
                <Link href={l.href} onClick={() => setOpen(false)} className="block py-4 text-xl font-bold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#contact" onClick={() => setOpen(false)} className="btn-white mt-6 w-full">
            Get a quote
          </Link>
        </nav>
      </div>
    </header>
  )
}
