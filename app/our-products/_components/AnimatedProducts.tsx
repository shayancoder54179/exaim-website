'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Sparkles, BarChart, FileText, Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    id: 'assignment',
    icon: FileText,
    title: 'Assignment & Assessment Creation',
    shortDescription: 'Create exam-board aligned assessments with ease',
    description: 'Create exam-board aligned assessments with ease. Build custom exams, mock papers, and practice tests tailored to your curriculum.',
    features: [
      'Exam-board aligned questions',
      'Custom assessment builder',
      'Question bank library',
      'Multiple question types',
      'Automated question generation',
      'Curriculum mapping',
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    benefits: [
      'Save hours of manual question creation',
      'Ensure curriculum alignment',
      'Build comprehensive test banks',
    ],
    stats: {
      label: 'Time Saved',
      value: '70%',
      description: 'Faster assessment creation',
    },
  },
  {
    id: 'marking',
    icon: Sparkles,
    title: 'AI-Powered Marking',
    shortDescription: 'Automated grading powered by examiner-trained AI',
    description: 'Automated grading and feedback powered by examiner-trained AI. Reduce marking time by up to 60% while maintaining accuracy.',
    features: [
      'Open-ended answer marking',
      'Instant feedback generation',
      'Exam-board aligned rubrics',
      'Detailed improvement suggestions',
      'Consistent grading standards',
      'Bulk marking capabilities',
    ],
    gradient: 'from-primary-500 to-secondary-500',
    bgGradient: 'from-primary-50 to-secondary-50',
    benefits: [
      'Reduce marking workload by 60%',
      'Provide instant feedback to students',
      'Maintain examiner-level accuracy',
    ],
    stats: {
      label: 'Marking Speed',
      value: '60%',
      description: 'Faster than manual marking',
    },
  },
  {
    id: 'analytics',
    icon: BarChart,
    title: 'Analytics & Insights',
    shortDescription: 'Comprehensive performance analytics',
    description: 'Comprehensive performance analytics for students, classes, and schools. Track progress, identify gaps, and drive improvement.',
    features: [
      'Student performance tracking',
      'Class-level analytics',
      'Topic gap analysis',
      'Progress reports',
      'Predictive insights',
      'Customizable dashboards',
    ],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    benefits: [
      'Identify learning gaps instantly',
      'Track progress over time',
      'Make data-driven decisions',
    ],
    stats: {
      label: 'Insights',
      value: 'Real-time',
      description: 'Instant analytics',
    },
  },
  {
    id: 'student',
    icon: Users,
    title: 'Student Exam Interface',
    shortDescription: 'Intuitive exam-taking experience',
    description: 'Intuitive exam-taking experience with simulated exam conditions. Students can practice and take assessments in a familiar environment.',
    features: [
      'Simulated exam conditions',
      'Real-time progress tracking',
      'Accessible on all devices',
      'Offline capability',
      'Accessibility features',
      'Practice mode available',
    ],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    benefits: [
      'Familiar exam environment',
      'Practice under real conditions',
      'Accessible anywhere, anytime',
    ],
    stats: {
      label: 'Uptime',
      value: '99.9%',
      description: 'Reliable platform',
    },
  },
]

export default function AnimatedProducts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      {/* Products Section */}
      <section ref={ref} className="section-padding bg-white">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
              Core Platform Features
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Everything you need to transform exam preparation and assessment in one powerful platform.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="space-y-8 md:space-y-12">
            {products.map((product, index) => {
              const Icon = product.icon
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transition-all duration-500"
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative bg-white">
                    {/* Main Card Content */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                        {/* Left: Icon and Basic Info */}
                        <div className="flex-shrink-0 w-full sm:w-auto">
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                            className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-r ${product.gradient} shadow-lg mb-4`}
                          >
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                          </motion.div>
                          
                          {/* Stats Badge */}
                          <div className="bg-gray-50 rounded-lg p-2 sm:p-3 border border-gray-200">
                            <div className="text-xs text-gray-500 mb-1">{product.stats.label}</div>
                            <div className="text-xl sm:text-2xl font-bold text-gray-900">{product.stats.value}</div>
                            <div className="text-xs text-gray-600 mt-1">{product.stats.description}</div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-grow min-w-0">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                            {product.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Benefits */}
                          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                            {product.benefits.map((benefit, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs sm:text-sm font-medium border border-gray-200"
                              >
                                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                                <span className="whitespace-nowrap">{benefit}</span>
                              </motion.span>
                            ))}
                          </div>

                          {/* Features - Always Visible */}
                          <div className="pt-4 border-t border-gray-200">
                            <h4 className="font-semibold text-sm sm:text-base text-gray-900 mb-3">Key Features:</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                              {product.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ delay: index * 0.1 + idx * 0.05 }}
                                  className="flex items-start gap-2 sm:gap-3"
                                >
                                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4">
              Ready to Transform Your Exam Preparation?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-2xl mx-auto opacity-90 px-4">
              Join thousands of educators using ExAIm to improve student outcomes and reduce workload.
            </p>
            <div className="flex flex-wrap justify-center gap-4 px-4">
              <Link
                href="/book-a-demo"
                className="px-4 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-lg text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

