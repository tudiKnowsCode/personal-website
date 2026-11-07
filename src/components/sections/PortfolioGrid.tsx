'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { ProjectCard } from './Work'

export default function PortfolioGrid() {
  return (
    <section id="work" className="relative py-32 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-[#4f8ef7] top-1/3 right-[-200px] opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label mb-4 block"
          >
            Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-5"
          >
            All Client <span className="gradient-text">Work</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-xl mx-auto"
          >
            Every site I&apos;ve built for real businesses, live and in use today.
          </motion.p>
        </div>

        {/* Flex-wrap keeps an odd final card centered instead of stranded on the left */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <div key={p.title} className="w-full md:w-[calc(50%-12px)]">
              <ProjectCard project={p} index={i % 2} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
