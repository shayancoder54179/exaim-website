import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Case Study - ExAIm | How Schools Improved Exam Outcomes',
  description: 'See how schools improved exam outcomes using ExAIm.',
}

// TODO: Replace with actual case study data from CMS or database
// const getCaseStudy = async (slug: string) => {
//   // Placeholder - replace with actual data fetching
//   return null
// }

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  // TODO: Uncomment when data fetching is implemented
  // const caseStudy = await getCaseStudy(params.slug)
  // if (!caseStudy) {
  //   notFound()
  // }

  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How [School Name] Improved Exam Outcomes Using ExAIm
            </h1>
          </div>

          {/* Background */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Background</h2>
            <p className="text-lg text-gray-600">
              {/* TODO: Add background information */}
            </p>
          </div>

          {/* Challenges */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              {/* TODO: Add challenges list */}
            </ul>
          </div>

          {/* Implementation */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation</h2>
            <p className="text-lg text-gray-600">
              {/* TODO: Add implementation details */}
            </p>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* TODO: Add results metrics */}
            </div>
          </div>

          {/* Quotes */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What They Say</h2>
            <div className="space-y-6">
              {/* TODO: Add testimonial quotes */}
            </div>
          </div>

          {/* Screenshots */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* TODO: Add screenshot images */}
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Screenshot placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

