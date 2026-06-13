'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { CheckCircle2, Code2, Heart, Trophy } from 'lucide-react'

const highlights = [
  'Pixel-perfect execution on every project',
  'Strategic UX backed by real conversion data',
  'Transparent communication & fast turnarounds',
  'Ongoing support long after launch',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Decorative orb */}
      <div className="orb w-[400px] h-[400px] bg-[#8b5cf6] top-1/2 left-[-200px] opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glow ring behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4f8ef7] via-[#8b5cf6] to-[#06b6d4] opacity-20 blur-3xl scale-90" />

            <div className="relative glass-card p-3 rounded-3xl overflow-hidden">
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-[#4f8ef7] via-[#8b5cf6] to-[#06b6d4] opacity-40" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src="/headshot.png"
                  alt="Nick Tudino - Founder, Tudino Web Development"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/60 via-transparent to-transparent" />

                {/* Name tag overlay */}
                <div className="absolute bottom-5 left-5 right-5 glass-card px-5 py-4">
                  <div className="font-bold text-white text-lg">Nick Tudino</div>
                  <div className="text-[13px] text-[#4f8ef7] font-medium">Founder & Lead Developer</div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label mb-4">About Me</div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Built for founders who{' '}
              <span className="gradient-text">refuse to settle</span>
            </h2>

            <p className="text-[#8888aa] text-lg leading-relaxed mb-6">
              Hi, I&apos;m Nick, a developer and designer obsessed with building websites that
              actually move the needle. I started Tudino Web Development to help small businesses and
              entrepreneurs get the professional online presence they deserve, without the agency
              price tag or the runaround.
            </p>

            <p className="text-[#8888aa] text-lg leading-relaxed mb-10">
              Every client gets my full attention from first call to launch day. I care about
              your results the same way you do, because your success is how I build my reputation.
              No templates, no shortcuts, no handing you off to a junior. Just great work, done right.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-[#4f8ef7] mt-0.5 flex-shrink-0" />
                  <span className="text-[#ccccdd] text-[15px]">{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2 justify-center">
                <span className="relative z-10">Work With Me</span>
              </a>
              <a href="#work" className="btn-secondary inline-flex items-center gap-2 justify-center">
                See My Work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
