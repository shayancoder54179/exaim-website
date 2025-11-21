'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check } from 'lucide-react'

type Subject = 'MATHEMATICS' | 'ENGLISH' | 'BIOLOGY' | 'CHEMISTRY' | 'PHYSICS' | 'ECONOMICS' | 'BUSINESS' | 'PSYCHOLOGY' | 'GEOGRAPHY' | 'HISTORY' | 'COMPUTER SCIENCE'

const curricula: {
  british: {
    qualifications: string[]
    boards: string[]
    subjects: Subject[]
    comingSoon: Subject[]
  }
  ib: {
    qualifications: string[]
    boards: string[]
    subjects: Subject[]
    comingSoon: Subject[]
  }
} = {
  british: {
    qualifications: ['GCSE', 'A-Level'],
    boards: ['OCR', 'EDEXCEL', 'AQA'],
    subjects: ['MATHEMATICS', 'ENGLISH', 'BIOLOGY', 'CHEMISTRY', 'PHYSICS', 'ECONOMICS', 'BUSINESS', 'PSYCHOLOGY', 'GEOGRAPHY', 'HISTORY', 'COMPUTER SCIENCE'],
    comingSoon: [],
  },
  ib: {
    qualifications: ['MYP', 'DP'],
    boards: [],
    subjects: [],
    comingSoon: ['MATHEMATICS', 'ENGLISH', 'BIOLOGY', 'CHEMISTRY', 'PHYSICS', 'ECONOMICS', 'BUSINESS', 'PSYCHOLOGY', 'GEOGRAPHY', 'HISTORY', 'COMPUTER SCIENCE'],
  },
}

// Subjects list from plan
const allSubjects = ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'Economics', 'Business', 'Psychology', 'Geography', 'History', 'Computer Science']

export default function CurriculumSupport() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<'british' | 'ib'>('british')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="curriculum" ref={ref} className="section-padding bg-gray-50">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Built for every curriculum.
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            ExAIm intelligently adapts to a wide range of international curriculums, exam formats, and learning objectives.
          </p>
        </motion.div>

        {/* Curriculum Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCurriculum('british')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCurriculum === 'british'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            British Curriculum
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCurriculum('ib')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCurriculum === 'ib'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            International Baccalaureate
          </motion.button>
        </div>

        <motion.div
          key={selectedCurriculum}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
        >
          {/* Qualifications and Exam Boards Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Qualifications */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Qualifications</h3>
              <div className="flex flex-wrap gap-3">
                {curricula[selectedCurriculum].qualifications.map((qual, index) => {
                  const isComingSoon = selectedCurriculum === 'ib'
                  return (
                    <motion.span
                      key={qual}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 rounded-lg font-medium ${
                        isComingSoon
                          ? 'bg-gray-100 text-gray-500 border-2 border-gray-200'
                          : 'bg-primary-100 text-primary-700'
                      }`}
                    >
                      {qual} {isComingSoon && <span className="text-xs ml-1">(Coming Soon)</span>}
                    </motion.span>
                  )
                })}
              </div>
            </div>

            {/* Exam Boards */}
            {curricula[selectedCurriculum].boards.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Exam Boards</h3>
                <div className="flex flex-wrap gap-3">
                  {curricula[selectedCurriculum].boards.map((board) => (
                    <motion.span
                      key={board}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-lg font-medium"
                    >
                      {board}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Subjects</h3>
            <div className="flex flex-wrap gap-3">
              {curricula[selectedCurriculum].subjects.map((subject, index) => {
                const isComingSoon = curricula[selectedCurriculum].comingSoon.includes(subject)
                return (
                  <motion.span
                    key={subject}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 ${
                      isComingSoon
                        ? 'bg-gray-100 text-gray-500 border-2 border-gray-200'
                        : 'bg-gray-50 text-gray-900 border border-gray-200'
                    }`}
                  >
                    {!isComingSoon && (
                      <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white stroke-[3]" />
                      </div>
                    )}
                    <span>{subject}</span>
                    {isComingSoon && <span className="text-xs ml-1">(Coming Soon)</span>}
                  </motion.span>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

