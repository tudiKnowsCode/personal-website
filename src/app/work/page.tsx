import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Edge from '@/components/Edge'
import ProjectRow from '@/components/ProjectRow'
import { concepts, projects } from '@/data/portfolio'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Portfolio: Websites for Connecticut Small Businesses | Tudino Web Development',
  description:
    'Websites built by Tudino Web Development for real estate agents, auto shops, gyms, tutors and other small businesses, plus concept designs across industries.',
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      <section className="bg-navy pb-6 pt-14 text-white sm:pt-20">
        <div className="container-site">
          <h1 className="display max-w-4xl text-[3.4rem] sm:text-[5.5rem]">Client work</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-muted sm:text-xl">
            Every site on this page was built for a real business and is live today. Click through to any project to
            see what it needed and what I built.
          </p>
        </div>
      </section>
      <Edge from="navy" to="white" shape="rise" />

      <section className="pb-24 pt-10">
        <div className="container-site space-y-20 sm:space-y-28">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} flip={i % 2 === 1} headingLevel="h2" priority={i === 0} />
          ))}
        </div>
      </section>

      <Edge from="white" to="grey" shape="fall" />
      <section aria-labelledby="concepts" className="bg-grey-bg pb-16 pt-8">
        <div className="container-site">
          <h2 id="concepts" className="h-section">
            Concept designs
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-grey-text">
            Working demo sites I built to show what&apos;s possible in different industries.{' '}
            <strong className="text-navy">These are not real businesses.</strong>
          </p>

          <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {concepts.map((c) => (
              <li key={c.href} className="group relative">
                <div className="relative aspect-[16/10] overflow-hidden border border-grey-line bg-white">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 580px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-4 text-[15px] text-grey-muted">{c.industry} concept</p>
                <h3 className="display mt-1 text-3xl">
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="stretched-link group-hover:underline">
                    {c.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </h3>
                <p className="mt-2 leading-relaxed text-grey-text">{c.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Edge from="grey" to="navy" shape="rise" />
      <section className="bg-navy pb-20 pt-10 text-white">
        <div className="container-site flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="h-section">Your business next?</h2>
            <p className="mt-4 max-w-lg text-lg text-navy-muted">
              Every site is custom, so it doesn&apos;t matter if your industry isn&apos;t listed here.
            </p>
          </div>
          <Link href="/#contact" className="btn-white shrink-0">
            Get a quote
          </Link>
        </div>
      </section>
    </>
  )
}
