import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Product Overview - ExAIm | AI-Powered Exam Preparation Platform',
  description: 'Everything you need for high-quality exam preparation — in one platform. AI-powered exam creation, simulated exam conditions, automated grading, and insights.',
  openGraph: {
    title: 'Product Overview - ExAIm',
    description: 'All-in-one platform for exam preparation with AI-powered features.',
  },
}

export default function ProductOverviewPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Everything you need for high-quality exam preparation — in one platform.
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Exam Creation</h2>
              <p className="text-lg text-gray-600">
                Generate exam-style questions aligned with syllabus points, past papers, topics, and ability levels.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Simulated Exam Conditions</h2>
              <p className="text-lg text-gray-600">
                Students practise in a realistic exam environment that mirrors official formats.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Automated Grading & Feedback</h2>
              <p className="text-lg text-gray-600">
                Examiner-trained AI delivers instant, personalised feedback aligned with board mark schemes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Insights & Analytics</h2>
              <p className="text-lg text-gray-600">
                Identify gaps, monitor class trends, and track progress across all topics.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/product/ai-grading"
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all text-center"
            >
              Explore AI Grading →
            </a>
            <a
              href="/demo"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all text-center"
            >
              Book a Demo →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

