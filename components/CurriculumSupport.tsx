'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, Mail, Building2 } from 'lucide-react'
import Link from 'next/link'

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
  american: {
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
  american: {
    qualifications: ['AP', 'SAT', 'ACT'],
    boards: [],
    subjects: [],
    comingSoon: ['MATHEMATICS', 'ENGLISH', 'BIOLOGY', 'CHEMISTRY', 'PHYSICS', 'ECONOMICS', 'BUSINESS', 'PSYCHOLOGY', 'GEOGRAPHY', 'HISTORY', 'COMPUTER SCIENCE'],
  },
}

// Subjects list from plan
const allSubjects = ['Mathematics', 'English', 'Biology', 'Chemistry', 'Physics', 'Economics', 'Business', 'Psychology', 'Geography', 'History', 'Computer Science']

export default function CurriculumSupport() {
  const [selectedCurriculum, setSelectedCurriculum] = useState<'british' | 'ib' | 'american' | 'bespoke'>('british')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="curriculum" ref={ref} className="section-padding-sm bg-gray-50">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Built for every curriculum.
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            ExAIm intelligently adapts to a wide range of international curriculums, exam formats, and learning objectives.
          </p>
        </motion.div>

        {/* Curriculum Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-6">
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
          <div className="relative">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap z-10">
              Coming Soon
            </span>
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
          <div className="relative">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap z-10">
              Coming Soon
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCurriculum('american')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCurriculum === 'american'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              American Curriculum
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCurriculum('bespoke')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCurriculum === 'bespoke'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
            }`}
          >
            Bespoke Curriculum
          </motion.button>
        </div>

        {selectedCurriculum === 'bespoke' ? (
          <motion.div
            key={selectedCurriculum}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg"
          >
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                Custom Solutions
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed">
                ExAIm can tailor its solution for government organisations, districts, or large organisations. 
                Our platform can be customised to meet your specific requirements, exam formats, and educational standards.
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 md:p-5 mb-6 border border-primary-200">
                <p className="text-gray-800 font-medium mb-4">
                  We offer bespoke curriculum integration for:
                </p>
                <ul className="text-left space-y-4 md:space-y-6 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Government education departments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Large educational organisations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Custom exam board requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>Specialised assessment frameworks</span>
                  </li>
                </ul>
              </div>
              <Link href="/book-a-demo" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                <Mail className="w-5 h-5" />
                Contact Us for More Information
              </Link>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={selectedCurriculum}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-lg"
          >
            {/* Qualifications and Exam Boards Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6">
              {/* Qualifications */}
              <div>
                <h3 className="text-xl font-semibold mb-3 md:mb-4 text-gray-900">Qualifications</h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {curricula[selectedCurriculum].qualifications.map((qual, index) => {
                    const isComingSoon = selectedCurriculum === 'ib' || selectedCurriculum === 'american'
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
                <h3 className="text-xl font-semibold mb-3 md:mb-4 text-gray-900">Exam Boards</h3>
                <div className="flex flex-wrap gap-3 md:gap-4">
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
              <h3 className="text-xl font-semibold mb-3 md:mb-4 text-gray-900">Subjects</h3>
              <div className="flex flex-wrap gap-3 md:gap-4">
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
        )}
      </div>
    </section>
  )
}

