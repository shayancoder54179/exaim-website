import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Products - ExAIm | AI-Powered Exam Preparation Tools',
  description: 'Discover ExAIm\'s comprehensive suite of AI-powered tools: Assignment Creation, AI Marking, Analytics & Insights, and Student Exam Interface. Streamline exam preparation and reduce teacher workload.',
  openGraph: {
    title: 'Our Products - ExAIm',
    description: 'A comprehensive suite of AI-powered tools designed to streamline exam preparation.',
  },
}

export default function OurProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}


