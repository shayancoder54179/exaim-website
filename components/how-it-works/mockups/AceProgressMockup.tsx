'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function AceProgressMockup() {
  // SVG line chart points for 4-week upward trend
  const scores = [42, 55, 61, 74]
  const weeks = ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4']
  const chartW = 200
  const chartH = 80
  const padX = 30
  const padY = 10
  const plotW = chartW - padX * 2
  const plotH = chartH - padY * 2
  const minScore = 30
  const maxScore = 90

  const points = scores.map((s, i) => {
    const x = padX + (i / (scores.length - 1)) * plotW
    const y = padY + plotH - ((s - minScore) / (maxScore - minScore)) * plotH
    return { x, y }
  })

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      {/* Ace chat bubble */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-white" />
        </div>
        <div className="rounded-lg border border-brand-border bg-brand-bg p-3 flex-1">
          <p className="text-xs text-brand-text leading-relaxed">
            Great progress this week! Your osmosis scores have jumped 13%. Let&apos;s focus on
            <span className="text-indigo-400 font-medium"> cell transport</span> next — it&apos;s your weakest topic.
          </p>
        </div>
      </div>

      {/* Mini score chart */}
      <div className="rounded-lg border border-brand-border bg-brand-bg p-3">
        <p className="text-xs text-brand-muted mb-2">Score trend</p>
        <svg viewBox={`0 0 ${chartW} ${chartH}`} className="w-full h-auto">
          {/* Grid lines */}
          {[30, 50, 70, 90].map((v) => {
            const y = padY + plotH - ((v - minScore) / (maxScore - minScore)) * plotH
            return (
              <line
                key={v}
                x1={padX}
                y1={y}
                x2={chartW - padX}
                y2={y}
                className="stroke-brand-border"
                strokeWidth={0.5}
              />
            )
          })}

          {/* Line */}
          <path d={linePath} fill="none" className="stroke-indigo-500" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

          {/* Dots */}
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r={3} className="fill-indigo-500" />
          ))}

          {/* Labels */}
          {points.map((p, i) => (
            <text key={`label-${i}`} x={p.x} y={chartH - 1} textAnchor="middle" className="fill-brand-muted text-[8px]">
              {weeks[i]}
            </text>
          ))}

          {/* Score labels */}
          {points.map((p, i) => (
            <text key={`score-${i}`} x={p.x} y={p.y - 6} textAnchor="middle" className="fill-brand-text text-[8px] font-medium">
              {scores[i]}%
            </text>
          ))}
        </svg>
      </div>
    </motion.div>
  )
}
