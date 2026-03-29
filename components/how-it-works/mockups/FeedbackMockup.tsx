'use client'

import { motion } from 'framer-motion'

export default function FeedbackMockup() {
  const markPoints = [
    { label: 'Defines osmosis as movement of water', awarded: true },
    { label: 'Mentions high to low water potential', awarded: true },
    { label: 'References partially permeable membrane', awarded: false },
    { label: 'Describes concentration gradient', awarded: true },
    { label: 'Links to net movement of molecules', awarded: true },
    { label: 'Uses correct scientific terminology throughout', awarded: false },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      {/* Score header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-brand-text">Your result</p>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-amber-400">4</span>
          <span className="text-sm text-brand-muted">/ 6</span>
        </div>
      </div>

      {/* Mark breakdown */}
      <div className="space-y-1.5 mb-4">
        {markPoints.map((point) => (
          <div key={point.label} className="flex items-start gap-2">
            <div
              className={`w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold ${
                point.awarded
                  ? 'bg-emerald-400/20 text-emerald-400'
                  : 'bg-red-400/20 text-red-400'
              }`}
            >
              {point.awarded ? '✓' : '✗'}
            </div>
            <p className="text-xs text-brand-muted leading-relaxed">{point.label}</p>
          </div>
        ))}
      </div>

      {/* Feedback */}
      <div className="rounded-lg border border-brand-border bg-brand-bg p-3">
        <p className="text-xs text-brand-muted leading-relaxed">
          <span className="text-brand-text font-medium">Feedback: </span>
          Good explanation of water potential but missing reference to partially permeable membrane. Try to use precise scientific terms consistently.
        </p>
      </div>
    </motion.div>
  )
}
