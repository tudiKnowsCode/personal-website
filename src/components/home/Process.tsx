
const steps = [
  {
    title: 'Free call',
    text: 'We talk through your business, your customers and what the site needs to do. You get a fixed-price quote.',
  },
  {
    title: 'Design',
    text: 'I design the site and you review it. Nothing gets built until you’ve signed off on how it looks.',
  },
  {
    title: 'Build',
    text: 'I code it, set up the SEO basics and keep you posted along the way.',
  },
  {
    title: 'Launch',
    text: 'Tested on phones, tablets and desktops, then live. I handle the technical side.',
  },
  {
    title: 'Support',
    text: 'The first 30 days of fixes, tweaks and questions are included. Care plans after that if you want one.',
  },
]

export default function Process() {
  return (
    <>
      <section id="process" className="bg-navy pb-20 pt-8 text-white sm:pb-24">
        <div className="container-site">
          <h2 className="h-section">How it works</h2>

          <ol className="mt-14 grid border-t border-navy-line sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="border-b border-navy-line py-8 sm:px-6 sm:max-lg:odd:pl-0 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
              >
                <h3 className="display text-3xl">
                  <span className="text-navy-muted">{i + 1}.</span> {s.title}
                </h3>
                <p className="mt-3 text-[16px] leading-relaxed text-navy-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
