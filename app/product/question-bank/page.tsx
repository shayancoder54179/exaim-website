import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'
import { Check } from 'lucide-react'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Question Bank & Assignments - ExAIm | Curriculum-Aligned Exam Questions',
  description: 'A growing, curriculum-aligned exam question bank with preloaded questions, custom creation, and easy assignment management.',
  openGraph: {
    title: 'Question Bank & Assignments - ExAIm',
    description: 'Comprehensive question bank for all curricula and subjects.',
  },
}

export default function QuestionBankPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              A growing, curriculum-aligned exam question bank
            </h1>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Preloaded exam questions',
                'Teacher-created custom questions',
                'Auto-tagged by topic, difficulty, skills',
                'Assign homework, classwork, and mocks',
                'Version history and reusable templates',
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

