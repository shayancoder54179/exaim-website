'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ZohoContactForm from '@/components/ZohoContactForm'

export default function DemoBookingForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-xl max-w-3xl mx-auto"
    >
      <ZohoContactForm />
    </motion.div>
  )
}

