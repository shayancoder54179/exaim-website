'use client'

import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Sparkles, BarChart, FileText, Users } from 'lucide-react'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})
const CurriculumSupport = dynamic(() => import('@/components/CurriculumSupport'), {
  loading: () => <div className="min-h-[600px]" />,
})

const products = [
  {
    icon: FileText,
    title: 'Assignment & Assessment Creation',
    description: 'Create exam-board aligned assessments with ease. Build custom exams, mock papers, and practice tests tailored to your curriculum.',
    features: ['Exam-board aligned questions', 'Custom assessment builder', 'Question bank library', 'Multiple question types'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Marking',
    description: 'Automated grading and feedback powered by examiner-trained AI. Reduce marking time by up to 60% while maintaining accuracy.',
    features: ['Open-ended answer marking', 'Instant feedback generation', 'Exam-board aligned rubrics', 'Detailed improvement suggestions'],
    gradient: 'from-primary-500 to-secondary-500',
  },
  {
    icon: BarChart,
    title: 'Analytics & Insights',
    description: 'Comprehensive performance analytics for students, classes, and schools. Track progress, identify gaps, and drive improvement.',
    features: ['Student performance tracking', 'Class-level analytics', 'Topic gap analysis', 'Progress reports'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Student Exam Interface',
    description: 'Intuitive exam-taking experience with simulated exam conditions. Students can practice and take assessments in a familiar environment.',
    features: ['Simulated exam conditions', 'Real-time progress tracking', 'Accessible on all devices', 'Offline capability'],
    gradient: 'from-green-500 to-emerald-500',
  },
]

export default function OurProductsPage() {
  const productsRef = useRef(null)
  const isProductsInView = useInView(productsRef, { once: true, margin: '-100px' })

  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-16 md:pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Products
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              A comprehensive suite of AI-powered tools designed to streamline exam preparation, reduce teacher workload, and improve student outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <CurriculumSupport />

      {/* Products Section */}
      <section ref={productsRef} className="section-padding bg-white">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProductsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${product.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

