'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Dumbbell, BookOpen } from 'lucide-react'

const projects = [
  {
    title: 'Dogpound Strength & Fitness',
    category: 'Gym & Personal Training',
    description: 'A bold, high-energy website for a personal training brand built to convert visitors into members. Features class schedules, trainer profiles, and a seamless online inquiry flow.',
    tags: ['Web Design', 'Mobile-First', 'Branding'],
    color: '#f97316',
    gradient: 'from-[#f97316] to-[#ef4444]',
    url: 'www.dogpoundfit.com',
    icon: Dumbbell,
    mockLayout: 'gym',
  },
  {
    title: 'Tudino Learning',
    category: 'Education & Tutoring',
    description: 'A clean, trust-building site for a private tutor. Showcases subjects, student success stories, and makes it effortless for parents to book sessions online.',
    tags: ['Web Design', 'Booking', 'SEO'],
    color: '#4f8ef7',
    gradient: 'from-[#4f8ef7] to-[#8b5cf6]',
    url: 'tudinolearning.com/',
    icon: BookOpen,
    mockLayout: 'tutor',
  },
]

function GymMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 pt-8 flex flex-col overflow-hidden">
      {/* Hero bar */}
      <div className="w-full h-20 flex items-center justify-center relative" style={{ background: `${color}22` }}>
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${color}30, transparent)` }} />
        <div className="w-24 h-4 rounded bg-white/30" />
        <div className="absolute right-4 flex gap-2">
          <div className="w-12 h-5 rounded" style={{ background: `${color}60` }} />
        </div>
      </div>
      {/* Content rows */}
      <div className="flex gap-2 p-3 flex-1">
        <div className="flex-1 rounded-lg flex flex-col gap-2 p-2" style={{ background: `${color}10` }}>
          <div className="w-full h-2.5 rounded bg-white/20" />
          <div className="w-3/4 h-2 rounded bg-white/10" />
          <div className="w-1/2 h-2 rounded bg-white/10" />
          <div className="mt-2 w-16 h-5 rounded" style={{ background: `${color}50` }} />
        </div>
        <div className="flex-1 rounded-lg flex flex-col gap-2 p-2" style={{ background: `${color}10` }}>
          <div className="w-full h-2.5 rounded bg-white/20" />
          <div className="w-2/3 h-2 rounded bg-white/10" />
          <div className="w-1/2 h-2 rounded bg-white/10" />
          <div className="mt-2 w-16 h-5 rounded" style={{ background: `${color}50` }} />
        </div>
      </div>
    </div>
  )
}

function TutorMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 pt-8 flex flex-col overflow-hidden">
      {/* Nav */}
      <div className="w-full h-8 flex items-center px-4 gap-3" style={{ background: `${color}10` }}>
        <div className="w-16 h-2.5 rounded bg-white/30" />
        <div className="flex-1" />
        {[1, 2, 3].map(n => <div key={n} className="w-10 h-1.5 rounded bg-white/15" />)}
        <div className="w-12 h-4 rounded" style={{ background: `${color}50` }} />
      </div>
      {/* Two-col layout */}
      <div className="flex gap-3 p-3 flex-1">
        <div className="flex-1 flex flex-col gap-2">
          <div className="w-3/4 h-3 rounded bg-white/30" />
          <div className="w-full h-2 rounded bg-white/15" />
          <div className="w-2/3 h-2 rounded bg-white/15" />
          <div className="mt-1 flex gap-2">
            <div className="w-14 h-5 rounded" style={{ background: `${color}60` }} />
            <div className="w-14 h-5 rounded bg-white/10" />
          </div>
        </div>
        <div className="w-24 rounded-lg" style={{ background: `${color}20` }} />
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = project.icon

  return (
    <motion.a
      ref={ref}
      href={`https://${project.url}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card overflow-hidden group cursor-pointer hover:-translate-y-1 transition-all duration-300 block"
    >
      {/* Mock browser window */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#0d0d1a] flex items-center px-3 gap-1.5 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-3 h-4 rounded bg-[#1a1a2e] flex items-center px-2">
            <span className="text-[9px] text-[#555577] font-mono truncate">{project.url}</span>
          </div>
        </div>

        {/* Gradient backdrop */}
        <div className={`absolute inset-0 pt-8 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

        {/* Custom mockup layout */}
        {project.mockLayout === 'gym'
          ? <GymMockup color={project.color} />
          : <TutorMockup color={project.color} />
        }

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#07070f]/85 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-8">
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
      <div className="orb w-[400px] h-[400px] bg-[#f97316] top-1/2 right-[-200px] opacity-[0.04]" />

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
            Every project is built with care, purpose, and a relentless focus on what matters — growing your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
