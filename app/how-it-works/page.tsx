import type { Metadata } from 'next'
import HowItWorksClient from './HowItWorksClient'

export const metadata: Metadata = {
  title: 'How it Works',
  description:
    'See how ExAIm works for students, teachers, and schools. AI-powered exams, instant grading, and progress tracking — set up in minutes.',
  alternates: { canonical: 'https://www.exaim.ai/how-it-works' },
}

export default function HowItWorksPage() {
  return <HowItWorksClient />
}
