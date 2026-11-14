// Single source of truth for business details. Keep NAP (name, address, phone)
// identical to your Google Business Profile.
export const site = {
  name: 'Tudino Web Development',
  owner: 'Nick Tudino',
  ownerFullName: 'Nicholas Tudino',
  url: 'https://www.tudino.dev',
  email: 'nick@tudino.dev',
  phone: '(203) 767-0013',
  phoneE164: '+12037670013',
  /** Shown everywhere on the site. The city only appears in the structured data's postal address. */
  area: 'Connecticut',
  /** Kept only for structured data, so it matches your Google Business Profile. Not shown on the page. */
  city: 'Manchester',
  region: 'CT',
  socials: {
    github: 'https://github.com/tudiKnowsCode',
    linkedin: 'https://www.linkedin.com/in/ntudino/',
    instagram: 'https://www.instagram.com/tudinowebdev/',
  },
  /**
   * Set to a string like '$1,500' to show "Most sites start at $X" in the FAQ and services.
   * A visible starting price filters out bad-fit leads and reassures good ones.
   */
  startingPrice: null as string | null,
  /** Paste your Google Business Profile reviews link (Share > reviews) to link the testimonials. */
  googleReviewsUrl: null as string | null,
  /** Optional Calendly / Cal.com link. When set, a "Book a call" option appears next to the form. */
  bookingUrl: null as string | null,
}

export const telHref = `tel:${site.phoneE164}`
export const mailHref = `mailto:${site.email}`
