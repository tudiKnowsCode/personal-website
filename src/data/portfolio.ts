import { Car, BookOpen, Home, Dumbbell, KeyRound, Leaf, Scale, Croissant, Scissors, type LucideIcon } from 'lucide-react'

export type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  displayUrl: string
  href: string
  icon: LucideIcon
  image: string
  /** Shown in the home page "My Work" section. Keep this to 4 so the 2x2 grid stays balanced. */
  featured?: boolean
}

export type Concept = {
  title: string
  category: string
  description: string
  industry: string
  tags: string[]
  href: string
  image: string
  icon: LucideIcon
  highlights: string[]
}

// Client work, newest first. The full list appears on /work.
export const projects: Project[] = [
  {
    title: 'Realty by Storm',
    category: 'Residential Real Estate',
    description: 'A seller-focused site for a Connecticut REALTOR® with Carbutti & Co. It leads with 109 closed sales and a 5.0 Google rating, walks homeowners through a clear four-step selling process, and turns visitors into listing calls.',
    tags: ['Web Design', 'Lead Gen', 'Real Estate'],
    displayUrl: 'realtybystorm.com',
    href: 'https://www.realtybystorm.com/',
    icon: KeyRound,
    image: '/storm.png',
    featured: true,
  },
  {
    title: "Tony's Imported Auto Service",
    category: 'European Auto Repair',
    description: 'A credibility-first site for an import specialist serving Manchester since 1979. Leads with the makes they service, backs it up with real shop photos and reviews, and turns visitors into booked appointments.',
    tags: ['Web Design', 'Local SEO', 'Booking'],
    displayUrl: 'tonysimportedauto.com',
    href: 'https://tonysimportedauto.com',
    icon: Car,
    image: '/tonys.png',
    featured: true,
  },
  {
    title: 'Tudino Learning',
    category: 'Education & Tutoring',
    description: 'A clean, trust-building site for a private tutor. Showcases subjects, student success stories, and makes it effortless for parents to book sessions online.',
    tags: ['Web Design', 'Booking', 'SEO'],
    displayUrl: 'tudinolearning.com',
    href: 'https://tudinolearning.com',
    icon: BookOpen,
    image: '/alyssa.png',
    featured: true,
  },
  {
    title: 'Sharon Tudino Real Estate',
    category: 'Real Estate',
    description: 'A polished, professional website for a real estate agent. Highlights property listings, builds trust with an agent bio, and drives inquiries with a streamlined contact experience.',
    tags: ['Web Design', 'Real Estate', 'SEO'],
    displayUrl: 'sharon-tudino-realty.com',
    href: 'https://sharon-tudino-realty.vercel.app/',
    icon: Home,
    image: '/sharon.png',
  },
  {
    title: 'Dogpound Strength & Fitness',
    category: 'Gym & Personal Training',
    description: 'A bold, high-energy website for a personal training brand built to convert visitors into members. Features class schedules, trainer profiles, and a seamless online inquiry flow.',
    tags: ['Web Design', 'Mobile-First', 'Branding'],
    displayUrl: 'www.dogpoundfit.com',
    href: 'https://www.dogpoundfit.com',
    icon: Dumbbell,
    image: '/jen.png',
    featured: true,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export const concepts: Concept[] = [
  {
    title: 'Grove & Stone Landscaping',
    category: 'Landscaping & Lawn Care',
    description: 'A modern service site for a local landscaping company, built to capture leads, showcase past work, and stand out in a crowded local market.',
    industry: 'Home Services',
    tags: ['Web Design', 'Lead Gen', 'Local SEO'],
    href: 'https://concept-landscaping.vercel.app/',
    image: '/concept-landscaping.png',
    icon: Leaf,
    highlights: ['Service pages', 'Quote request form', 'Project gallery', 'Google Maps integration'],
  },
  {
    title: 'Puerto Rican Deli',
    category: 'Deli & Sandwich Shop',
    description: 'A warm, inviting website for a local deli. Full menu display, location info, and a brand presence that brings customers through the door.',
    industry: 'Food & Beverage',
    tags: ['Web Design', 'Branding', 'Menu Display'],
    href: 'https://pan-sobao-2.vercel.app/',
    image: '/concept-deli.png',
    icon: Croissant,
    highlights: ['Full menu display', 'Brand identity design', 'Location & hours', 'Mobile-first'],
  },
  {
    title: 'NYX Barber Shop',
    category: 'Barbershop & Grooming',
    description: 'A clean, modern site for a local barbershop. Showcases services, lets clients book online, and builds the kind of brand presence that keeps chairs full.',
    industry: 'Health & Beauty',
    tags: ['Web Design', 'Booking', 'Local SEO'],
    href: 'https://concept-barber.vercel.app/',
    image: '/concept-barber.png',
    icon: Scissors,
    highlights: ['Service & pricing menu', 'Online booking', 'Barber profiles', 'Gallery'],
  },
  {
    title: 'Ashford & Vane Law Group',
    category: 'Legal Services',
    description: 'A polished, trust-first website for a law firm. Clear practice areas, attorney profiles, and a contact experience built to convert serious inquiries.',
    industry: 'Legal',
    tags: ['Web Design', 'Trust-Building', 'Professional'],
    href: 'https://concept-law-eight.vercel.app/',
    image: '/concept-law.png',
    icon: Scale,
    highlights: ['Practice areas', 'Attorney bio', 'Contact & intake form', 'Mobile-optimized'],
  },
]
