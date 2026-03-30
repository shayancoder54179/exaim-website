'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function JoinClassMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      <p className="text-sm font-medium text-brand-text mb-4">Join a class</p>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-brand-muted mb-1 block">Class invite code</label>
          <div className="h-9 rounded-lg border border-brand-border bg-brand-bg px-3 flex items-center">
            <span className="text-sm text-brand-text font-mono font-medium tracking-wider">BIO10A26</span>
          </div>
        </div>

        <button className="w-full h-11 rounded-lg bg-indigo-600 text-white text-sm font-medium cursor-default">
          Join Class
        </button>

        {/* Success state */}
        <div className="mt-2 rounded-lg border border-emerald-500/30 bg-emerald-400/10 p-3 flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
            <Check className="w-3 h-3 text-white" />
          </div>
          <div>
            <p className="text-sm text-brand-text font-medium">GCSE AQA Biology - Class 10A</p>
            <p className="text-xs text-emerald-400">Joined successfully</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
