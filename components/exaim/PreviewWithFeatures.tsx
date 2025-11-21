"use client"

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { Clock, MessageSquare, BarChart3, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Simulated Exam Conditions',
    desc: 'Timed exercises with open-ended responses, essays, and long problem-solving questions in realistic exam environments.',
    gradient: 'from-primary-500 to-secondary-500',
  },
  {
    icon: MessageSquare,
    title: 'Personalised & Examiner-Level Feedback',
    desc: 'AI-powered feedback specific to each exam board, tailored to individual performance.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BarChart3,
    title: 'Detailed Analytics',
    desc: 'Pinpoint weak areas with comprehensive insights and gap analysis.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Sparkles,
    title: 'AI Assisted Exam Creation',
    desc: 'Intelligent tools to create comprehensive assessments aligned with exam board requirements.',
    gradient: 'from-orange-500 to-red-500',
  },
]

const PreviewWithFeatures: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <div ref={ref} className="w-full flex justify-center container-padding py-16 md:py-20 lg:py-24 relative z-30 bg-white">
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="w-full max-w-7xl relative z-30"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-8 items-center">
          {/* Left Side - Core Features */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Core Features
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                Powerful capabilities that make ExAIm the complete solution for exam preparation.
              </p>
            </motion.div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="relative p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-all group cursor-pointer overflow-hidden border border-gray-100"
                >
                  {/* Animated background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Icon and content */}
                  <div className="relative z-10 flex items-start gap-3">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                      className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg`}
                    >
                      <feature.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Preview Image */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <Image
                src="/img/preview/preview-image.png"
                alt="ExAIm Platform Preview"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default PreviewWithFeatures

