import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'
import { Check } from 'lucide-react'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Simulated Exam Conditions - ExAIm | Realistic Exam Practice',
  description: 'Prepare students with realistic exam simulations. Timer, progress bar, real exam workspace layout, and board-style question formatting.',
  openGraph: {
    title: 'Simulated Exam Conditions - ExAIm',
    description: 'Students practise exactly how they will perform on exam day.',
  },
}

export default function SimulatedExamPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Prepare students with realistic exam simulations
            </h1>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {[
                'Timer and progress bar',
                'Real exam workspace layout',
                'Drawing canvas for diagrams',
                'Long-answer input',
                'Board-style question formatting',
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-600 text-center mt-8">
              Students practise exactly how they will perform on exam day — improving confidence, familiarity, and attainment.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

