'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { FileText, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

const Navbar = dynamic(() => import('@/components/Navbar'), {
  loading: () => <div className="h-20" />,
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export default function PitchDeckPage() {
  const [isMobile, setIsMobile] = useState(false)
  const pdfUrl = '/ExAIm_Investor Deck (1).pdf'
  // Disable download: toolbar=0 removes download button, but we keep scrollbar for navigation
  const pdfUrlWithParams = encodeURI(pdfUrl) + '#toolbar=0&navpanes=0&scrollbar=1&view=FitH'
  
  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isMobileDevice || isSmallScreen)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
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
            <div className="relative w-full" style={{ minHeight: '90vh', height: '90vh' }}>
              {/* Mobile: Show button to open PDF */}
              {isMobile && (
                <div className="flex flex-col items-center justify-center h-full p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <FileText className="w-16 h-16 mx-auto text-primary-500" />
                    <h3 className="text-xl font-semibold text-gray-900">View Pitch Deck</h3>
                    <p className="text-gray-600 max-w-md">
                      For the best viewing experience on mobile, please open the PDF in your browser.
                    </p>
                  </div>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Open PDF in Browser
                  </a>
                </div>
              )}
              
              {/* Desktop: Show PDF viewer */}
              {!isMobile && (
                <>
                  <object
                    data={pdfUrlWithParams}
                    type="application/pdf"
                    className="w-full h-full"
                    aria-label="ExAIm Investor Pitch Deck"
                  >
                    {/* Fallback to iframe if object doesn't work */}
                    <iframe
                      src={pdfUrlWithParams}
                      className="w-full h-full border-0"
                      title="ExAIm Investor Pitch Deck"
                      allowFullScreen
                    />
                  </object>
                </>
              )}
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
