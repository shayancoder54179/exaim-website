'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import PreviewWithFeatures from '@/components/exaim/PreviewWithFeatures'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Clock, Zap, BarChart3, Target, ArrowRight } from 'lucide-react'

// Lazy load below-the-fold components
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="min-h-[600px]" />,
})
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[300px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})
const TestimonialsWithLogos = dynamic(() => import('@/components/TestimonialsWithLogos'), {
  loading: () => <div className="min-h-[400px]" />,
})

function WorkflowOverviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const steps = [
    {
      icon: BookOpen,
      label: 'Assign',
      description: 'Assign curriculum-aligned tasks',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Clock,
      label: 'Practice',
      description: 'Students practice under exam conditions',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      label: 'AI Marking',
      description: 'Instant, examiner-style feedback',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: BarChart3,
      label: 'Insights',
      description: 'Detailed analytics and gap analysis',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Target,
      label: 'Intervention',
      description: 'Targeted teaching and improvement',
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            A complete exam preparation loop
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            ExAIm connects assignments, grading, analytics, and feedback in one seamless platform, creating a continuous cycle of improvement.
          </p>
        </motion.div>

        {/* Workflow Diagram */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center flex-1 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center text-center space-y-3 relative z-10 cursor-pointer"
                >
                  <motion.div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: [0, -5, 5, -5, 0], transition: { duration: 0.5 } }}
                  >
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1">
                      {step.label}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 max-w-[120px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 z-0"
                  >
                    <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <div className="relative -mt-20 md:-mt-24 lg:-mt-32 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
        <div className="relative z-20">
          <PreviewWithFeatures />
        </div>
      </div>
      <WorkflowOverviewSection />
      <TestimonialsWithLogos />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
