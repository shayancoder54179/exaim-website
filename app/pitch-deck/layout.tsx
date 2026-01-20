import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Pitch Deck',
  description: 'View the ExAIm investor pitch deck to learn about our vision, mission, and growth strategy.',
  path: '/pitch-deck',
})

export default function PitchDeckLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
