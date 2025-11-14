import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import ScrollAnimations from '@/components/ScrollAnimations'

// Lazy load below-the-fold components
const ProblemStatement = dynamic(() => import('@/components/ProblemStatement'), {
  loading: () => <div className="min-h-[400px]" />,
})
const SolutionOverview = dynamic(() => import('@/components/SolutionOverview'), {
  loading: () => <div className="min-h-[400px]" />,
})
const CurriculumSupport = dynamic(() => import('@/components/CurriculumSupport'), {
  loading: () => <div className="min-h-[400px]" />,
})
const SocialProof = dynamic(() => import('@/components/SocialProof'), {
  loading: () => <div className="min-h-[400px]" />,
})
const StakeholderBenefits = dynamic(() => import('@/components/StakeholderBenefits'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Methodology = dynamic(() => import('@/components/Methodology'), {
  loading: () => <div className="min-h-[400px]" />,
})
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="min-h-[400px]" />,
})
const FoundersTeam = dynamic(() => import('@/components/FoundersTeam'), {
  loading: () => <div className="min-h-[400px]" />,
})
const Pricing = dynamic(() => import('@/components/Pricing'), {
  loading: () => <div className="min-h-[600px]" />,
})
const FinalCTA = dynamic(() => import('@/components/FinalCTA'), {
  loading: () => <div className="min-h-[300px]" />,
})
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollAnimations />
      <Navbar />
      <Hero />
      <ProblemStatement />
      <SolutionOverview data-fade-in />
      <CurriculumSupport />
      <SocialProof />
      <StakeholderBenefits />
      <Methodology />
      <HowItWorks />
      <FoundersTeam />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
