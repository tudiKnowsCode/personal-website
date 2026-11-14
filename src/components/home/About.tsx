import TrackedLink from '../TrackedLink'
import { site, telHref } from '@/data/site'

export default function About() {
  return (
    <>
      <section id="about" className="bg-grey-bg pb-20 pt-8 sm:pb-24">
        <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <h2 className="h-section">About me</h2>

          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-grey-text">
            <p>
              I&apos;m Nick. I started {site.name} to give small businesses a professional, custom website without
              agency prices.
            </p>
            <p>
              Every client works with me directly, from the first call to launch day. I don&apos;t use templates and I
              don&apos;t hand projects off to anyone else. I&apos;m still around after the site goes live, too.
            </p>
            <p>
              The easiest way to see if we&apos;re a fit is a quick conversation. Call or text me at{' '}
              <TrackedLink href={telHref} event="Phone Click" eventData={{ location: 'about' }} className="link text-navy">
                {site.phone}
              </TrackedLink>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
