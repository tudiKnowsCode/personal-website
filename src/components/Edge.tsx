/**
 * Angled section divider. Place between two sections:
 * `from` is the color of the section above, `to` the section below.
 */
const colors = {
  white: '#FFFFFF',
  grey: '#EDEFF2',
  navy: '#0F1A2E',
  deep: '#0A1222',
} as const

export type EdgeColor = keyof typeof colors

type Props = {
  from: EdgeColor
  to: EdgeColor
  /** rise: the lower section climbs toward the right. fall: it climbs toward the left. */
  shape: 'rise' | 'fall'
}

export default function Edge({ from, to, shape }: Props) {
  const points = shape === 'rise' ? '0,100 100,0 100,100' : '0,0 100,100 0,100'
  return (
    <div aria-hidden="true" style={{ background: colors[from] }} className="-mb-px">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="block h-[clamp(36px,6vw,96px)] w-full">
        <polygon points={points} fill={colors[to]} />
      </svg>
    </div>
  )
}
