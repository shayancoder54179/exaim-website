'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, MessageSquare } from 'lucide-react'

const steps = [
  {
    icon: Clock,
    title: 'Simulated Exam Conditions',
    items: [
      'Timed exercises',
      'Open-ended responses (essays, long-form answers, problem-solving)',
      'Past-paper style questions and structure',
    ],
  },
  {
    icon: MessageSquare,
    title: 'Personalised Examiner-Level Feedback',
    items: [
      'AI trained on board-specific mark schemes',
      'Detailed feedback explaining reasoning',
      'Data that pinpoints exactly where students struggle',
    ],
  },
]

export default function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="methodology" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A proven methodology to improve student attainment
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all"
            >
              <div className="absolute top-4 right-4 text-6xl font-bold text-primary-200 opacity-50">
                {index + 1}
              </div>
              <div className="relative z-10">
                <step.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-primary-600 mr-2 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

