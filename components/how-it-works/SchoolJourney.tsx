'use client'

import { motion } from 'framer-motion'
import { Calendar, Settings, Upload, Users } from 'lucide-react'
import AdminDashboardMockup from '@/components/mockups/AdminDashboardMockup'

const steps = [
  {
    icon: Calendar,
    title: 'Book a demo',
    description:
      "Talk to our team. We'll understand your school's needs and set up a pilot at no cost.",
  },
  {
    icon: Settings,
    title: 'We provision your school',
    description:
      'We set up your institution, create admin accounts, and configure everything. Takes less than 24 hours.',
  },
  {
    icon: Upload,
    title: 'Onboard teachers via CSV',
    description:
      'Upload a CSV of your teachers. They receive invite emails and can create classes immediately.',
  },
  {
    icon: Users,
    title: 'Students get free access',
    description:
      'Teachers share class invite codes. Students join and start taking exams — completely free.',
  },
]

export default function SchoolJourney() {
  return (
    <div>
      {/* Desktop: horizontal stepper */}
      <div className="hidden md:block">
        <div className="grid grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-brand-border" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center"
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-400/10 border border-indigo-500/20 flex items-center justify-center relative z-10 bg-brand-surface">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span className="mt-2 text-2xl font-bold text-indigo-400">{i + 1}</span>
                </div>

                <p className="text-sm font-medium text-brand-text mb-1.5">{step.title}</p>
                <p className="text-xs text-brand-muted leading-relaxed">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-6 relative">
        {/* Vertical line */}
        <div className="absolute left-[18px] top-4 bottom-4 w-px bg-brand-border" />

        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative flex gap-4 pl-1"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-indigo-400/10 border border-indigo-500/20 flex items-center justify-center relative z-10 bg-brand-surface">
                <Icon className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-bold text-indigo-400">{i + 1}</span>
                  <p className="text-sm font-medium text-brand-text">{step.title}</p>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Admin dashboard mockup */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mt-12 flex justify-center"
      >
        <div className="w-full max-w-2xl">
          <AdminDashboardMockup />
        </div>
      </motion.div>
    </div>
  )
}
