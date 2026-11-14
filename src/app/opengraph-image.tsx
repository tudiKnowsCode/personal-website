import { ImageResponse } from 'next/og'

// Share preview for every page (texts, LinkedIn, Facebook, iMessage, X).
export const alt = 'Tudino Web Development: websites for Connecticut small businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const runtime = 'edge'

async function loadFont(query: string) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${query}&display=swap`, {
    // An old UA makes Google Fonts return a TTF, which ImageResponse can read.
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30' },
  }).then((r) => r.text())
  const url = css.match(/src: url\((.+?)\)/)?.[1]
  if (!url) throw new Error('Font not found')
  return fetch(url).then((r) => r.arrayBuffer())
}

export default async function OpengraphImage() {
  // Never let a font hiccup break the image: fall back to the default font instead.
  const heavy = await loadFont('Archivo+Narrow:wght@700').catch(() => null)

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', background: '#0F1A2E' }}>
        {/* Diagonal white edge along the bottom, matching the site's section dividers */}
        <svg width="1200" height="110" viewBox="0 0 100 10" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: 0 }}>
          <polygon points="0,10 100,0 100,10" fill="#FFFFFF" />
        </svg>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '70px 80px',
            color: '#FFFFFF',
            fontFamily: heavy ? 'Heavy' : undefined,
          }}
        >
          <div style={{ fontSize: 30, color: '#B4BCCB', display: 'flex' }}>Tudino Web Development</div>
          <div
            style={{
              marginTop: 36,
              fontSize: 86,
              lineHeight: 0.95,
              textTransform: 'uppercase',
              display: 'flex',
              maxWidth: 1040,
            }}
          >
            Websites for small businesses
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: '#B4BCCB', display: 'flex' }}>
            Based in Connecticut, working with businesses anywhere.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: heavy ? [{ name: 'Heavy', data: heavy, weight: 700, style: 'normal' }] : [],
    },
  )
}
