import Link from 'next/link'
import { Logo } from './Logo'
import Edge from './Edge'
import TrackedLink from './TrackedLink'
import { mailHref, site, telHref } from '@/data/site'

const explore = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Get a quote', href: '/#contact' },
]

const socials = [
  { label: 'Instagram', href: site.socials.instagram },
  { label: 'LinkedIn', href: site.socials.linkedin },
  { label: 'GitHub', href: site.socials.github },
]

export default function Footer() {
  return (
    <footer className="text-navy-muted">
      <Edge from="navy" to="deep" shape="rise" />
      <div className="bg-navy-deep">
        <div className="container-site grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label={`${site.name}, home`}>
              <Logo onDark />
            </Link>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
              Websites for small businesses, designed and built in {site.area}.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[15px] font-bold text-white">Pages</h2>
            <ul className="mt-4 space-y-2 text-[15px]">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white hover:underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[15px] font-bold text-white">Contact</h2>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li>
                <TrackedLink href={telHref} event="Phone Click" eventData={{ location: 'footer' }} className="hover:text-white hover:underline">
                  {site.phone}
                </TrackedLink>
              </li>
              <li>
                <TrackedLink href={mailHref} event="Email Click" eventData={{ location: 'footer' }} className="hover:text-white hover:underline">
                  {site.email}
                </TrackedLink>
              </li>
              <li>{site.area}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-[15px] font-bold text-white">Elsewhere</h2>
            <ul className="mt-4 space-y-2 text-[15px]">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-line">
          <div className="container-site flex flex-col gap-2 py-6 text-[13px] md:flex-row md:justify-between">
            <p>
              &copy; {new Date().getFullYear()} {site.name}
            </p>
            <p>
              Based in {site.area}. Working with clients everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
