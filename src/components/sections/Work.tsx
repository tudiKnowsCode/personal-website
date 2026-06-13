'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, Dumbbell, BookOpen, Home } from 'lucide-react'

const projects = [
  {
    title: 'Dogpound Strength & Fitness',
    category: 'Gym & Personal Training',
    description: 'A bold, high-energy website for a personal training brand built to convert visitors into members. Features class schedules, trainer profiles, and a seamless online inquiry flow.',
    tags: ['Web Design', 'Mobile-First', 'Branding'],
    color: '#e11d48',
    gradient: 'from-[#e11d48] to-[#9f1239]',
    displayUrl: 'www.dogpoundfit.com',
    href: 'https://www.dogpoundfit.com',
    icon: Dumbbell,
    image: '/jen.png',
    underConstruction: false,
  },
  {
    title: 'Tudino Learning',
    category: 'Education & Tutoring',
    description: 'A clean, trust-building site for a private tutor. Showcases subjects, student success stories, and makes it effortless for parents to book sessions online.',
    tags: ['Web Design', 'Booking', 'SEO'],
    color: '#4f8ef7',
    gradient: 'from-[#4f8ef7] to-[#8b5cf6]',
    displayUrl: 'tudinolearning.com',
    href: 'https://alyssa-website-new.vercel.app/',
    icon: BookOpen,
    image: '/alyssa.png',
    underConstruction: true,
  },
  {
    title: 'Sharon Tudino Real Estate',
    category: 'Real Estate',
    description: 'A polished, professional website for a real estate agent. Highlights property listings, builds trust with an agent bio, and drives inquiries with a streamlined contact experience.',
    tags: ['Web Design', 'Real Estate', 'SEO'],
    color: '#d97706',
    gradient: 'from-[#d97706] to-[#92400e]',
    displayUrl: 'sharon-tudino-realty.com',
    href: 'https://sharon-tudino-realty.vercel.app/',
    icon: Home,
    image: '/sharon.png',
    underConstruction: false,
  },
]

function SitePreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-x-0 bottom-0 top-8 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

function UnderConstructionOverlay() {
  const label = '⚠ UNDER CONSTRUCTION'
  return (
    <div className="absolute inset-x-0 bottom-0 top-8 z-20 pointer-events-none flex items-center justify-center overflow-hidden">
      <div
        className="w-[160%] py-2.5 flex items-center gap-8 flex-shrink-0"
        style={{
          background: '#FACC15',
          transform: 'rotate(-12deg)',
          boxShadow: '0 6px 24px rgba(0,0,0,0.5)',
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-black font-black text-[11px] tracking-[0.2em] uppercase whitespace-nowrap flex-shrink-0"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

type Project = typeof projects[0]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = project.icon

  return (
    <motion.a
      ref={ref}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card overflow-hidden group cursor-pointer transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-1 block"
    >
      {/* Mock browser window */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#0d0d1a] flex items-center px-3 gap-1.5 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-3 h-4 rounded bg-[#1a1a2e] flex items-center px-2">
            <span className="text-[9px] text-[#555577] font-mono truncate">{project.displayUrl}</span>
          </div>
        </div>

        {/* Site preview image */}
        <SitePreview src={project.image} alt={project.title} />

        {/* Under construction overlay */}
        {project.underConstruction && <UnderConstructionOverlay />}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#07070f]/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-8 z-30">
          <div className="flex items-center gap-2 glass-card px-4 py-2 text-sm font-semibold text-white">
            <ExternalLink size={14} />
            View Project
          </div>
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: `${project.color}20` }}>
            <Icon size={14} style={{ color: project.color }} strokeWidth={2} />
          </div>
          <div className="text-[11px] font-bold tracking-widest uppercase" style={{ color: project.color }}>
            {project.category}
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-3">{project.title}</h3>
        <p className="text-[13px] text-[#8888aa] leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-2.5 py-1 rounded-lg"
              style={{ background: `${project.color}15`, color: project.color }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function Work() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#4f8ef7] top-1/2 right-[-200px] opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-4 block"
          >
            Our Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            Real Clients,{' '}
            <span className="gradient-text">Real Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-xl mx-auto"
          >
            Every project is built with care, purpose, and a relentless focus on what matters: growing your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* CTA below portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-[#8888aa] mb-4 text-sm">Your business could be next.</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            <span className="relative z-10">Start Your Project</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
