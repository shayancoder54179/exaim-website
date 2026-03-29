'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

export default function LibraryMockup() {
  const exams = [
    { title: 'AQA Biology — Cell Biology Topic Test', questions: 8, duration: '25 min' },
    { title: 'AQA Biology — Osmosis Subtopic Test', questions: 5, duration: '15 min' },
    { title: 'AQA Biology — Past Paper 1', questions: 12, duration: '45 min' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="bg-brand-surface rounded-2xl border border-brand-border p-5 mockup-shadow max-w-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-brand-text">Exam Library</p>
        <span className="text-xs text-brand-muted bg-brand-bg px-2.5 py-1 rounded-md border border-brand-border">
          300+ exams
        </span>
      </div>

      <div className="space-y-2">
        {exams.map((exam) => (
          <div
            key={exam.title}
            className="rounded-lg border border-brand-border bg-brand-bg p-3 flex items-center justify-between gap-3"
          >
            <div className="flex items-start gap-2.5 min-w-0">
              <FileText className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-xs text-brand-text font-medium truncate">{exam.title}</p>
                <p className="text-[10px] text-brand-muted">
                  {exam.questions} questions · {exam.duration}
                </p>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-md bg-indigo-600 text-white text-[10px] font-medium flex-shrink-0 cursor-default">
              Assign
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
