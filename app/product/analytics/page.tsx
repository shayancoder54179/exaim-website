import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'
import { Check } from 'lucide-react'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Analytics & Insights - ExAIm | Real-Time Teaching Insights',
  description: 'Real-time insights for smarter teaching. Class overview, student-level breakdown, weak areas highlighted automatically, and exportable reports.',
  openGraph: {
    title: 'Analytics & Insights - ExAIm',
    description: 'Data-driven insights to improve teaching and student outcomes.',
  },
}

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Real-time insights for smarter teaching
            </h1>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Class overview',
                'Student-level breakdown',
                'Weak areas highlighted automatically',
                'Trend tracking',
                'Export reports for SLT & parents',
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Check className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="/demo"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
            >
              View Analytics Demo
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

