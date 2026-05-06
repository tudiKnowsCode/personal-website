import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tudino Web Development | Premium Web Experiences',
  description: 'We craft stunning, high-performance websites that turn visitors into clients. Premium web development tailored for ambitious businesses.',
  keywords: 'web development, website design, custom websites, business websites, web agency',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <body className="mesh-gradient min-h-screen">
        {children}
      </body>
    </html>
  )
}
