import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'For Exam Boards - ExAIm | AI-Powered Precision',
  description: 'AI-powered precision for large-scale assessment. Enable rapid, consistent marking and feedback while maintaining full examiner oversight.',
  openGraph: {
    title: 'For Exam Boards - ExAIm',
    description: 'Large-scale assessment with AI-powered precision.',
  },
}

export default function ExamBoardsPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-powered precision for large-scale assessment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enable rapid, consistent marking and feedback while maintaining full examiner oversight and compliance.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

