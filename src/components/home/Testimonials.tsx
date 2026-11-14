import { testimonials } from '@/data/testimonials'
import { site } from '@/data/site'

export default function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section id="reviews" className="bg-white pb-20 pt-8 sm:pb-24">
      <div className="container-site">
        <h2 className="h-section">What clients say</h2>

        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
          {testimonials.map((t) => (
            <figure key={t.name} className="border-l-4 border-navy pl-6 sm:pl-8">
              <blockquote className="text-lg leading-relaxed sm:text-xl">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 text-[15px]">
                <span className="font-bold">{t.name}</span>
                <span className="text-grey-muted">, {t.business}. 5-star Google review</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {site.googleReviewsUrl && (
          <p className="mt-12">
            <a href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="link">
              All reviews on Google
            </a>
          </p>
        )}
      </div>
    </section>
  )
}
