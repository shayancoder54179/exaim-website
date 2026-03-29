'use client'

import { motion } from 'framer-motion'
import { Copy } from 'lucide-react'

export default function CreateClassMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      <p className="text-sm font-medium text-brand-text mb-4">Create a class</p>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-brand-muted mb-1 block">Class name</label>
          <div className="h-9 rounded-lg border border-brand-border bg-brand-bg px-3 flex items-center">
            <span className="text-sm text-brand-text">GCSE Biology - 10A</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="text-xs text-brand-muted mb-1 block">Qualification</label>
            <div className="h-9 rounded-lg border border-brand-border bg-brand-bg px-3 flex items-center">
              <span className="text-sm text-brand-text">GCSE</span>
            </div>
          </div>
          <div>
            <label className="text-xs text-brand-muted mb-1 block">Board</label>
            <div className="h-9 rounded-lg border border-brand-border bg-brand-bg px-3 flex items-center">
              <span className="text-sm text-brand-text">AQA</span>
            </div>
          </div>
        </div>

        <div>
          <label className="text-xs text-brand-muted mb-1 block">Subject</label>
          <div className="h-9 rounded-lg border border-brand-border bg-brand-bg px-3 flex items-center">
            <span className="text-sm text-brand-text">Biology</span>
          </div>
        </div>

        <button className="w-full h-9 rounded-lg bg-indigo-600 text-white text-sm font-medium cursor-default">
          Generate Invite Code
        </button>

        {/* Generated code */}
        <div className="rounded-lg border border-indigo-500/30 bg-indigo-400/10 p-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-brand-muted mb-0.5">Invite code</p>
            <p className="text-lg font-bold font-mono text-indigo-400 tracking-wider">BIO10A26</p>
          </div>
          <button className="p-2 rounded-lg hover:bg-brand-bg transition-colors cursor-default">
            <Copy className="w-4 h-4 text-brand-muted" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
