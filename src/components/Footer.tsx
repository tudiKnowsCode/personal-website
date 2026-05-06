'use client'

import { Zap, ArrowUpRight } from 'lucide-react'

const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
)

const links = {
  Services: ['Web Design', 'Development', 'E-Commerce', 'Branding', 'SEO'],
  Company: ['About', 'Work', 'Process', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#04040a]" />

      {/* CTA Banner */}
      <div className="relative border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="section-label mb-4 block">Let&apos;s Build Together</div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Your next chapter starts{' '}
            <span className="gradient-text">with a great website.</span>
          </h2>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            <span className="relative z-10">Start Your Project</span>
            <ArrowUpRight size={16} className="relative z-10" />
          </a>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4f8ef7] to-[#8b5cf6] flex items-center justify-center">
                <Zap size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-[15px] text-white">
                Tudino<span className="text-[#4f8ef7]">.</span>dev
              </span>
            </a>
            <p className="text-[13px] text-[#8888aa] leading-relaxed mb-6 max-w-[200px]">
              Premium web development for ambitious businesses.
            </p>
            <div className="flex gap-3">
              {[
                { icon: GithubIcon, href: '#' },
                { icon: LinkedinIcon, href: '#' },
                { icon: XIcon, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-8 h-8 glass-card flex items-center justify-center text-[#8888aa] hover:text-white transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="text-[12px] font-bold tracking-widest text-[#8888aa] uppercase mb-4">
                {category}
              </div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                      className="text-[13px] text-[#666688] hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-[12px] font-bold tracking-widest text-[#8888aa] uppercase mb-4">Contact</div>
            <div className="space-y-2.5">
              <div className="text-[13px] text-[#666688]">hello@tudino.dev</div>
              <div className="text-[13px] text-[#666688]">+1 (555) 000-0000</div>
              <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#555577]">
            &copy; {new Date().getFullYear()} Tudino Web Development. All rights reserved.
          </p>
          <p className="text-[12px] text-[#555577]">
            Crafted with precision in New York, NY
          </p>
        </div>
      </div>
    </footer>
  )
}
