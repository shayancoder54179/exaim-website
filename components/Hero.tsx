'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, School } from 'lucide-react'
import { useEffect, useState } from 'react'

// Animation variants for reusable animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { value: '5,000+', label: 'Students', icon: Users },
    { value: '20+', label: 'Schools', icon: School },
    { value: '100%', label: 'Exam Coverage', icon: TrendingUp },
  ]

  // Split headline into words for stagger animation
  const headlineWords = "Improve student attainment with AI-powered exam preparation".split(' ')

  return (
    <section className="relative overflow-visible bg-white section-padding-lg pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-20 lg:pb-24">

      <motion.div
        className="relative z-10 container-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
      >
        <div className="text-center">
          {/* Enhanced Main Headline with Stagger Animation */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10 leading-tight px-4"
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            {headlineWords.map((word, index) => {
              const isAIPowered = word.toLowerCase() === 'ai-powered'
              return (
                <motion.span
                  key={index}
                  variants={textVariants}
                  className={`inline-block mr-2 ${isAIPowered ? 'gradient-text text-shimmer' : ''}`}
                  animate={isAIPowered ? {
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  } : {}}
                  transition={isAIPowered ? {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  } : {}}
                  whileHover={isAIPowered ? {
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  } : {}}
                >
                  {word}
                </motion.span>
              )
            })}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            ExAIm uses simulated exam conditions, automated marking, and personalised examiner-level feedback to help every student achieve better results while reducing teacher workload.
          </motion.p>

          {/* Enhanced CTA Button with Spring Animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex justify-center items-center mb-12 md:mb-16 lg:mb-20"
          >
            <motion.a
              href="/book-a-demo"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(33, 96, 243, 0.3)",
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-base md:text-lg font-semibold flex items-center gap-2 overflow-hidden group w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all min-h-[48px]"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.6 }}
                style={{ borderRadius: '50%', x: '-50%', y: '-50%' }}
              />
              <span className="relative z-10 flex items-center gap-2 text-center">
                <span className="whitespace-nowrap">Book a Demo</span>
                <span className="hidden sm:inline whitespace-nowrap">& Start Your 30-Day Free Pilot</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5 flex-shrink-0" />
                </motion.div>
              </span>
            </motion.a>
          </motion.div>

          {/* Badge Row */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="mb-12 md:mb-16 lg:mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-white/90 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full text-gray-700 text-sm md:text-base font-medium shadow-md text-center"
            >
              Trusted by 5,000+ students across 20 schools worldwide.
            </motion.div>
          </motion.div>

          {/* Enhanced Stats with Stagger Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 2,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-xl hover-glow-intense hover-3d group cursor-pointer overflow-hidden h-full flex flex-col items-center justify-center transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 rounded-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    rotate: [0, 10, -10, 0],
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                  className="relative z-10"
                >
                  <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                </motion.div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-1 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
