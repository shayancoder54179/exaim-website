import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Preview Demos',
  description: 'Internal preview page',
  path: '/preview-demos',
  noindex: true,
})

export default function PreviewDemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

