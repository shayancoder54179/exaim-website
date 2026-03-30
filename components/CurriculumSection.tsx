'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'

const tabs = [
  { id: 'british', label: 'British Curriculum', badge: null },
  { id: 'ib', label: 'International Baccalaureate', badge: 'Coming Soon' },
  { id: 'american', label: 'American Curriculum', badge: 'Coming Soon' },
  { id: 'bespoke', label: 'Bespoke Curriculum', badge: null },
] as const

type TabId = (typeof tabs)[number]['id']

const qualifications = ['GCSE', 'IGCSE']
const examBoards = ['AQA', 'Edexcel']

const subjects: { name: string; available: boolean }[] = [
  { name: 'Biology', available: true },
  { name: 'Chemistry', available: true },
  { name: 'Physics', available: true },
  { name: 'Business', available: true },
  { name: 'Economics', available: true },
  { name: 'Mathematics', available: false },
  { name: 'English', available: false },
  { name: 'Computer Science', available: false },
  { name: 'Geography', available: false },
  { name: 'History', available: false },
  { name: 'Psychology', available: false },
]

export default function CurriculumSection() {
  const [activeTab, setActiveTab] = useState<TabId>('british')

  return (
    <section className="section-padding">
      <div className="container-wrapper">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-indigo-400 mb-2">Curriculum</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text">
            Built for the British curriculum.
          </h2>
          <p className="mt-3 text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Launching with GCSE and IGCSE across AQA and Edexcel. More boards, subjects, and curricula coming soon.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex flex-col items-center gap-1 px-5 py-3 min-h-[44px] rounded-lg text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-transparent text-brand-muted border border-brand-border hover:bg-indigo-600/10 hover:text-brand-text'
              }`}
            >
              {tab.badge && (
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 leading-none">
                  {tab.badge}
                </span>
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === 'british' ? (
            <motion.div
              key="british"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 md:p-10"
            >
              {/* Qualifications & Exam Boards */}
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
                    Qualifications
                  </h4>
                  <div className="flex gap-2">
                    {qualifications.map((q) => (
                      <span
                        key={q}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-brand-surface border border-brand-border text-brand-text"
                      >
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-3">
                    Exam Boards
                  </h4>
                  <div className="flex gap-2">
                    {examBoards.map((b) => (
                      <span
                        key={b}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-brand-surface border border-brand-border text-brand-text"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Subjects */}
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-4">
                Subjects
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {subjects.map((subject) => (
                  <div
                    key={subject.name}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${
                      subject.available
                        ? 'border-brand-border bg-brand-surface'
                        : 'border-brand-border/50 bg-brand-surface/50 opacity-60'
                    }`}
                  >
                    {subject.available ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    ) : (
                      <Clock className="w-5 h-5 text-brand-muted shrink-0" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        subject.available ? 'text-brand-text' : 'text-brand-muted'
                      }`}
                    >
                      {subject.name}
                    </span>
                    {!subject.available && (
                      <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 leading-none">
                        Coming Soon
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-8 md:p-14 text-center"
            >
              <p className="text-lg text-brand-muted mb-6">
                This curriculum is coming soon. Contact us to discuss your requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors duration-200"
              >
                Get in touch
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
