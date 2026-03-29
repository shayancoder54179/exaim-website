import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ExAIm - AI-Powered Exam Preparation Platform',
    short_name: 'ExAIm',
    description: 'AI-powered questions, instant grading, and a personal tutor — built for GCSE and IGCSE students on the British curriculum.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F0E1A',
    theme_color: '#4F46E5',
    icons: [
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['education', 'productivity'],
    lang: 'en-GB',
    orientation: 'portrait-primary',
  }
}

