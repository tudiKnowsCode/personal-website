/** Inline SVG version of the <T> logo. On navy backgrounds the square gets a hairline so it doesn't vanish. */
export function LogoMark({ className = 'h-9 w-9', onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" fill="#0F1A2E" stroke={onDark ? '#2E3E60' : 'none'} strokeWidth="1.5" />
      <g fill="none" stroke="#F3F0E9" strokeWidth="1.9" strokeLinejoin="miter">
        <path d="M9 8 3.2 16.2 9 24.4" />
        <path d="M23 8l5.8 8.2L23 24.4" />
      </g>
      <path d="M10.9 11.4h10.2v2.5h-3.9v9.6h-2.4v-9.6h-3.9z" fill="#F3F0E9" />
    </svg>
  )
}

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark onDark={onDark} />
      <span className={`text-[17px] font-bold leading-none ${onDark ? 'text-white' : 'text-navy'}`}>
        Tudino Web Development
      </span>
    </span>
  )
}
