import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="min-h-[600px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Pricing - ExAIm | Flexible Plans for Schools',
  description: 'Choose the right ExAIm plan for your school. Per-subject, bundle, or premium options. 30-day free trial available.',
  openGraph: {
    title: 'Pricing - ExAIm',
    description: 'Flexible pricing plans starting at $10 per subject. Start your 30-day free trial today.',
  },
}

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Simple pricing. Powerful results.
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the plan that fits your institution's needs.
            </p>
          </div>
          <Pricing />
        </div>
      </section>
      <Footer />
    </main>
  )
}

