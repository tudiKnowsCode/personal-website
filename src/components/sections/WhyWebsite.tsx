'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck, TrendingUp, Users, Clock, CheckCircle2, ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    icon: ShieldCheck,
    title: 'People judge you by it',
    description: 'Most people look up a business online before they ever call. A sharp, professional site tells them you\'re the real deal before you say a word.',
  },
  {
    icon: TrendingUp,
    title: 'It gets you found',
    description: 'Built right, your site shows up when locals search for what you do, putting you in front of people who are already looking to buy.',
  },
  {
    icon: Users,
    title: 'It does the selling for you',
    description: 'A good site answers questions, builds trust, and points people toward booking, all while you\'re busy doing the actual work.',
  },
  {
    icon: Clock,
    title: 'It works while you don\'t',
    description: 'Nights, weekends, holidays. Your site is out there earning attention and inquiries when you\'re off the clock.',
  },
]

const whatIDo = [
  'Custom design tailored to your brand, no templates',
  'SEO foundations built in from day one',
  'Mobile-first, fast-loading on every device',
  'Contact forms and booking flows that actually convert',
  'Ongoing support after launch. I\'m not gone once the site is live.',
]

export default function WhyWebsite() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const listRef = useRef(null)
  const listInView = useInView(listRef, { once: true, margin: '-60px' })

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[#4f8ef7] top-1/2 right-[-300px] opacity-[0.04]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-4 block"
          >
            Why It Matters
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            Your Business Deserves{' '}
            <span className="gradient-text">a Great Website</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-2xl mx-auto"
          >
            For a lot of businesses, the website is the first impression and the hardest-working employee. Here&apos;s why that matters, and how I make sure yours actually pulls its weight.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20 max-w-4xl mx-auto">
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card p-6 group transition-transform duration-300 [@media(hover:hover)]:hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#4f8ef7]/10">
                  <Icon size={20} className="text-[#4f8ef7]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[16px] font-bold text-white mb-2">{b.title}</h3>
                <p className="text-[13px] text-[#8888aa] leading-relaxed">{b.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* What I do panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={listRef}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={listInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label mb-4">What I Bring to the Table</div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Not just a website.{' '}
              <span className="gradient-text">A business tool.</span>
            </h3>
            <p className="text-[#8888aa] text-lg leading-relaxed mb-8">
              Anyone can slap together a site. I build websites that are fast, strategic, and designed to grow your business. Every decision is intentional and every detail is dialed in.
            </p>
            <ul className="space-y-4">
              {whatIDo.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={listInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-[#4f8ef7] mt-0.5 flex-shrink-0" />
                  <span className="text-[#ccccdd] text-[15px]">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={listInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card p-8 md:p-10"
          >
            <div className="text-[13px] text-[#8888aa] mb-2 uppercase tracking-widest font-semibold">Ready to get started?</div>
            <h4 className="text-2xl font-black text-white mb-4">Let&apos;s build something that works as hard as you do.</h4>
            <p className="text-[#8888aa] text-[14px] leading-relaxed mb-8">
              Whether you&apos;re starting from scratch or ready to replace a site you&apos;ve outgrown, I&apos;ll build you something that makes you proud and makes you money.
            </p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2 w-full justify-center">
              <span className="relative z-10">Start the Conversation</span>
              <ArrowUpRight size={16} className="relative z-10" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
