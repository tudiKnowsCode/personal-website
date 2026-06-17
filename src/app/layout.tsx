import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const BASE_URL = 'https://www.tudino.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Tudino Web Development | Premium Websites for Ambitious Businesses',
    template: '%s | Tudino Web Development',
  },
  description:
    'Tudino Web Development builds visually stunning, high-performance websites that turn visitors into clients. Custom web design & development based in Manchester, CT.',
  keywords: [
    'web development',
    'web design',
    'custom website',
    'small business website',
    'freelance web developer',
    'Connecticut web developer',
    'Manchester CT web design',
    'Next.js developer',
    'website redesign',
    'conversion optimized website',
    'Tudino Web Development',
    'Nick Tudino',
  ],
  authors: [{ name: 'Nicholas Tudino', url: BASE_URL }],
  creator: 'Nicholas Tudino',
  publisher: 'Tudino Web Development',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Tudino Web Development',
    title: 'Tudino Web Development | Premium Websites for Ambitious Businesses',
    description:
      'I build visually stunning, conversion-focused websites that make your business impossible to ignore. Every pixel crafted for impact.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tudino Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tudino Web Development | Premium Websites for Ambitious Businesses',
    description:
      'I build visually stunning, conversion-focused websites that make your business impossible to ignore.',
    images: ['/og-image.png'],
    creator: '@tudinodev',
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  category: 'technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`noise ${inter.variable}`}>

      <body className="mesh-gradient min-h-screen">
        {children}
      </body>
    </html>
  )
}
