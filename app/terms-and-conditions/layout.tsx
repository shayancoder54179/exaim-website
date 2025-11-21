import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions - ExAIm Limited',
  description: 'Terms and Conditions for ExAIm Limited. Effective from 1st March 2025. Governing access and use of ExAIm\'s AI-driven grading and assessment platform.',
  openGraph: {
    title: 'Terms and Conditions - ExAIm Limited',
    description: 'Terms and Conditions for ExAIm\'s AI-powered exam preparation platform.',
  },
}

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

