'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, Leaf, Scale, Croissant, Sparkles, Scissors } from 'lucide-react'

const concepts = [
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

type Concept = typeof concepts[0]

function ConceptCard({ concept, index }: { concept: Concept; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = concept.icon

  return (
    <motion.a
      ref={ref}
      href={concept.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card overflow-hidden group cursor-pointer transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-1 block"
    >
      {/* Mock browser window */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#0d0d1a] flex items-center px-3 gap-1.5 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-3 h-4 rounded bg-[#1a1a2e] flex items-center px-2">
            <span className="text-[9px] text-[#555577] font-mono truncate">{concept.href.replace('https://', '')}</span>
          </div>
        </div>

        {/* Screenshot preview */}
        <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden">
          <Image
            src={concept.image}
            alt={concept.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#07070f]/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-8 z-30">
          <div className="flex items-center gap-2 glass-card px-4 py-2 text-sm font-semibold text-white">
            <ExternalLink size={14} />
            View Concept
          </div>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#4f8ef7]/10">
            <Icon size={14} className="text-[#4f8ef7]" strokeWidth={2} />
          </div>
          <div className="text-[11px] font-bold tracking-widest uppercase text-[#4f8ef7]">
            {concept.industry}
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">{concept.title}</h3>
        <p className="text-[13px] text-[#8888aa] leading-relaxed mb-4">{concept.description}</p>

        <div className="mb-5 space-y-1.5">
          {concept.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-[12px] text-[#666688]">
              <div className="w-1 h-1 rounded-full flex-shrink-0 bg-[#4f8ef7]" />
              {h}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {concept.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-[#4f8ef7]/10 text-[#4f8ef7]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function ConceptWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="concepts" className="relative py-32 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-[#8b5cf6] top-1/2 left-[-200px] opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-4 block"
          >
            Concept Designs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            What Your Industry{' '}
            <span className="gradient-text">Could Look Like</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-2xl mx-auto"
          >
            These are concept websites built to show what&apos;s possible across different industries.
            Each one is a fully functional demo, not a real business.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-14"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#8b5cf6]/30 bg-[#8b5cf6]/10 text-[12px] text-[#a78bfa] font-semibold">
            <Sparkles size={12} />
            Demonstration sites only, not real businesses
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {concepts.map((c, i) => (
            <ConceptCard key={c.title} concept={c} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-[#8888aa] mb-4 text-sm">Don&apos;t see your industry? Let&apos;s talk.</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            <span className="relative z-10">Get Your Custom Site</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
