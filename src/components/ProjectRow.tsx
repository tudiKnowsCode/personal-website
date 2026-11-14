import Image from 'next/image'
import Link from 'next/link'
import TrackedLink from './TrackedLink'
import type { Project } from '@/data/portfolio'

/** Large alternating row: screenshot on one side, details on the other. */
export default function ProjectRow({
  project,
  flip = false,
  headingLevel = 'h3',
  priority = false,
}: {
  project: Project
  flip?: boolean
  headingLevel?: 'h2' | 'h3'
  priority?: boolean
}) {
  const Heading = headingLevel
  return (
    <article className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
      <Link
        href={`/work/${project.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className={`group block border border-grey-line bg-white md:col-span-7 ${flip ? 'md:order-2' : ''}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-white">
          <Image
            src={project.image}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 680px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      </Link>

      <div className="md:col-span-5">
        <p className="text-[15px] text-grey-muted">
          {project.category}
          {project.location && `, ${project.location}`}
        </p>
        <Heading className="display mt-2 text-4xl sm:text-[2.75rem]">
          <Link href={`/work/${project.slug}`} className="hover:underline hover:decoration-4 hover:underline-offset-4">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-4 leading-relaxed text-grey-text">{project.summary}</p>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <Link href={`/work/${project.slug}`} className="link">
            How it was built<span className="sr-only">: {project.title}</span>
          </Link>
          <TrackedLink
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            event="Project Visit"
            eventData={{ project: project.slug }}
            className="text-grey-muted underline underline-offset-[5px] hover:text-navy"
          >
            {project.displayUrl}
            <span className="sr-only"> (opens in a new tab)</span>
          </TrackedLink>
        </p>
      </div>
    </article>
  )
}
