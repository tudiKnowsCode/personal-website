import Link from 'next/link'
import ProjectRow from '../ProjectRow'
import { featuredProjects } from '@/data/portfolio'

export default function WorkSection() {
  return (
    <section id="work" className="bg-grey-bg pb-20 pt-8 sm:pb-24">
      <div className="container-site">
        <div className="max-w-2xl">
          <h2 className="h-section">Recent work</h2>
          <p className="mt-5 text-lg leading-relaxed text-grey-text">
            Real businesses with live sites. Each one shows what the business needed and how the site helps.
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-28">
          {featuredProjects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-20">
          <Link href="/work" className="btn-navy">
            See all projects
          </Link>
        </div>
      </div>
    </section>
  )
}
