import Link from 'next/link'

type Item = {
  title: string
  text: string
  /** Real evidence from client work or reviews. Never invent these. */
  proof: { kind: 'quote'; text: string; who: string } | { kind: 'link'; text: string; href: string }
}

const items: Item[] = [
  {
    title: 'Get found on Google',
    text: 'Every site is built so search engines understand what you do and where: proper page titles, structured data, fast load times and mobile-friendly pages. When people search for what you offer, you have a real shot at showing up.',
    proof: {
      kind: 'quote',
      text: 'Its searchability has been a huge bonus in helping potential clients find me.',
      who: 'Alyssa Tudino, Tudino Learning',
    },
  },
  {
    title: 'Look as good as your work',
    text: 'People judge a business by its website before they ever pick up the phone. A custom design that puts your track record, real photos and reviews up front tells them you’re the right choice.',
    proof: {
      kind: 'link',
      text: 'See how Realty by Storm leads with 109 closed sales and a 5.0 rating',
      href: '/work/realty-by-storm',
    },
  },
  {
    title: 'Turn visitors into customers',
    text: 'Clear next steps on every page, built around how your customers buy from you: call buttons, booking, quote requests or online ordering.',
    proof: {
      kind: 'quote',
      text: 'I’ve received multiple tutoring inquiries directly through my website.',
      who: 'Alyssa Tudino, Tudino Learning',
    },
  },
  {
    title: 'Spend less time on admin',
    text: 'If you’re re-typing orders, chasing forms or updating spreadsheets by hand, much of that can be automated with tools like Google Forms and Apps Script.',
    proof: {
      kind: 'quote',
      text: 'Save more than 15 hours of manual labor every week.',
      who: 'Pay Villano, meal prep business owner',
    },
  },
]

export default function HowIHelp() {
  return (
    <section id="help" className="bg-white pb-20 pt-8 sm:pb-24">
      <div className="container-site">
        <div className="max-w-3xl">
          <h2 className="h-section">How I can help your business</h2>
          <p className="mt-6 text-lg leading-relaxed text-grey-text sm:text-xl">
            Most owners don&apos;t want a website for its own sake. They want more customers and less busywork.
            Here&apos;s how I help with both.
          </p>
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="border-t-2 border-navy pt-6">
              <h3 className="display text-[2rem] sm:text-[2.4rem]">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-grey-text">{item.text}</p>
              {item.proof.kind === 'quote' ? (
                <figure className="mt-5 bg-grey-bg px-5 py-4 text-[15px]">
                  <blockquote className="font-semibold">&ldquo;{item.proof.text}&rdquo;</blockquote>
                  <figcaption className="mt-1 text-grey-muted">{item.proof.who}</figcaption>
                </figure>
              ) : (
                <p className="mt-5 bg-grey-bg px-5 py-4 text-[15px]">
                  <Link href={item.proof.href} className="link">
                    {item.proof.text}
                  </Link>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
