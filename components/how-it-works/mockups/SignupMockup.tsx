'use client'

import { motion } from 'framer-motion'

export default function SignupMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      <p className="text-sm font-medium text-brand-text mb-4">Create your account</p>

      <div className="space-y-3">
        <div>
          <label className="text-xs text-brand-muted mb-1 block">Email</label>
          <div className="h-9 rounded-lg border border-brand-border bg-brand-bg px-3 flex items-center">
            <span className="text-sm text-brand-muted">you@school.ac.uk</span>
          </div>
        </div>

        <div>
          <label className="text-xs text-brand-muted mb-1 block">Password</label>
          <div className="h-9 rounded-lg border border-brand-border bg-brand-bg px-3 flex items-center">
            <span className="text-sm text-brand-muted">••••••••</span>
          </div>
        </div>

        <div>
          <label className="text-xs text-brand-muted mb-1 block">I am a...</label>
          <div className="h-9 rounded-lg border border-brand-border bg-brand-bg px-3 flex items-center justify-between">
            <span className="text-sm text-indigo-400 font-medium">Student</span>
            <svg className="w-4 h-4 text-brand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button className="w-full h-11 rounded-lg bg-indigo-600 text-white text-sm font-medium cursor-default">
          Sign up free
        </button>
      </div>
    </motion.div>
  )
}
