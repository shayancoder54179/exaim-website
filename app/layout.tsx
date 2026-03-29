import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import ThemeProvider from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.exaim.ai'),
  title: {
    default: 'ExAIm — AI-Powered Exam Prep for GCSE & IGCSE',
    template: '%s | ExAIm',
  },
  description:
    'AI-powered questions, instant grading, and a personal tutor — built for GCSE and IGCSE students on the British curriculum.',
  keywords: [
    'ExAIm',
    'AI exam preparation',
    'GCSE revision',
    'IGCSE revision',
    'AQA',
    'Edexcel',
    'British curriculum',
    'AI grading',
    'exam practice',
    'AI tutor',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.exaim.ai',
    siteName: 'ExAIm',
    title: 'ExAIm — AI-Powered Exam Prep for GCSE & IGCSE',
    description:
      'AI-powered questions, instant grading, and a personal tutor — built for GCSE and IGCSE students on the British curriculum.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExAIm — AI-Powered Exam Prep for GCSE & IGCSE',
    description:
      'AI-powered questions, instant grading, and a personal tutor — built for GCSE and IGCSE students on the British curriculum.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-screen bg-brand-bg font-sans">
        <ThemeProvider>
        {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MSJ492NVMG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MSJ492NVMG');
          `}
        </Script>
      </body>
    </html>
  )
}
