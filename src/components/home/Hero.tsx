import Image from 'next/image'
import Link from 'next/link'
import TrackedLink from '../TrackedLink'
import { site, telHref } from '@/data/site'

export default function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="container-site grid items-end gap-12 pt-14 sm:pt-20 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-6 lg:pb-16 lg:pt-16">
        <div className="pb-4 lg:pb-0">
          <h1 className="display text-[2.9rem] sm:text-[4.25rem] lg:text-[4.6rem]">
            Websites that help small businesses get more customers
          </h1>
          <p className="mt-7 max-w-xl text-xl font-semibold leading-snug sm:text-2xl">
            Get found on Google, look as good as your work, and turn visitors into calls, bookings and orders.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-muted">
            I&apos;m {site.owner}, a web designer and developer based in {site.area}. I work with restaurants, auto
            shops, realtors, gyms, tutors and other small businesses anywhere, and you deal with me directly from the
            first call to launch day.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <Link href="#contact" className="btn-white">
              Get a free quote
            </Link>
            <p className="text-lg text-navy-muted">
              or call or text{' '}
              <TrackedLink
                href={telHref}
                event="Phone Click"
                eventData={{ location: 'hero' }}
                className="font-bold text-white underline decoration-2 underline-offset-[5px]"
              >
                {site.phone}
              </TrackedLink>
            </p>
          </div>

          <p className="mt-10 text-[15px] text-navy-muted">
            Rated 5 stars on Google by clients.{' '}
            <a href="#reviews" className="text-white underline underline-offset-4">
              Read the reviews
            </a>
          </p>
        </div>

        {/* Portrait with a slanted left edge that echoes the section dividers */}
        <div className="relative mx-auto w-full max-w-[290px] sm:max-w-md lg:max-w-none">
          <Image
            src="/headshot.webp"
            alt={`${site.owner}, founder of ${site.name}`}
            width={900}
            height={1125}
            priority
            sizes="(max-width: 1024px) 448px, 480px"
            className="aspect-[4/5] w-full object-cover object-top [clip-path:polygon(22%_0,100%_0,100%_100%,0_100%)]"
          />
        </div>
      </div>
    </section>
  )
}
