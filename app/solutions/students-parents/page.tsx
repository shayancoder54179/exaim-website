import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'For Students & Parents - ExAIm | Personalised Support',
  description: 'Personalised support for every learner. Students receive instant, meaningful feedback. Parents gain transparency into progress.',
  openGraph: {
    title: 'For Students & Parents - ExAIm',
    description: 'Instant feedback and transparent progress tracking.',
  },
}

export default function StudentsParentsPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Personalised support for every learner
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Students receive instant, meaningful feedback to improve faster. Parents gain transparency into progress, strengths, and areas needing focus.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

