'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Puzzle, User, TrendingDown } from 'lucide-react'

const problems = [
  {
    icon: Puzzle,
    title: 'Disconnected Tools',
    description: 'Assignments, feedback, grading, and analytics sit in separate systems — creating unnecessary friction for teachers and leaders.',
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  {
    icon: User,
    title: 'Limited Personalised Learning',
    description: 'Admin overload reduces time for individualised support and targeted intervention.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: TrendingDown,
    title: 'Subpar Academic Outcomes',
    description: 'Students are not tested frequently enough under real exam conditions, affecting readiness for GCSE, A-Level, and IB exam performance.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
  },
]

export default function ProblemStatement() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="problems" ref={ref} className="section-padding bg-gray-50">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Valuable teaching time is being lost to admin, not learning.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Traditional teaching approaches consume up to 60% of a teacher's time. With disconnected tools, heavy marking loads, and limited opportunities for personalised feedback, students are often underprepared for high-stakes exams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${problem.bgColor} rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group border-2 ${problem.borderColor} hover-lift`}
            >
              <div className={`${problem.color} mb-4`}>
                <problem.icon className="w-12 h-12 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

