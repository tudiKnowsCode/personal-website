import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Work from '@/components/sections/Work'
import ConceptWork from '@/components/sections/ConceptWork'
import WhyWebsite from '@/components/sections/WhyWebsite'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.tudino.dev/#business',
      name: 'Tudino Web Development',
      description:
        'Premium web design and development for small businesses and entrepreneurs. Custom websites built to convert visitors into clients.',
      url: 'https://www.tudino.dev',
      telephone: '+12037670013',
      email: 'nick@tudino.dev',
      founder: {
        '@type': 'Person',
        name: 'Nicholas Tudino',
        jobTitle: 'Founder & Lead Developer',
        url: 'https://www.tudino.dev/#about',
        sameAs: [
          'https://github.com/tudiKnowsCode',
          'https://www.linkedin.com/in/ntudino/',
          'https://www.instagram.com/tudinowebdev/',
        ],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Manchester',
        addressRegion: 'CT',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'Country',
        name: 'United States',
      },
      serviceType: [
        'Web Design',
        'Web Development',
        'E-Commerce Development',
        'Brand Identity',
        'SEO',
        'Website Maintenance',
      ],
      priceRange: '$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '2',
        bestRating: '5',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.tudino.dev/#website',
      url: 'https://www.tudino.dev',
      name: 'Tudino Web Development',
      description: 'Premium web design and development for ambitious businesses.',
      publisher: { '@id': 'https://www.tudino.dev/#business' },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.tudino.dev/#webpage',
      url: 'https://www.tudino.dev',
      name: 'Tudino Web Development | Premium Websites for Ambitious Businesses',
      isPartOf: { '@id': 'https://www.tudino.dev/#website' },
      about: { '@id': 'https://www.tudino.dev/#business' },
      description:
        'We build visually stunning, conversion-focused websites that make your business impossible to ignore.',
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Work />
        <ConceptWork />
        <WhyWebsite />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
