'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function StudentDashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative w-full max-w-lg mx-auto"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white">
              A
            </div>
            <div>
              <p className="text-sm font-medium text-brand-text">Good morning, Ahmed</p>
              <p className="text-xs text-brand-muted">Year 11 &middot; AQA</p>
            </div>
          </div>
          <div className="text-xs text-brand-muted bg-brand-surface-light px-2.5 py-1 rounded-md border border-brand-border">
            Mon 14 Apr
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          <div className="bg-brand-bg rounded-xl p-3 border border-brand-border">
            <p className="text-xs text-brand-muted mb-1">Exams Taken</p>
            <p className="text-lg font-bold text-brand-text">12</p>
          </div>
          <div className="bg-brand-bg rounded-xl p-3 border border-brand-border">
            <p className="text-xs text-brand-muted mb-1">Avg Score</p>
            <p className="text-lg font-bold text-emerald-400">74%</p>
          </div>
          <div className="bg-brand-bg rounded-xl p-3 border border-brand-border">
            <p className="text-xs text-brand-muted mb-1">Streak</p>
            <p className="text-lg font-bold text-orange-400">7 days</p>
          </div>
        </div>

        {/* Upcoming exams */}
        <div>
          <p className="text-xs font-medium text-brand-muted uppercase tracking-wider mb-2.5">
            Upcoming Exams
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between bg-brand-bg rounded-lg p-3 border border-brand-border">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-8 rounded-full bg-emerald-500" />
                <div>
                  <p className="text-sm font-medium text-brand-text">AQA Biology</p>
                  <p className="text-xs text-brand-muted">Topic Test</p>
                </div>
              </div>
              <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md">
                2 days
              </span>
            </div>
            <div className="flex items-center justify-between bg-brand-bg rounded-lg p-3 border border-brand-border">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-8 rounded-full bg-indigo-500" />
                <div>
                  <p className="text-sm font-medium text-brand-text">Edexcel Chemistry</p>
                  <p className="text-xs text-brand-muted">Subtopic Test</p>
                </div>
              </div>
              <span className="text-xs text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded-md">
                5 days
              </span>
            </div>
          </div>
        </div>

        {/* Ace button */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-3 -right-3 w-11 h-11 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/30 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>

      {/* Glow effect behind */}
      <div className="absolute inset-0 -z-10 bg-indigo-600/10 blur-3xl rounded-full scale-75" />
    </motion.div>
  )
}
