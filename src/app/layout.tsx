import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { site } from '@/data/site'
import './globals.css'

const archivo = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-archivo',
  axes: ['wdth'],
})

const defaultTitle = `Web Design in ${site.area} | ${site.name}`
const defaultDescription = `Websites that help small businesses get found on Google, earn trust and turn visitors into customers. Designed and built in Connecticut by ${site.owner}.`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: defaultDescription,
  authors: [{ name: site.ownerFullName, url: site.url }],
  creator: site.ownerFullName,
  publisher: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: site.name,
    title: defaultTitle,
    description: defaultDescription,
  },
  // Title/description fall back to the og: tags, which each page sets via pageMeta().
  twitter: { card: 'summary_large_image' },
  // Canonicals are set per page so a new page never accidentally points at the home page.
}

export const viewport: Viewport = {
  themeColor: '#0F1A2E',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-navy"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
