'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Lightbulb, Code2, Rocket, Headphones } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'We start by understanding your business, your audience, and your goals. No templates — your strategy is built from scratch.',
    color: '#4f8ef7',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Design & Strategy',
    description: 'Wireframes, moodboards, and a complete design system crafted for your brand. You see and approve every element before a line of code is written.',
    color: '#8b5cf6',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development',
    description: 'Clean, modern code built with performance in mind. Daily updates keep you in the loop as your vision comes to life.',
    color: '#06b6d4',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Thorough QA, performance optimization, SEO setup, and a smooth launch. We handle everything so you can hit go with confidence.',
    color: '#10b981',
  },
  {
    number: '05',
    icon: Headphones,
    title: 'Ongoing Support',
    description: '30 days of post-launch support is included with every project — bug fixes, tweaks, and questions covered. After that, flexible care plans keep your site growing.',
    color: '#f59e0b',
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="relative py-32 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-[#06b6d4] bottom-[-200px] right-[-200px] opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-4 block"
          >
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            From Idea to{' '}
            <span className="gradient-text">Live in Weeks</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-xl mx-auto"
          >
            A proven, transparent process that keeps you in control and on schedule.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f8ef7]/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-6 group transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-1 relative"
                >
                  {/* Number */}
                  <div className="text-[11px] font-black tracking-widest text-[#333355] mb-4 font-mono">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${step.color}18` }}
                  >
                    <Icon size={18} style={{ color: step.color }} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-[15px] font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[13px] text-[#8888aa] leading-relaxed">{step.description}</p>

                  {/* Dot indicator on timeline */}
                  <div
                    className="hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#07070f] shadow-lg"
                    style={{ background: step.color }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
