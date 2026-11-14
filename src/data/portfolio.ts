export type Project = {
  slug: string
  title: string
  category: string
  location?: string
  /** One-line summary for cards. */
  summary: string
  /** Longer intro for the case study page. */
  description: string
  /** What the site needed to do for the business. */
  goals: string[]
  /** What was actually built. */
  built: string[]
  tags: string[]
  displayUrl: string
  href: string
  image: string
  imageWidth: number
  imageHeight: number
  /** Shown on the home page. Keep this to 4 so the grid stays balanced. */
  featured?: boolean
}

export type Concept = {
  title: string
  industry: string
  description: string
  href: string
  image: string
  imageWidth: number
  imageHeight: number
  highlights: string[]
}

// Client work, ordered by how strongly it sells. The full list appears on /work.
export const projects: Project[] = [
  {
    slug: 'realty-by-storm',
    title: 'Realty by Storm',
    category: 'Residential Real Estate',
    location: 'Connecticut',
    summary:
      'A seller-focused site for a Connecticut REALTOR® that leads with 109 closed sales and a 5.0 Google rating.',
    description:
      'Realty by Storm is a Connecticut REALTOR® with Carbutti & Co. The goal was a site that speaks directly to homeowners thinking about selling, earns their trust quickly, and turns that trust into listing calls.',
    goals: [
      'Win the trust of homeowners comparing agents',
      'Put real track record front and center',
      'Make the selling process feel simple and low-stress',
      'Turn visitors into listing consultations',
    ],
    built: [
      'Proof-first hero leading with 109 closed sales and a 5.0 Google rating',
      'A clear four-step walkthrough of the selling process',
      'Calls to action for a listing conversation throughout the page',
      'Fast, mobile-first build for homeowners browsing on their phones',
    ],
    tags: ['Web Design', 'Lead Generation', 'Real Estate'],
    displayUrl: 'realtybystorm.com',
    href: 'https://www.realtybystorm.com/',
    image: '/storm.webp',
    imageWidth: 1471,
    imageHeight: 851,
    featured: true,
  },
  {
    slug: 'tonys-imported-auto',
    title: "Tony's Imported Auto Service",
    category: 'European Auto Repair',
    location: 'Manchester, CT',
    summary:
      'A credibility-first site for an import specialist that has served Manchester since 1979.',
    description:
      "Tony's has worked on imported cars in Manchester for more than 45 years. The new site needed to carry that reputation online and make it easy for import owners to book service.",
    goals: [
      'Show which makes the shop specializes in, at a glance',
      'Carry decades of local reputation onto the web',
      'Rank for local import repair searches',
      'Turn visitors into booked appointments',
    ],
    built: [
      'Hero built around the real shop and its history since 1979',
      'A "makes we specialize in" strip covering Audi, BMW, Mercedes, Jaguar, Porsche and Land Rover',
      'Real shop photos, a gallery, customer reviews and FAQs',
      'Appointment requests reachable from every page',
    ],
    tags: ['Web Design', 'Local SEO', 'Booking'],
    displayUrl: 'tonysimportedauto.com',
    href: 'https://tonysimportedauto.com',
    image: '/tonys.webp',
    imageWidth: 1600,
    imageHeight: 762,
    featured: true,
  },
  {
    slug: 'dogpound-strength-fitness',
    title: 'Dogpound Strength & Fitness',
    category: 'Gym & Personal Training',
    summary:
      'A bold, high-energy site for a personal training brand, built to turn visitors into members.',
    description:
      'Dogpound Strength & Fitness needed a site with the same energy as its training: bold, direct, and built to get prospective members to reach out.',
    goals: [
      'Match the energy of the brand',
      'Answer the questions new members ask before joining',
      'Make it easy to take the first step',
    ],
    built: [
      'High-energy, mobile-first design',
      'Class schedules and trainer profiles',
      'A simple online inquiry flow for new members',
    ],
    tags: ['Web Design', 'Mobile-First', 'Branding'],
    displayUrl: 'dogpoundfit.com',
    href: 'https://www.dogpoundfit.com',
    image: '/jen.webp',
    imageWidth: 1600,
    imageHeight: 719,
    featured: true,
  },
  {
    slug: 'tudino-learning',
    title: 'Tudino Learning',
    category: 'Education & Tutoring',
    summary:
      'A clean, trust-building site for a private tutor that brought in inquiries soon after launch.',
    description:
      'Tudino Learning is a private tutoring business. Parents needed to feel confident booking, and the tutor wanted a specific look and feel, so the design went through several versions until it was exactly right.',
    goals: [
      'Make parents feel confident booking',
      'Show subjects and results clearly',
      'Get found by families searching for tutoring',
    ],
    built: [
      'Clean, trust-focused design refined over multiple rounds',
      'Subject listings and student success stories',
      'Effortless online booking for parents',
      'SEO foundations that helped new clients find the site',
    ],
    tags: ['Web Design', 'Booking', 'SEO'],
    displayUrl: 'tudinolearning.com',
    href: 'https://tudinolearning.com',
    image: '/alyssa.webp',
    imageWidth: 1600,
    imageHeight: 855,
    featured: true,
  },
  {
    slug: 'sharon-tudino-real-estate',
    title: 'Sharon Tudino Real Estate',
    category: 'Real Estate',
    summary:
      'A polished site for a real estate agent with listings, an agent bio, and a streamlined contact experience.',
    description:
      'A professional website for a real estate agent, designed to showcase listings and build trust with buyers and sellers before the first conversation.',
    goals: ['Showcase current listings', 'Build trust through the agent’s story', 'Drive inquiries'],
    built: [
      'Property listing highlights',
      'Agent bio that builds credibility',
      'Streamlined contact experience',
    ],
    tags: ['Web Design', 'Real Estate', 'SEO'],
    displayUrl: 'sharon-tudino-realty.vercel.app',
    href: 'https://sharon-tudino-realty.vercel.app/',
    image: '/sharon.webp',
    imageWidth: 1600,
    imageHeight: 729,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export const concepts: Concept[] = [
  {
    title: 'Grove & Stone Landscaping',
    industry: 'Home Services',
    description:
      'A modern service site for a landscaping company, built to capture leads and stand out in a crowded local market.',
    href: 'https://concept-landscaping.vercel.app/',
    image: '/concept-landscaping.webp',
    imageWidth: 1600,
    imageHeight: 765,
    highlights: ['Service pages', 'Quote request form', 'Project gallery'],
  },
  {
    title: 'Puerto Rican Deli',
    industry: 'Food & Beverage',
    description:
      'A warm, inviting site for a Puerto Rican deli with a full menu, location info, and a brand that brings people through the door.',
    href: 'https://pan-sobao-2.vercel.app/',
    image: '/concept-deli.webp',
    imageWidth: 1600,
    imageHeight: 761,
    highlights: ['Full menu', 'Brand identity', 'Location & hours'],
  },
  {
    title: 'NYX Barber Shop',
    industry: 'Health & Beauty',
    description:
      'A clean, modern barbershop site that shows off services and lets clients book online.',
    href: 'https://concept-barber.vercel.app/',
    image: '/concept-barber.webp',
    imageWidth: 1600,
    imageHeight: 760,
    highlights: ['Service & pricing menu', 'Online booking', 'Gallery'],
  },
  {
    title: 'Ashford & Vane Law Group',
    industry: 'Legal',
    description:
      'A polished, trust-first law firm site with clear practice areas and an intake form built for serious inquiries.',
    href: 'https://concept-law-eight.vercel.app/',
    image: '/concept-law.webp',
    imageWidth: 1600,
    imageHeight: 761,
    highlights: ['Practice areas', 'Attorney bio', 'Intake form'],
  },
]
