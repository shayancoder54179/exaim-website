'use client'

import { motion } from 'framer-motion'
import { Bell, Check } from 'lucide-react'

export default function SubmissionsMockup() {
  const submissions = [
    { name: 'Ahmed', time: '2 min ago' },
    { name: 'Sara', time: '5 min ago' },
    { name: 'Priya', time: '12 min ago' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-4 h-4 text-indigo-400" />
        <p className="text-sm font-medium text-brand-text">Submissions</p>
      </div>

      <div className="space-y-2 mb-3">
        {submissions.map((s) => (
          <div
            key={s.name}
            className="rounded-lg border border-brand-border bg-brand-bg p-3 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <p className="text-xs text-brand-text">
                <span className="font-medium">{s.name}</span> submitted Biology Topic Test
              </p>
            </div>
            <span className="text-[10px] text-brand-muted flex-shrink-0">{s.time}</span>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-amber-500/30 bg-amber-400/10 p-2.5 text-center">
        <p className="text-xs text-amber-400 font-medium">3 of 28 students remaining</p>
      </div>
    </motion.div>
  )
}
