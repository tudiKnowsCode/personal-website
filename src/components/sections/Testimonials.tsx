'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, Dumbbell, BookOpen } from 'lucide-react'

const testimonials = [
  {
    quote: "Working with Nick was seamless from start to finish. He understood the energy of our brand immediately and built a site that actually represents who we are. Our new members consistently mention they found us online — the site does the selling for us.",
    name: "Dogpound Strength & Fitness",
    role: "Gym & Personal Training",
    icon: Dumbbell,
    color: '#f97316',
  },
  {
    quote: "I needed a site that would make parents feel confident booking with me. Nick delivered exactly that — clean, professional, and easy to navigate. I had new inquiries within the first week of launch.",
    name: "Tudino Learning",
    role: "Private Tutoring",
    icon: BookOpen,
    color: '#4f8ef7',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="orb w-[500px] h-[500px] bg-[#8b5cf6] top-0 left-1/2 -translate-x-1/2 opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-4 block"
          >
            Client Love
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            What Clients{' '}
            <span className="gradient-text">Are Saying</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-xl mx-auto"
          >
            Every client gets treated like they&apos;re the only client.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-8 relative group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Star rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>

                <Quote size={28} className="mb-4 opacity-20" style={{ color: t.color }} />

                <p className="text-[15px] text-[#ccccdd] leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-white/[0.06]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: `${t.color}20` }}
                  >
                    <Icon size={18} style={{ color: t.color }} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold text-white">{t.name}</div>
                    <div className="text-[12px] text-[#8888aa]">{t.role}</div>
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${t.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
