import TrackedLink from '../TrackedLink'
import { faqs } from '@/data/faq'
import { mailHref, site, telHref } from '@/data/site'

export default function Faq() {
  return (
    <section id="faq" className="bg-white pb-20 pt-8 sm:pb-24">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 className="h-section">Questions</h2>
          <p className="mt-5 max-w-xs text-lg leading-relaxed text-grey-text">
            Something else on your mind? Call or text{' '}
            <TrackedLink href={telHref} event="Phone Click" eventData={{ location: 'faq' }} className="link text-navy">
              {site.phone}
            </TrackedLink>{' '}
            or email{' '}
            <TrackedLink href={mailHref} event="Email Click" eventData={{ location: 'faq' }} className="link text-navy">
              {site.email}
            </TrackedLink>
            .
          </p>
        </div>

        <div className="border-t-2 border-navy">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-grey-line">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-xl font-bold leading-snug [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="w-5 shrink-0 text-center text-2xl font-normal leading-none" aria-hidden="true">
                  <span className="group-open:hidden">+</span>
                  <span className="hidden group-open:inline">&minus;</span>
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-grey-text">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
