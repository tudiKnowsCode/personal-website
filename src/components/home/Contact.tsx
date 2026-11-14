import ContactForm from '../ContactForm'
import TrackedLink from '../TrackedLink'
import { mailHref, site, telHref } from '@/data/site'

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-navy pb-20 pt-8 text-white sm:pb-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="h-section">Let&apos;s talk about your business</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-muted">
              Tell me what you want more of: calls, bookings, orders, or time back. I&apos;ll get back to you within one
              business day with ideas and a free, fixed-price quote. No obligation.
            </p>

            <dl className="mt-10 space-y-6">
              <div>
                <dt className="text-[15px] text-navy-muted">Call or text</dt>
                <dd>
                  <TrackedLink
                    href={telHref}
                    event="Phone Click"
                    eventData={{ location: 'contact' }}
                    className="display text-3xl hover:underline sm:text-4xl"
                  >
                    {site.phone}
                  </TrackedLink>
                </dd>
              </div>
              <div>
                <dt className="text-[15px] text-navy-muted">Email</dt>
                <dd>
                  <TrackedLink
                    href={mailHref}
                    event="Email Click"
                    eventData={{ location: 'contact' }}
                    className="text-xl font-bold hover:underline"
                  >
                    {site.email}
                  </TrackedLink>
                </dd>
              </div>
              {site.bookingUrl && (
                <div>
                  <dt className="text-[15px] text-navy-muted">Prefer to talk first?</dt>
                  <dd>
                    <TrackedLink
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      event="Booking Click"
                      className="text-xl font-bold underline underline-offset-4"
                    >
                      Book a 15-minute call
                    </TrackedLink>
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-[15px] text-navy-muted">Based in</dt>
                <dd className="text-xl font-bold">{site.area}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white p-6 text-navy sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
