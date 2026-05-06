import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Work from '@/components/sections/Work'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
