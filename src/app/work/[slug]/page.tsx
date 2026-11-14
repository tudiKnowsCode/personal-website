import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Edge from '@/components/Edge'
import JsonLd from '@/components/JsonLd'
import TrackedLink from '@/components/TrackedLink'
import { getProject, projects } from '@/data/portfolio'
import { site } from '@/data/site'
import { pageMeta } from '@/lib/seo'

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug)
  if (!p) return {}
  return pageMeta({
    title: `${p.title}: ${p.category} Website | ${site.name}`,
    description: `${p.summary} Designed and built by ${site.name}.`,
    path: `/work/${p.slug}`,
  })
}

export default function CaseStudy({ params }: Props) {
  const p = getProject(params.slug)
  if (!p) notFound()

  const next = projects[(projects.indexOf(p) + 1) % projects.length]

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${site.url}/work` },
      { '@type': 'ListItem', position: 3, name: p.title, item: `${site.url}/work/${p.slug}` },
    ],
  }

  return (
    <article>
      <JsonLd data={breadcrumbs} />

      <header className="bg-navy pb-8 pt-10 text-white sm:pt-14">
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="text-[15px] text-navy-muted">
            <Link href="/work" className="underline underline-offset-4 hover:text-white">
              Work
            </Link>{' '}
            / {p.title}
          </nav>
          <h1 className="display mt-8 max-w-4xl text-[3.2rem] sm:text-[5rem]">{p.title}</h1>
          <p className="mt-4 text-lg text-navy-muted">
            {p.category}
            {p.location && `, ${p.location}`}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed sm:text-xl">{p.description}</p>
          <TrackedLink
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            event="Project Visit"
            eventData={{ project: p.slug, location: 'case-study' }}
            className="btn-white mt-8"
          >
            Visit {p.displayUrl}
            <span className="sr-only"> (opens in a new tab)</span>
          </TrackedLink>
        </div>
      </header>
      <Edge from="navy" to="white" shape="rise" />

      <div className="container-site pt-6">
        <div className="border border-grey-line">
          <Image
            src={p.image}
            alt={`Homepage of the ${p.title} website`}
            width={p.imageWidth}
            height={p.imageHeight}
            sizes="(max-width: 1250px) 100vw, 1150px"
            priority
            className="h-auto w-full"
          />
        </div>
      </div>

      <section className="py-20 sm:py-24">
        <div className="container-site grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="display text-4xl">What it needed to do</h2>
            <ul className="mt-6 border-t-2 border-navy">
              {p.goals.map((g) => (
                <li key={g} className="border-b border-grey-line py-4 leading-relaxed text-grey-text">
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display text-4xl">What I built</h2>
            <ul className="mt-6 border-t-2 border-navy">
              {p.built.map((b) => (
                <li key={b} className="border-b border-grey-line py-4 leading-relaxed text-grey-text">
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[15px] text-grey-muted">Services: {p.tags.join(', ')}</p>
          </div>
        </div>
      </section>

      <Edge from="white" to="navy" shape="fall" />
      <section className="bg-navy pb-20 pt-10 text-white">
        <div className="container-site">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="h-section">Want one like this?</h2>
              <p className="mt-4 max-w-lg text-lg text-navy-muted">Free quote, fixed price, and you work with me directly.</p>
            </div>
            <Link href="/#contact" className="btn-white shrink-0">
              Get a quote
            </Link>
          </div>
          <p className="mt-14 border-t border-navy-line pt-6 text-navy-muted">
            Next project:{' '}
            <Link href={`/work/${next.slug}`} className="font-bold text-white underline underline-offset-4">
              {next.title}
            </Link>
          </p>
        </div>
      </section>
    </article>
  )
}
