'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" ref={ref} className="section-padding">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Custom Pricing for Your Institution
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            If you want pricing, contact us so that we can create a tailored plan for your institute or school.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book-a-demo"
                prefetch={true}
                className="group px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-base md:text-lg font-semibold hover:shadow-xl transition-all flex items-center gap-2 justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 min-h-[48px] w-full sm:w-auto"
              >
                Contact Us for Pricing
                <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="mailto:contact@exaim.ai"
                className="group px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg text-base md:text-lg font-semibold hover:bg-primary-50 transition-all flex items-center gap-2 justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 min-h-[48px] w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

