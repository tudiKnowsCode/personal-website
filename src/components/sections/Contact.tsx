'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MessageSquare, Phone, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@tudino.dev', color: '#4f8ef7' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 000-0000', color: '#8b5cf6' },
  { icon: MessageSquare, label: 'Response time', value: 'Within 24 hours', color: '#06b6d4' },
]

const budgets = ['Under $3k', '$3k – $7k', '$7k – $15k', '$15k+']
const projectTypes = ['New Website', 'Redesign', 'E-Commerce', 'Web App', 'Branding', 'Other']

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="orb w-[600px] h-[600px] bg-[#4f8ef7] bottom-[-300px] left-1/2 -translate-x-1/2 opacity-[0.06]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-4 block"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-5"
          >
            Ready to Build{' '}
            <span className="gradient-text">Something Great?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-xl mx-auto"
          >
            Tell us about your project. We&apos;ll respond within 24 hours with a tailored proposal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="glass-card p-6 flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}18` }}
                  >
                    <Icon size={18} style={{ color: item.color }} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-[12px] text-[#8888aa] font-medium mb-0.5">{item.label}</div>
                    <div className="text-[15px] font-semibold text-white">{item.value}</div>
                  </div>
                </div>
              )
            })}

            <div className="glass-card p-6">
              <div className="text-[14px] font-bold text-white mb-3">Why Tudino Web Development?</div>
              {[
                'Custom designs — no templates, ever',
                'Fixed-price quotes, no surprises',
                'Direct access to your developer',
                '30-day post-launch support included',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4f8ef7] mt-2 flex-shrink-0" />
                  <span className="text-[13px] text-[#8888aa]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={56} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-[#8888aa]">
                    Thanks for reaching out. We&apos;ll review your project and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[12px] font-semibold text-[#8888aa] mb-2 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder-[#555577] focus:outline-none focus:border-[#4f8ef7]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-semibold text-[#8888aa] mb-2 uppercase tracking-wider">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder-[#555577] focus:outline-none focus:border-[#4f8ef7]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-[#8888aa] mb-2 uppercase tracking-wider">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder-[#555577] focus:outline-none focus:border-[#4f8ef7]/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-[#8888aa] mb-2 uppercase tracking-wider">Project Type</label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setForm({ ...form, projectType: type })}
                          className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                            form.projectType === type
                              ? 'bg-[#4f8ef7]/20 border-[#4f8ef7]/50 text-[#4f8ef7]'
                              : 'border-white/[0.08] text-[#8888aa] hover:border-white/20'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-[#8888aa] mb-2 uppercase tracking-wider">Budget Range</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setForm({ ...form, budget: b })}
                          className={`text-[12px] font-semibold px-3 py-1.5 rounded-lg border transition-all ${
                            form.budget === b
                              ? 'bg-[#8b5cf6]/20 border-[#8b5cf6]/50 text-[#8b5cf6]'
                              : 'border-white/[0.08] text-[#8888aa] hover:border-white/20'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-[#8888aa] mb-2 uppercase tracking-wider">Tell Me About Your Project *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What are you building? What problems need solving? What does success look like for you?"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-[14px] placeholder-[#555577] focus:outline-none focus:border-[#4f8ef7]/50 transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <span className="relative z-10">Send My Project Brief</span>
                    <Send size={15} className="relative z-10" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
