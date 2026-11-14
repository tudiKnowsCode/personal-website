import { site } from './site'

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: 'How much does a website cost?',
    a: `Every project gets a fixed-price quote after a free call, so you know the full cost before any work starts. Price depends mostly on how many pages you need and features like online booking or ordering.${
      site.startingPrice ? ` Most small business sites start at ${site.startingPrice}.` : ''
    }`,
  },
  {
    q: 'How long does it take?',
    a: 'Most small business sites go live within a few weeks. The biggest factor is usually content, so having your photos, services, and any reviews ready speeds things up. You get regular updates the whole way, so you always know where things stand.',
  },
  {
    q: 'Do you use templates?',
    a: 'No. Every site is designed and coded from scratch around your business, your customers, and what you want them to do: call, book, or request a quote.',
  },
  {
    q: 'Will my site show up on Google?',
    a: 'Every site launches with the SEO foundations in place: fast load times, proper titles and descriptions, structured data, a sitemap, and mobile-friendly pages. For local businesses, a well-kept Google Business Profile with real reviews matters just as much, and I’m happy to point you in the right direction there.',
  },
  {
    q: 'I already have a website. Can you redesign it?',
    a: 'Yes. I’ll look at what your current site does well and where it’s losing people, then rebuild it so it looks current, loads fast, and makes it easy for visitors to get in touch.',
  },
  {
    q: 'Can you automate parts of my business, not just build a website?',
    a: 'Yes. For a meal prep business, I built an ordering system on Google Forms with custom Apps Script automation that now saves the owner more than 15 hours of manual work every week. If you’re stuck re-typing orders, chasing forms, or updating spreadsheets by hand, there’s a good chance it can be automated.',
  },
  {
    q: 'What happens after launch?',
    a: '30 days of post-launch support is included with every project: bug fixes, tweaks, and questions covered. After that, flexible care plans are available to keep your site updated and secure.',
  },
  {
    q: 'Who will I actually be working with?',
    a: `Me, ${site.owner}, from the first call to launch day and after. No account managers, and no handing you off to someone else.`,
  },
]
