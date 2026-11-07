import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PortfolioGrid from '@/components/sections/PortfolioGrid'
import ConceptWork from '@/components/sections/ConceptWork'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Websites built by Tudino Web Development for real estate agents, auto shops, tutors, gyms and other small businesses, plus concept designs across industries.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Portfolio | Tudino Web Development',
    url: '/work',
  },
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PortfolioGrid />
        <ConceptWork />
      </main>
      <Footer />
    </>
  )
}
