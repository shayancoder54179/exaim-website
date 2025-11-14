import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'
import FoundersTeam from '@/components/FoundersTeam'
import type { Metadata } from 'next'

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export const metadata: Metadata = {
  title: 'Advisory Team - Why ExAIm | Global Education Experts',
  description: 'Built by educators. Guided by global experts. Meet our advisory team with 80+ years of collective experience.',
  openGraph: {
    title: 'Advisory Team - Why ExAIm',
    description: 'Expert guidance from global education leaders.',
  },
}

export default function AdvisoryTeamPage() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <FoundersTeam />
      <Footer />
    </main>
  )
}

