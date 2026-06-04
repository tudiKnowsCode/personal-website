'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'

const WORDS = ['Converts', 'Captivates', 'Dominates', 'Elevates', 'Performs']

function TypingWord() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[index]
    let timeout: NodeJS.Timeout

    if (!deleting) {
      if (displayed.length < word.length) {
        timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % WORDS.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, index])

  return (
    <>
      <span className="gradient-text">{displayed}</span>
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.5, 0.5, 1] }}
        style={{ color: '#4f8ef7', WebkitTextFillColor: '#4f8ef7' }}
      >|</motion.span>
    </>
  )
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isMobile = window.innerWidth < 768
    const COUNT = isMobile ? 40 : 65
    const CONNECT_DIST = 110

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1
      const w = window.innerWidth
      const h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
    }
    setSize()

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number }
    const W = () => window.innerWidth
    const H = () => window.innerHeight

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let animId: number
    const animate = () => {
      const w = W()
      const h = H()
      ctx.clearRect(0, 0, w, h)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        else if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        else if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(79,142,247,${p.alpha})`
        ctx.fill()
      }

      ctx.lineWidth = 0.5
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          if (dist2 < CONNECT_DIST * CONNECT_DIST) {
            const dist = Math.sqrt(dist2)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(79,142,247,${0.08 * (1 - dist / CONNECT_DIST)})`
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    let resizeTimer: ReturnType<typeof setTimeout>
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(setSize, 150)
    }
    window.addEventListener('resize', onResize, { passive: true })

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6, willChange: 'transform' }}
    />
  )
}


export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-pattern">
      <ParticleField />

      {/* Ambient orbs */}
      <div className="orb w-[600px] h-[600px] bg-[#4f8ef7] top-[-200px] left-[-200px] opacity-[0.08]" />
      <div className="orb w-[500px] h-[500px] bg-[#8b5cf6] bottom-[-150px] right-[-150px] opacity-[0.08]" />
      <div className="orb w-[300px] h-[300px] bg-[#06b6d4] top-[40%] left-[60%] opacity-[0.05]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-32">


        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-4"
        >
          A Website That
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 h-[1.1em]"
        >
          <TypingWord />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-lg md:text-xl text-[#8888aa] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We build visually stunning, conversion-focused websites that make your business
          impossible to ignore. Every pixel crafted for impact. Every interaction engineered for results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 justify-center">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
          <a href="#work" className="btn-secondary inline-flex items-center gap-2 justify-center">
            View Our Work
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4f8ef7]"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-[#8888aa]">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
