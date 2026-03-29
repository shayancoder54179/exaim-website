'use client'

import { useRef, useState, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Step {
  title: string
  description: string
  mockup: ReactNode
}

interface JourneySectionProps {
  steps: Step[]
}

export default function JourneySection({ steps }: JourneySectionProps) {
  const [activeStep, setActiveStep] = useState(0)
  const mockupRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    mockupRefs.current.forEach((ref, index) => {
      if (!ref) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveStep(index)
          }
        },
        { threshold: 0.4, rootMargin: '-20% 0px -40% 0px' }
      )
      observer.observe(ref)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [steps.length])

  const scrollToStep = (index: number) => {
    mockupRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="relative">
      {/* Desktop: two-column sticky layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12">
        {/* Left — sticky step list */}
        <div className="relative">
          <div className="sticky top-[20vh]">
            <nav className="space-y-2">
              {steps.map((step, i) => (
                <button
                  key={step.title}
                  onClick={() => scrollToStep(i)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                    activeStep === i
                      ? 'border-indigo-500/50 bg-indigo-400/10'
                      : 'border-transparent hover:border-brand-border hover:bg-brand-surface'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                        activeStep === i
                          ? 'bg-indigo-600 text-white'
                          : 'bg-brand-surface text-brand-muted border border-brand-border'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p
                        className={`text-sm font-medium transition-colors duration-300 ${
                          activeStep === i ? 'text-brand-text' : 'text-brand-muted'
                        }`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`text-xs mt-1 leading-relaxed transition-colors duration-300 ${
                          activeStep === i ? 'text-brand-muted' : 'text-brand-muted/60'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right — scrollable mockups */}
        <div className="space-y-32 py-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => { mockupRefs.current[i] = el }}
              className="flex items-center justify-center min-h-[50vh]"
            >
              {step.mockup}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: linear vertical layout */}
      <div className="lg:hidden space-y-10">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-brand-text">{step.title}</p>
                <p className="text-xs text-brand-muted mt-1 leading-relaxed">{step.description}</p>
              </div>
            </div>
            <div className="flex justify-center">{step.mockup}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
