'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Smartphone, Zap, BarChart3, Palette, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Custom Web Design',
    description: 'Bespoke designs built from scratch that reflect your brand identity and captivate your audience from the first second.',
    color: '#4f8ef7',
    gradient: 'from-[#4f8ef7]/20 to-transparent',
  },
  {
    icon: Zap,
    title: 'High-Performance Dev',
    description: 'Lightning-fast websites engineered with modern frameworks. Perfect Lighthouse scores, sub-second load times.',
    color: '#8b5cf6',
    gradient: 'from-[#8b5cf6]/20 to-transparent',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Responsive',
    description: 'Every device, every screen size: pixel-perfect. Your site looks and performs flawlessly everywhere.',
    color: '#06b6d4',
    gradient: 'from-[#06b6d4]/20 to-transparent',
  },
  {
    icon: BarChart3,
    title: 'Conversion Optimization',
    description: 'Strategy-driven layouts, CTAs, and UX flows designed to turn visitors into paying customers.',
    color: '#10b981',
    gradient: 'from-[#10b981]/20 to-transparent',
  },
  {
    icon: Palette,
    title: 'Brand & Visual Identity',
    description: 'Complete brand systems including logo, color palette, and typography that make you unforgettable in your market.',
    color: '#f59e0b',
    gradient: 'from-[#f59e0b]/20 to-transparent',
  },
  {
    icon: ShieldCheck,
    title: 'Maintenance & Support',
    description: 'Ongoing care packages to keep your site secure, updated, and performing at peak, so you can focus on business.',
    color: '#ec4899',
    gradient: 'from-[#ec4899]/20 to-transparent',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card glow-border p-8 group cursor-default relative overflow-hidden transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-1"
    >
      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`}
      />

      <div className="relative z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${service.color}18` }}
        >
          <Icon size={22} style={{ color: service.color }} strokeWidth={1.8} />
        </div>

        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-[14px] text-[#8888aa] leading-relaxed group-hover:text-[#aaaacc] transition-colors">
          {service.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-4 block"
          >
            What We Do
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            Everything Your Website{' '}
            <span className="gradient-text">Needs to Win</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-xl mx-auto"
          >
            End-to-end web solutions crafted with precision, purpose, and passion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
