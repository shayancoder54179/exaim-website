'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AnimatedHero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding-lg pt-32 md:pt-40 lg:pt-44 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      
      <div className="container-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-8 shadow-lg"
          >
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Born in the classroom.
            <br />
            <span className="gradient-text">Built for the world.</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed">
            ExAIm was created by the founders of Improve ME Institute, an award-winning after-school centre in the UAE with over 1,000 students and 40 tutors. After years of witnessing the challenges teachers and students face in exam preparation, ExAIm was built to make exam excellence accessible, efficient, and data-driven. Discover our <Link href="/our-products" className="text-primary-600 hover:text-primary-700 underline">AI-powered exam preparation tools</Link> and see <Link href="/how-exaim-works" className="text-primary-600 hover:text-primary-700 underline">how ExAIm works</Link>.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/book-a-demo">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 bg-gray-900 hover:bg-gray-800 text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-300"
              >
                Book a demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/our-products">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 font-medium text-base bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Explore our products
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

