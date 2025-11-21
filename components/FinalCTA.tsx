'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-700 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto container-wrapper text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight">
            Get started with ExAIm today
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/90 mb-8 md:mb-10 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
            Our vision is to transform the student learning experience by empowering educators to deliver measurable outcomes for all stakeholders.
          </p>
          <div className="flex justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book-a-demo"
                prefetch={true}
                className="group px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 rounded-lg text-base md:text-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2 w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 min-h-[48px]"
              >
                <span className="whitespace-nowrap">Book a Demo</span>
                <span className="hidden sm:inline whitespace-nowrap">& Start Your 30-Day Free Pilot</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

