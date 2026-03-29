'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'

export default function ExamMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-brand-text">GCSE Biology — Osmosis</p>
          <p className="text-xs text-brand-muted">Question 3 of 5</p>
        </div>
        <div className="flex items-center gap-1.5 text-indigo-400 bg-indigo-400/10 px-2.5 py-1 rounded-md">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-xs font-medium font-mono">14:32</span>
        </div>
      </div>

      {/* Question */}
      <div className="rounded-lg border border-brand-border bg-brand-bg p-4 mb-3">
        <p className="text-sm text-brand-text leading-relaxed">
          Describe the process of osmosis.{' '}
          <span className="text-indigo-400 font-medium">[6 marks]</span>
        </p>
      </div>

      {/* Answer area */}
      <div className="rounded-lg border border-brand-border bg-brand-bg p-3 h-24 mb-2">
        <p className="text-sm text-brand-muted">Type your answer here...</p>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-brand-muted">0 / 500 words</span>
        <button className="h-8 px-4 rounded-lg bg-indigo-600 text-white text-xs font-medium cursor-default">
          Submit answer
        </button>
      </div>
    </motion.div>
  )
}
