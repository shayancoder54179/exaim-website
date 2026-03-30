'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-all hover:bg-indigo-500 hover:scale-105"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

/* ── Shared styles ── */
const sectionHeading =
  'text-xl font-semibold text-[var(--brand-text)] border-l-4 border-indigo-500 pl-4'
const subHeading =
  'text-lg font-semibold text-[var(--brand-text)] mt-6 mb-3'
const body = 'text-base leading-relaxed text-[var(--brand-muted)]'
const link =
  'text-indigo-400 hover:underline hover:text-indigo-300 transition-colors'
const list = 'list-disc pl-6 space-y-2 text-base leading-relaxed text-[var(--brand-muted)]'
const infoBox =
  'rounded-xl p-6 border border-[var(--brand-border)] bg-[var(--brand-surface)]'

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-bg)]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-52 h-52 sm:w-80 sm:h-80 bg-purple-600/6 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block rounded-full bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--brand-text)] leading-tight tracking-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg text-[var(--brand-muted)]">
            Last updated: March 2026
          </p>
          <div className="mt-8 mx-auto w-24 h-0.5 bg-indigo-500/40 rounded-full" />
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          {/* 1. Introduction */}
          <div>
            <h2 className={sectionHeading}>1. Introduction</h2>
            <p className={`${body} mt-4`}>
              These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the AI-driven grading and assessment platform and related services (&ldquo;Platform&rdquo;) provided by ExAIm Limited (&ldquo;ExAIm,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). ExAIm is registered in England and Wales and operates internationally, including Dubai, UAE, under a valid Technology License.
            </p>
            <p className={`${body} mt-4`}>
              By accessing or using the Platform, educational institutions (&ldquo;Institutions&rdquo;) and their authorised administrators, teachers, and students (collectively, &ldquo;Users&rdquo;) expressly agree to comply fully with these Terms.
            </p>
          </div>

          {/* 2. Definitions */}
          <div>
            <h2 className={sectionHeading}>2. Definitions</h2>
            <ul className={`${list} mt-4`}>
              <li><strong className="text-[var(--brand-text)]">Institution:</strong> Educational institution subscribing to ExAIm services.</li>
              <li><strong className="text-[var(--brand-text)]">User(s):</strong> Authorised individuals (administrators, teachers, students) utilising the Platform.</li>
              <li><strong className="text-[var(--brand-text)]">Services:</strong> AI-based grading, feedback, analytics, and associated management services provided by ExAIm.</li>
            </ul>
          </div>

          {/* 3. Access and Use of the Platform */}
          <div>
            <h2 className={sectionHeading}>3. Access and Use of the Platform</h2>
            <p className={`${body} mt-4`}>
              ExAIm grants Institutions and Users a limited, non-exclusive, non-transferable license to use the Platform strictly for educational purposes, in accordance with these Terms.
            </p>
          </div>

          {/* 4. User and Institutional Responsibilities */}
          <div>
            <h2 className={sectionHeading}>4. User and Institutional Responsibilities</h2>

            <h3 className={subHeading}>Users agree to:</h3>
            <ul className={list}>
              <li>Utilise the Platform solely for lawful, educational purposes.</li>
              <li>Maintain confidentiality of account credentials and promptly report unauthorised usage or security concerns.</li>
              <li>Avoid activities compromising Platform security, functionality, or integrity.</li>
            </ul>

            <h3 className={subHeading}>Institutions agree to:</h3>
            <ul className={list}>
              <li>Ensure compliance of Users with these Terms.</li>
              <li>Accurately manage user accounts and permissions.</li>
              <li>Clearly communicate the purpose and nature of data collection and processing to all Users, obtaining necessary consents or verifying alternative lawful bases for processing student data, particularly minors, as detailed in our Privacy Policy.</li>
            </ul>
          </div>

          {/* 5. Data Protection & Privacy */}
          <div>
            <h2 className={sectionHeading}>5. Data Protection &amp; Privacy</h2>
            <p className={`${body} mt-4`}>
              ExAIm strictly adheres to the UK General Data Protection Regulation (UK GDPR) and UAE Federal Decree-Law No. 45 of 2021 (UAE PDPL). These Terms explicitly incorporate ExAIm&apos;s Privacy Policy, which details our data protection practices, user rights, and responsibilities. Institutions are responsible for compliance as Data Controllers. Users&apos; specific rights regarding their personal data are detailed in our Privacy Policy.
            </p>
          </div>

          {/* 6. Intellectual Property */}
          <div>
            <h2 className={sectionHeading}>6. Intellectual Property</h2>
            <p className={`${body} mt-4`}>
              All intellectual property rights related to the Platform including software, AI algorithms, databases, analytics, and generated content remain the exclusive property of ExAIm. Users shall not copy, alter, distribute, sell, or reverse-engineer any part of the Platform without explicit prior written permission from ExAIm.
            </p>
          </div>

          {/* 7. AI-driven Assessment */}
          <div>
            <h2 className={sectionHeading}>7. AI-driven Assessment</h2>
            <p className={`${body} mt-4`}>
              The Platform uses advanced AI technology for automated assessment grading and analytics. Although designed for accuracy, all AI-generated results must be reviewed and validated by teachers or administrators. ExAIm explicitly disclaims liability for institutional decisions made solely based on AI-generated outcomes without appropriate human oversight.
            </p>
          </div>

          {/* 8. Fees and Payment Terms */}
          <div>
            <h2 className={sectionHeading}>8. Fees and Payment Terms</h2>
            <p className={`${body} mt-4`}>
              Institutions agree to pay subscription fees as detailed in their contracts. Payments must be made according to the agreed schedule (annually or monthly). Non-payment or delayed payment may lead to suspension or termination of services following prior written notification.
            </p>
          </div>

          {/* 9. Platform Availability & Maintenance */}
          <div>
            <h2 className={sectionHeading}>9. Platform Availability &amp; Maintenance</h2>
            <p className={`${body} mt-4`}>
              ExAIm aims to provide consistent Platform availability but does not guarantee uninterrupted access. Scheduled maintenance activities will be communicated to Institutions at least 48 hours in advance. ExAIm is not responsible for interruptions caused by circumstances beyond reasonable control.
            </p>
          </div>

          {/* 10. Limitation of Liability */}
          <div>
            <h2 className={sectionHeading}>10. Limitation of Liability</h2>
            <p className={`${body} mt-4`}>
              ExAIm shall not be liable for indirect, incidental, consequential, or punitive damages arising from use of the Platform. The total liability of ExAIm shall not exceed subscription fees paid by the Institution within the previous twelve months.
            </p>
          </div>

          {/* 11. Termination */}
          <div>
            <h2 className={sectionHeading}>11. Termination</h2>
            <p className={`${body} mt-4`}>
              Either party may terminate this agreement with a minimum of 30 days&apos; written notice. Following termination, ExAIm will securely delete or return all User data within 60 days, consistent with our Privacy Policy.
            </p>
          </div>

          {/* 12. Jurisdiction and Governing Law */}
          <div>
            <h2 className={sectionHeading}>12. Jurisdiction and Governing Law</h2>
            <p className={`${body} mt-4`}>
              For Institutions based in the United Kingdom or other international jurisdictions, these Terms are governed exclusively by the laws of England and Wales, with disputes subject exclusively to English courts.
            </p>
            <p className={`${body} mt-4`}>
              For Institutions based in the United Arab Emirates, these Terms are governed exclusively by the laws of Dubai and the UAE, with disputes subject exclusively to Dubai courts.
            </p>
          </div>

          {/* 13. Data Processing Agreements (DPA) & Subprocessors */}
          <div>
            <h2 className={sectionHeading}>13. Data Processing Agreements (DPA) &amp; Subprocessors</h2>
            <p className={`${body} mt-4`}>
              ExAIm maintains formal Data Processing Agreements (DPAs) with subprocessors handling personal data, specifically:
            </p>

            <h3 className={subHeading}>Google Cloud Platform (GCP):</h3>
            <p className={body}>
              Infrastructure hosting, database storage (MySQL), and computing services. Google&apos;s official GDPR-compliant DPA is explicitly accepted by ExAIm and can be reviewed{' '}
              <a href="https://cloud.google.com/terms/data-processing-addendum" target="_blank" rel="noopener noreferrer" className={link}>here</a>.
            </p>

            <p className={`${body} mt-4`}>
              Institutions may request an updated list of subprocessors at any time. ExAIm will provide email notifications at least 30 days in advance of any changes to subprocessors.
            </p>
          </div>

          {/* 14. Amendments */}
          <div>
            <h2 className={sectionHeading}>14. Amendments</h2>
            <p className={`${body} mt-4`}>
              ExAIm reserves the right to amend these Terms. Institutions will be informed via email at least 30 days in advance of any material changes taking effect.
            </p>
          </div>

          {/* 15. Contact Information */}
          <div>
            <h2 className={sectionHeading}>15. Contact Information</h2>
            <p className={`${body} mt-4`}>
              For questions or clarifications about these Terms, contact:
            </p>

            <div className={`${infoBox} mt-4`}>
              <h3 className="text-base font-semibold text-[var(--brand-text)] mb-3">ExAIm Limited</h3>
              <p className="text-[var(--brand-muted)] text-sm">2 Crossways Business Centre,</p>
              <p className="text-[var(--brand-muted)] text-sm">Bicester Road, Kingswood,</p>
              <p className="text-[var(--brand-muted)] text-sm">Aylesbury, HP18 0RA,</p>
              <p className="text-[var(--brand-muted)] text-sm mb-3">United Kingdom</p>
              <p className="text-sm">
                Email: <a href="mailto:support@exaim.ai" className={link}>support@exaim.ai</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
