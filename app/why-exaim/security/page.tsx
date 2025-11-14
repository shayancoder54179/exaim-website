import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import DataSecurity from '@/components/DataSecurity'
import type { Metadata } from 'next'
import { Shield, Lock, CheckCircle, FileText } from 'lucide-react'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Security & Compliance - Why ExAIm | Privacy First',
  description: 'Built with privacy and safety at the core. GDPR and ICO compliant with strict data-privacy controls.',
  openGraph: {
    title: 'Security & Compliance - Why ExAIm',
    description: 'Privacy first. Always.',
  },
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Built with privacy and safety at the core
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ExAIm complies with GDPR and ICO guidelines, ensuring all student data is encrypted, protected, and never used to train public models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Shield, title: 'Data Protection & GDPR', desc: 'Full compliance with European data protection regulations' },
              { icon: Lock, title: 'ICO alignment', desc: 'Meets Information Commissioner\'s Office standards' },
              { icon: FileText, title: 'Data processing transparency', desc: 'Clear policies on how data is processed and stored' },
              { icon: CheckCircle, title: 'Student data privacy', desc: 'Student data never used to train public models' },
              { icon: Shield, title: 'Secure cloud infrastructure', desc: 'Enterprise-grade security on Google Cloud Platform' },
              { icon: CheckCircle, title: 'Full teacher override', desc: 'Teachers maintain full control over AI decisions' },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <item.icon className="w-10 h-10 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DataSecurity />
      <Footer />
    </main>
  )
}

