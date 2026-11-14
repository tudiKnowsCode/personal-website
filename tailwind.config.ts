import type { Config } from 'tailwindcss'

// Navy (from the logo), white and cool greys. No accent color on purpose:
// emphasis comes from weight, size and underlines. Text colors pass WCAG AA on their backgrounds.
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F1A2E',
          deep: '#0A1222',
          mid: '#1B2A47',
          line: '#2E3E60',
          muted: '#B4BCCB',
        },
        grey: {
          bg: '#EDEFF2',
          line: '#D6DAE1',
          text: '#48505F',
          muted: '#5F6776',
        },
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        site: '76rem',
      },
    },
  },
  plugins: [],
}

export default config
