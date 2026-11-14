const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

/**
 * `next dev` and `next build` write to separate folders, so running a production build
 * while the dev server is up can't overwrite the dev server's compiled chunks
 * (which shows up as "Cannot find module './948.js'"-style errors).
 */
module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
    images: {
      formats: ['image/avif', 'image/webp'],
    },
  }
  return nextConfig
}
