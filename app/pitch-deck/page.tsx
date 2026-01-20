'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-20" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export default function PitchDeckPage() {
  // Properly encode the PDF filename for the iframe
  // Enable scrolling and remove toolbar restrictions for better viewing
  const pdfUrl = encodeURI('/ExAIm_Investor Deck (1).pdf') + '#toolbar=1&navpanes=0&scrollbar=1&view=FitH'
  
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mb-6 shadow-lg"
            >
              <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              ExAIm Investor Pitch Deck
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Explore our vision, mission, and growth strategy
            </p>
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="section-padding pb-20">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-100 px-4 sm:px-6 py-3 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-600 font-medium">
                  ExAIm Investor Deck
                </span>
              </div>
            </div>
            <div className="relative w-full" style={{ minHeight: '90vh', height: '90vh', overflow: 'auto' }}>
              <iframe
                src={pdfUrl}
                className="w-full h-full border-0"
                title="ExAIm Investor Pitch Deck"
                allowFullScreen
              />
            </div>
          </motion.div>
          
          {/* Note about viewing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 mb-12 text-center"
          >
            <p className="text-sm text-gray-500">
              This document is for viewing purposes only. For questions or more information, please{' '}
              <a href="/book-a-demo" className="text-primary-600 hover:text-primary-700 underline font-medium">
                contact us
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
