import { useMemo, useState } from 'react'

const colors = {
  manual: '#c93b2f',
  ai: '#1f6fb2',
  grid: '#dfe7ef',
  axis: '#cfd7df',
  text: '#5d6f84',
}

function makePath(points, width, height, pad) {
  const step = (width - pad.left - pad.right) / (points.length - 1)
  return points
    .map((point, index) => {
      const x = pad.left + index * step
      const y = pad.top + ((110 - point.value) / 110) * (height - pad.top - pad.bottom)
      return { ...point, x, y }
    })
}

export default function BenchmarkChart({ chart }) {
  const [activePoint, setActivePoint] = useState(null)
  const width = 1120
  const height = 560
  const pad = { top: 74, right: 44, bottom: 72, left: 72 }

  const prepared = useMemo(() => {
    if (!chart) return null
    return {
      manual: makePath(chart.series.manual, width, height, pad),
      ai: makePath(chart.series.ai, width, height, pad),
    }
  }, [chart])

  if (!chart || !prepared) return null

  const yTicks = [0, 20, 40, 60, 80, 100, 110]
  const plotBottom = height - pad.bottom
  const toLine = points => points.map(point => `${point.x},${point.y}`).join(' ')
  const toArea = points => `${pad.left},${plotBottom} ${toLine(points)} ${width - pad.right},${plotBottom}`
  const xTicks = chart.labels.map((label, index) => {
    const x = pad.left + index * ((width - pad.left - pad.right) / (chart.labels.length - 1))
    return { label, x }
  })

  return (
    <div className="animate-reveal bg-surface border border-border rounded-lg shadow-md overflow-hidden">
      <div className="w-full">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto block"
          role="img"
          aria-label={chart.alt}
        >
          <defs>
            <linearGradient id={`${chart.id}-manualFill`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={colors.manual} stopOpacity="0.22" />
              <stop offset="100%" stopColor={colors.manual} stopOpacity="0.08" />
            </linearGradient>
            <linearGradient id={`${chart.id}-aiFill`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={colors.ai} stopOpacity="0.22" />
              <stop offset="100%" stopColor={colors.ai} stopOpacity="0.08" />
            </linearGradient>
          </defs>

          <rect width={width} height={height} fill="#fff" />

          <g className="font-body text-[13px] sm:text-[15px] font-semibold">
            <circle cx="36" cy="30" r="8" fill={colors.manual} />
            <text x="54" y="36" fill={colors.manual}>MANUAL PHASE</text>
            <circle cx="250" cy="30" r="8" fill={colors.ai} />
            <text x="268" y="36" fill={colors.ai}>AI AGENT PHASE</text>
            <rect x="450" y="15" width="210" height="30" rx="6" fill="#123f66" />
            <text x="468" y="36" fill="#fff">□ AI AGENT LAUNCH</text>
          </g>

          {yTicks.map(tick => {
            const y = pad.top + ((110 - tick) / 110) * (height - pad.top - pad.bottom)
            return (
              <g key={tick}>
                <line x1={pad.left} x2={width - pad.right} y1={y} y2={y} stroke={colors.grid} />
                <text x={pad.left - 28} y={y + 5} textAnchor="end" fill={colors.text} className="text-[12px] sm:text-[14px]">
                  {tick}%
                </text>
              </g>
            )
          })}

          {xTicks.map(({ label, x }, index) => (
            <g key={label}>
              <line x1={x} x2={x} y1={pad.top} y2={plotBottom} stroke={colors.grid} />
              <text
                x={x}
                y={height - 34}
                textAnchor="middle"
                fill={colors.text}
                className={`text-[11px] sm:text-[14px] ${chart.labels.length > 8 && index % 2 === 1 ? 'hidden sm:block' : ''}`}
              >
                {label}
              </text>
            </g>
          ))}

          <line x1={pad.left} x2={width - pad.right} y1={plotBottom} y2={plotBottom} stroke={colors.axis} />
          <line x1={pad.left} x2={pad.left} y1={pad.top} y2={plotBottom} stroke={colors.axis} />

          <polygon points={toArea(prepared.ai)} fill={`url(#${chart.id}-aiFill)`} />
          <polygon points={toArea(prepared.manual)} fill={`url(#${chart.id}-manualFill)`} />
          <polyline points={toLine(prepared.ai)} fill="none" stroke={colors.ai} strokeWidth="3" strokeLinejoin="round" />
          <polyline points={toLine(prepared.manual)} fill="none" stroke={colors.manual} strokeWidth="3" strokeLinejoin="round" />

          {[...prepared.manual.map(p => ({ ...p, type: 'manual' })), ...prepared.ai.map(p => ({ ...p, type: 'ai' }))].map(point => (
            <g
              key={`${point.type}-${point.label}`}
              onMouseEnter={() => setActivePoint(point)}
              onMouseLeave={() => setActivePoint(null)}
              onFocus={() => setActivePoint(point)}
              onBlur={() => setActivePoint(null)}
              tabIndex="0"
              className="cursor-pointer outline-none"
            >
              <circle cx={point.x} cy={point.y} r="9" fill={point.type === 'manual' ? colors.manual : colors.ai} stroke="#fff" strokeWidth="3" />
              <circle cx={point.x} cy={point.y} r="18" fill="transparent" />
            </g>
          ))}

          {chart.annotations?.map(note => (
            <g key={note.title}>
              <rect
                x={note.x}
                y={note.y}
                width={note.width}
                height="46"
                rx="6"
                fill={note.type === 'manual' ? '#fff1ef' : '#e9f5ff'}
                stroke={note.type === 'manual' ? colors.manual : colors.ai}
              />
              <text x={note.x + 12} y={note.y + 19} fill={note.type === 'manual' ? colors.manual : colors.ai} className="text-[15px] font-bold">
                {note.title}
              </text>
              <text x={note.x + 12} y={note.y + 37} fill={colors.text} className="text-[13px]">
                {note.subtitle}
              </text>
            </g>
          ))}

          {activePoint && (
            <g>
              <line x1={activePoint.x} x2={activePoint.x} y1={pad.top} y2={plotBottom} stroke="#94a3b8" strokeDasharray="5 5" />
              <rect
                x={Math.min(activePoint.x + 14, width - 260)}
                y={Math.max(activePoint.y - 62, 58)}
                width="230"
                height="54"
                rx="8"
                fill="#fff"
                stroke={activePoint.type === 'manual' ? colors.manual : colors.ai}
                filter="drop-shadow(0 10px 18px rgba(15,23,42,0.12))"
              />
              <text x={Math.min(activePoint.x + 30, width - 244)} y={Math.max(activePoint.y - 36, 84)} fill="#0f172a" className="text-[14px] font-bold">
                {activePoint.label}
              </text>
              <text x={Math.min(activePoint.x + 30, width - 244)} y={Math.max(activePoint.y - 15, 105)} fill={activePoint.type === 'manual' ? colors.manual : colors.ai} className="text-[13px] font-semibold">
                {activePoint.name}: {activePoint.value}%
              </text>
            </g>
          )}
        </svg>
      </div>
    </div>
  )
}
