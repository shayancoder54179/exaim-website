'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsWithLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Steve Porter',
      role: 'Head of Business & Economics',
      school: 'Tanglin Trust Singapore',
      quote: 'Significantly enhanced my teaching process. Excited to continue using it.',
    },
    {
      name: 'Vanessa North-Panting',
      role: 'Head of Digital Learning',
      school: 'Charterhouse',
      quote: 'The feature that allows students to answer questions and receive instant feedback is a game-changer.',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const schools = [
    { name: 'Harrow School', logo: '/companies/Harrow_Crest.svg (1).png' },
    { name: 'Stowe', logo: '/companies/Arms_of_Stowe_School.svg (1).png' },
    { name: 'UCS Hampstead', logo: '/companies/UCS_RGB (1).png' },
    { name: 'Uppingham', logo: '/companies/logo-137424 (1).png' },
    { name: 'Charterhouse', logo: '/companies/logo-370x90-1.png' },
    { name: 'Improve ME Institute', logo: '/companies/image (33).png' },
    { name: 'Batley Girls', logo: '/companies/images (3).png' },
  ]

  return (
    <section ref={ref} className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container-wrapper">
        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-5 md:p-6 lg:p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <Quote className="w-8 h-8 mb-4 opacity-80" />
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-base md:text-lg lg:text-xl font-medium mb-4 leading-relaxed"
                >
                  {testimonials[currentTestimonial].quote}
                </motion.blockquote>
              </AnimatePresence>
              <div className="flex items-center justify-between">
                <div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`name-${currentTestimonial}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="font-semibold text-base">{testimonials[currentTestimonial].name}</div>
                      <div className="text-white/80 text-sm">{testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].school}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-3">
                  {/* Carousel Indicators */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentTestimonial
                            ? 'bg-white w-6'
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  {/* Navigation Buttons */}
                  <div className="flex gap-1">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        setCurrentTestimonial(
                          (prev) => (prev - 1 + testimonials.length) % testimonials.length
                        )
                      }
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() =>
                        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
                      }
                      className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-base md:text-lg text-gray-700">
            Trusted by <span className="font-bold text-gray-900">5,000+ students</span> across{' '}
            <span className="font-bold text-gray-900">20+ globally recognised schools</span>
          </p>
        </motion.div>

        {/* School Logos - Marquee Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative overflow-hidden py-6"
        >
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <div className="flex gap-6 md:gap-8 lg:gap-12 items-center shrink-0 marquee">
              {[...schools, ...schools].map((school, index) => (
                <motion.div
                  key={`marquee-${index}`}
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 h-16 md:h-20 grayscale hover:grayscale-0 transition-all duration-300 px-4"
                >
                  <Image
                    src={school.logo}
                    alt={school.name}
                    width={200}
                    height={80}
                    className="max-h-full w-auto object-contain"
                    unoptimized
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

