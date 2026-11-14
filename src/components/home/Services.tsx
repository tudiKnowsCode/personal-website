import { site } from '@/data/site'

const services = [
  {
    title: 'Website design and development',
    text: 'Designed from scratch around your business, then hand-coded so it loads fast on any phone. No templates.',
  },
  {
    title: 'Local SEO setup',
    text: 'Proper page titles, structured data, a sitemap and clean code, so people searching nearby can find you.',
  },
  {
    title: 'Ordering and automation',
    text: 'Booking, quote and ordering systems, plus custom automation with tools like Google Forms and Apps Script that takes repetitive admin work off your plate.',
  },
  {
    title: 'Redesigns',
    text: 'Keep what works on your current site and rebuild the rest so it looks current and brings in inquiries.',
  },
  {
    title: 'Branding',
    text: 'A logo, colors and type that make your business look as established as it is.',
  },
  {
    title: 'Care plans',
    text: '30 days of support come with every site. After that, optional plans keep it updated and secure.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white pb-20 pt-8 sm:pb-24">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div>
          <h2 className="h-section">What I do</h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-grey-text">
            What I build to make that happen. One person handles all of it, from the first sketch to launch.
          </p>
          <p className="mt-8 max-w-sm text-[15px] leading-relaxed text-grey-muted">
            {site.startingPrice
              ? `Websites start at ${site.startingPrice}. Every project gets a fixed-price quote up front.`
              : 'Every project gets a fixed-price quote up front, so you know the full cost before any work starts.'}
          </p>
        </div>

        <dl className="border-t-2 border-navy">
          {services.map((s) => (
            <div key={s.title} className="grid gap-2 border-b border-grey-line py-6 sm:grid-cols-[1fr_1.4fr] sm:gap-8">
              <dt className="text-xl font-bold leading-snug">{s.title}</dt>
              <dd className="leading-relaxed text-grey-text">{s.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
