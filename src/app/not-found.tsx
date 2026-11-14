import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <>
      <section className="bg-navy pb-24 pt-20 text-white sm:pb-32 sm:pt-28">
        <div className="container-site">
          <p className="text-lg text-navy-muted">Error 404</p>
          <h1 className="display mt-3 text-[3.4rem] sm:text-[5.5rem]">Page not found</h1>
          <p className="mt-6 max-w-xl text-lg text-navy-muted">It may have moved, or the link might be mistyped.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/" className="btn-white">
              Back to the home page
            </Link>
            <Link href="/work" className="btn border-2 border-white text-white hover:bg-white hover:text-navy">
              See my work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
