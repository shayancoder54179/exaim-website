'use client'

import { motion } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'

export default function GradingMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      <p className="text-sm font-medium text-brand-text mb-4">AI Grading</p>

      {/* In-progress state */}
      <div className="rounded-lg border border-brand-border bg-brand-bg p-4 mb-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs text-brand-muted">Grading 28 submissions...</p>
          <div className="flex items-center gap-1.5">
            <Loader2 className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
            <span className="text-xs font-medium text-indigo-400">24/28</span>
          </div>
        </div>
        <div className="h-2 rounded-full bg-brand-surface overflow-hidden">
          <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: '86%' }} />
        </div>
      </div>

      {/* Completed state */}
      <div className="rounded-lg border border-emerald-500/30 bg-emerald-400/10 p-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm text-brand-text font-medium">All graded</p>
          <p className="text-xs text-emerald-400">28 submissions · avg score 72%</p>
        </div>
      </div>
    </motion.div>
  )
}
