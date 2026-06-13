'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, ShieldCheck, TrendingUp, Users, Clock, Smartphone, CheckCircle2, ArrowUpRight } from 'lucide-react'

const benefits = [
  {
    icon: Globe,
    title: '24/7 Online Presence',
    description: 'Your website works while you sleep. Customers can find you, learn about you, and reach out at any hour, without you lifting a finger.',
    color: '#4f8ef7',
  },
  {
    icon: ShieldCheck,
    title: 'Instant Credibility',
    description: 'Over 75% of people judge a business\'s legitimacy by its website. A professional site signals that you\'re serious and worth trusting.',
    color: '#22c55e',
  },
  {
    icon: TrendingUp,
    title: 'Get Found on Google',
    description: 'A properly built site ranks in local search results, putting your business in front of people actively looking for what you offer.',
    color: '#f59e0b',
  },
  {
    icon: Users,
    title: 'Turn Visitors into Clients',
    description: 'With smart layout and clear calls to action, your site becomes a sales tool that converts curious visitors into paying customers.',
    color: '#8b5cf6',
  },
  {
    icon: Clock,
    title: 'Save Time on Repetitive Questions',
    description: 'Put your services, pricing, hours, and FAQs front and center. Spend less time answering the same questions and more time doing the work.',
    color: '#06b6d4',
  },
  {
    icon: Smartphone,
    title: 'Compete with Bigger Brands',
    description: 'A great website levels the playing field. You don\'t need a massive budget. You need the right design and the right developer.',
    color: '#e11d48',
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
            In 2024, your website is your most powerful business asset. Here&apos;s why it matters and how I make sure yours actually works for you.
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
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
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${b.color}18` }}
                >
                  <Icon size={20} style={{ color: b.color }} strokeWidth={1.8} />
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
