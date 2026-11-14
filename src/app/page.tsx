import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import Edge from '@/components/Edge'
import Hero from '@/components/home/Hero'
import HowIHelp from '@/components/home/HowIHelp'
import WorkSection from '@/components/home/WorkSection'
import Testimonials from '@/components/home/Testimonials'
import Services from '@/components/home/Services'
import Process from '@/components/home/Process'
import About from '@/components/home/About'
import Faq from '@/components/home/Faq'
import Contact from '@/components/home/Contact'
import { site } from '@/data/site'
import { faqs } from '@/data/faq'
import { testimonials } from '@/data/testimonials'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: `Web Design in ${site.area} | ${site.name}`,
  description: `Websites that help small businesses get found on Google, earn trust and turn visitors into calls, bookings and orders. Designed and built in Connecticut by ${site.owner}. Free quotes.`,
  path: '/',
})

const businessId = `${site.url}/#business`

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': businessId,
      name: site.name,
      description:
        'Custom web design and development for small businesses in Connecticut: fast, mobile-first websites with local SEO, booking and ordering.',
      url: site.url,
      logo: `${site.url}/logo.png`,
      image: `${site.url}/headshot.webp`,
      telephone: site.phoneE164,
      email: site.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: 'US',
      },
      areaServed: { '@type': 'State', name: site.area },
      sameAs: Object.values(site.socials),
      founder: {
        '@type': 'Person',
        name: site.ownerFullName,
        jobTitle: 'Founder & Lead Developer',
        url: `${site.url}/#about`,
        sameAs: [site.socials.linkedin, site.socials.github],
      },
      knowsAbout: ['Web design', 'Web development', 'Local SEO', 'Online booking', 'E-commerce', 'Branding'],
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { '@id': businessId },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
}

const hasReviews = testimonials.length > 0

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <Edge from="navy" to="white" shape="rise" />
      <HowIHelp />
      <Edge from="white" to="grey" shape="fall" />
      <WorkSection />
      {hasReviews && <Edge from="grey" to="white" shape="rise" />}
      <Testimonials />
      <Edge from={hasReviews ? 'white' : 'grey'} to="navy" shape="fall" />
      <Process />
      <Edge from="navy" to="white" shape="rise" />
      <Services />
      <Edge from="white" to="grey" shape="fall" />
      <About />
      <Edge from="grey" to="white" shape="rise" />
      <Faq />
      <Edge from="white" to="navy" shape="fall" />
      <Contact />
    </>
  )
}
