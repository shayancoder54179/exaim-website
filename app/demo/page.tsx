import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import SocialProof from '@/components/SocialProof'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Play, Check } from 'lucide-react'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Demo - ExAIm | See ExAIm in Action',
  description: 'Book a personalised demo to explore how ExAIm can support your school, reduce teacher workload, and improve student attainment.',
  openGraph: {
    title: 'Demo - ExAIm',
    description: 'See ExAIm in action with a personalised demo.',
  },
}

const faqs = [
  {
    question: 'How long does the demo take?',
    answer: 'Our demos typically last 30-45 minutes, giving you plenty of time to see all features and ask questions.',
  },
  {
    question: 'Can I try ExAIm before committing?',
    answer: 'Yes! We offer a 30-day free pilot with no commitment required.',
  },
  {
    question: 'What do I need for the demo?',
    answer: 'Just a computer or device with internet access. We\'ll handle the rest!',
  },
]

export default function DemoPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              See ExAIm in action
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book a personalised demo to explore how ExAIm can support your school, reduce teacher workload, and improve student attainment.
            </p>
          </div>

          {/* TODO: Product explainer video - Replace placeholder with actual video */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-8">
              <div className="text-center">
                <Play className="w-20 h-20 text-primary-600 mx-auto mb-4" />
                <p className="text-gray-600">Product Explainer Video</p>
                <p className="text-sm text-gray-500 mt-2">(Video placeholder - to be added)</p>
              </div>
            </div>
          </div>

          {/* TODO: Motion GIFs - Add UI demo GIFs showing product features */}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              'Reduce marking time by up to 60%',
              'Improve student exam readiness',
              'Get instant, personalised feedback',
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <Check className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Benefit {index + 1}</h3>
                <p className="text-gray-600">{benefit}</p>
              </div>
            ))}
          </div>

          {/* TODO: Calendar booking widget - Integrate calendar booking widget (e.g., Calendly) */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Book Your Demo</h2>
            <p className="text-center text-gray-600 mb-8">
              Choose a time that works for you. We'll send you a calendar invite.
            </p>
            <div className="text-center">
              <Link
                href="mailto:contact@exaim.ai"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all"
              >
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Or contact us directly at{' '}
              <a href="mailto:contact@exaim.ai" className="text-primary-600 hover:underline">
                contact@exaim.ai
              </a>
            </p>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SocialProof />
      <Footer />
    </main>
  )
}

