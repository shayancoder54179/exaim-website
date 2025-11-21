'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ZohoContactForm from '@/components/ZohoContactForm'

export default function DemoBookingForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <div ref={ref} className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-xl mb-12 md:mb-16 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-6 md:mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Book Your Demo</h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Fill out the form below and we'll get back to you to schedule a personalized demo at a time that works for you.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ZohoContactForm />
      </motion.div>
    </div>
  )
}

