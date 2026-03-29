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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--brand-bg)]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-purple-600/6 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block rounded-full bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-6">
            Legal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--brand-text)] leading-tight tracking-tight mb-4">
            Privacy Policy
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
              ExAIm Limited (&ldquo;ExAIm,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is registered in England and Wales (ICO Registration Number ZB842876) and operates internationally, including Dubai, UAE, holding a valid Technology License in Dubai. ExAIm is committed to safeguarding the privacy and security of our business-to-business (B2B) clients, educational institutions (&ldquo;Institutions&rdquo;), and their administrators, teachers, and students (&ldquo;End Users&rdquo;).
            </p>
            <p className={`${body} mt-4`}>
              This Privacy Policy details how ExAIm collects, processes, shares, transfers, and retains personal data, outlining user rights under the UK General Data Protection Regulation (UK GDPR) and UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection (&ldquo;UAE PDPL&rdquo;).
            </p>
          </div>

          {/* 2. Scope of Policy */}
          <div>
            <h2 className={sectionHeading}>2. Scope of Policy</h2>
            <p className={`${body} mt-4`}>
              ExAIm serves as a Data Processor on behalf of educational Institutions, who act as Data Controllers. This policy applies to all data handled by ExAIm through our platform and related services across jurisdictions in which we operate.
            </p>
          </div>

          {/* 3. Information We Collect */}
          <div>
            <h2 className={sectionHeading}>3. Information We Collect</h2>

            <h3 className={subHeading}>Institutional Data:</h3>
            <ul className={list}>
              <li>Institution name, address, and registration number</li>
              <li>Administrator&apos;s name, email, and telephone number</li>
              <li>Billing and payment details</li>
            </ul>

            <h3 className={subHeading}>End User Data:</h3>
            <ul className={list}>
              <li>Name, date of birth, and class assignment</li>
              <li>Assessment responses, grades, and analytical insights</li>
            </ul>
          </div>

          {/* 4. Purpose and Legal Basis */}
          <div>
            <h2 className={sectionHeading}>4. Purpose and Legal Basis of Data Processing</h2>
            <p className={`${body} mt-4 mb-6`}>
              ExAIm processes personal data exclusively for:
            </p>

            <div className="overflow-x-auto rounded-xl border border-[var(--brand-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--brand-surface)]">
                    <th className="px-4 py-3 text-left font-semibold text-[var(--brand-text)] border-b border-[var(--brand-border)]">Purpose of Processing</th>
                    <th className="px-4 py-3 text-left font-semibold text-[var(--brand-text)] border-b border-[var(--brand-border)]">Legal Basis (UK GDPR and UAE PDPL)</th>
                  </tr>
                </thead>
                <tbody className="text-[var(--brand-muted)]">
                  <tr className="border-b border-[var(--brand-border)]">
                    <td className="px-4 py-3">Automated grading &amp; personalised feedback</td>
                    <td className="px-4 py-3">Performance of contract (with Institution)</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
                    <td className="px-4 py-3">Educational performance analytics</td>
                    <td className="px-4 py-3">Performance of contract</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-border)]">
                    <td className="px-4 py-3">Technical support &amp; troubleshooting</td>
                    <td className="px-4 py-3">Performance of contract</td>
                  </tr>
                  <tr className="border-b border-[var(--brand-border)] bg-[var(--brand-surface)]">
                    <td className="px-4 py-3">Enhancing platform functionality &amp; developing new features</td>
                    <td className="px-4 py-3">Legitimate interests</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Compliance with data protection &amp; regulatory obligations</td>
                    <td className="px-4 py-3">Legal obligation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. AI-driven Assessment Transparency */}
          <div>
            <h2 className={sectionHeading}>5. AI-driven Assessment Transparency</h2>
            <p className={`${body} mt-4`}>
              ExAIm employs Artificial Intelligence (AI) to automate assessment grading, including open-ended responses. AI analyses End User responses solely to generate grades, personalised feedback, and insights. Human oversight is always provided, enabling teachers to review, verify, and modify AI-generated outcomes. Automated assessments never solely dictate academic outcomes without institutional review.
            </p>
          </div>

          {/* 6. Special Categories & Children's Data */}
          <div>
            <h2 className={sectionHeading}>6. Special Categories &amp; Children&apos;s Data</h2>
            <p className={`${body} mt-4`}>
              ExAIm does not collect or process special categories of personal data (e.g., special educational needs or health information).
            </p>

            <h3 className={subHeading}>Children&apos;s Data:</h3>
            <p className={body}>
              ExAIm services involve processing data of students under 18 years of age. Institutions (Data Controllers) confirm responsibility for obtaining lawful consent or ensuring alternative lawful bases (such as educational obligations or parental authorisation), complying with UK GDPR Article 8 and UAE PDPL.
            </p>
          </div>

          {/* 7. Data Sharing & International Transfers */}
          <div>
            <h2 className={sectionHeading}>7. Data Sharing &amp; International Transfers</h2>
            <p className={`${body} mt-4`}>
              ExAIm does not sell or rent personal data. Data sharing occurs solely:
            </p>
            <ul className={`${list} mt-3`}>
              <li>With subprocessors compliant with GDPR and UAE PDPL for essential services (hosting, analytics, support)</li>
              <li>Upon explicit direction by Institutions (e.g., reporting to parents or authorities)</li>
              <li>To comply with legal obligations or official regulatory requests</li>
            </ul>

            <h3 className={subHeading}>Explicit Subprocessors:</h3>
            <p className={body}>
              Google Cloud Platform (GCP): ExAIm maintains a formal Data Processing Agreement (DPA) with Google Cloud Platform (GCP) that incorporates appropriate safeguards, including Standard Contractual Clauses, ensuring compliance with GDPR and UAE PDPL. The complete Data Processing Addendum can be found{' '}
              <a href="#" className={link}>here</a>.
            </p>

            <h3 className={subHeading}>International Data Transfers:</h3>
            <p className={body}>
              ExAIm stores personal data on Google Cloud Platform, with data primarily hosted in the UK and/or EU. If data transfers occur outside these regions, we rely on SCCs and other appropriate safeguards.
            </p>

            <h3 className={subHeading}>Subprocessor Updates:</h3>
            <p className={body}>
              Institutions will receive email notifications at least 30 days in advance of any changes to subprocessors. An updated subprocessor list can be requested at any time.
            </p>
          </div>

          {/* 8. Data Retention Policy */}
          <div>
            <h2 className={sectionHeading}>8. Data Retention Policy</h2>
            <p className={`${body} mt-4`}>
              Data is retained only as long as necessary for:
            </p>
            <ul className={`${list} mt-3`}>
              <li>Contractual obligations with Institutions</li>
              <li>Compliance with legal obligations or dispute resolution</li>
            </ul>
            <p className={`${body} mt-4`}>
              After contract termination, personal data is securely deleted or returned within 60 days, per GDPR and UAE PDPL requirements.
            </p>
          </div>

          {/* 9. Data Security & Breach Notification */}
          <div>
            <h2 className={sectionHeading}>9. Data Security &amp; Breach Notification</h2>
            <p className={`${body} mt-4`}>
              ExAIm implements robust technical and organisational measures to protect personal data, including but not limited to:
            </p>

            <h3 className={subHeading}>Encryption:</h3>
            <ul className={list}>
              <li>Data encrypted at rest using industry-standard AES-256 encryption.</li>
              <li>Data encrypted in transit using Transport Layer Security (TLS) protocols.</li>
            </ul>

            <h3 className={subHeading}>Access Controls and Authentication:</h3>
            <ul className={list}>
              <li>Strict role-based access controls (RBAC) ensure users have only necessary privileges.</li>
              <li>Secure login mechanisms, including mandatory multi-factor authentication (MFA) for administrative accounts.</li>
            </ul>

            <h3 className={subHeading}>Infrastructure Security:</h3>
            <p className={body}>
              All data storage and processing infrastructure hosted exclusively on Google Cloud Platform (GCP), which maintains compliance with industry-leading standards, including:
            </p>
            <ul className={`${list} mt-3`}>
              <li>SOC 2 Type 2 certification</li>
              <li>ISO 27001 certification</li>
              <li>Compliance with GDPR requirements and UAE PDPL data protection standards.</li>
              <li>Regular independent audits and third-party certifications.</li>
            </ul>

            <h3 className={subHeading}>Data Encryption:</h3>
            <ul className={list}>
              <li>GCP provides encryption at rest by default using the Advanced Encryption Standard (AES-256).</li>
              <li>All data transferred to and from the platform is encrypted using Transport Layer Security (TLS) protocols.</li>
            </ul>

            <h3 className={subHeading}>System Monitoring &amp; Breach Response:</h3>
            <ul className={list}>
              <li>Continuous security monitoring and logging enabled it to detect unusual activities.</li>
              <li>Immediate notification procedures in place for identifying and addressing potential security breaches, with notification provided to Institutions within 72 hours as required by GDPR and UAE PDPL.</li>
            </ul>
          </div>

          {/* 10. Responsibilities of Institutions */}
          <div>
            <h2 className={sectionHeading}>10. Responsibilities of Institutions (Data Controllers)</h2>
            <p className={`${body} mt-4`}>
              Institutions agree to:
            </p>
            <ul className={`${list} mt-3`}>
              <li>Ensure lawful collection, processing, and sharing of personal data, including lawful consent for children&apos;s data.</li>
              <li>Inform End Users, parents, or guardians of processing practices.</li>
              <li>Comply fully with applicable local and international data protection laws.</li>
            </ul>
          </div>

          {/* 11. User Rights */}
          <div>
            <h2 className={sectionHeading}>11. User Rights under GDPR &amp; UAE PDPL</h2>
            <p className={`${body} mt-4`}>
              Users have specific rights regarding their personal data. These rights include the ability to:
            </p>
            <ul className={`${list} mt-3`}>
              <li>Access their personal data.</li>
              <li>Correct inaccurate or incomplete personal data.</li>
              <li>Request deletion of personal data when no longer necessary or processed unlawfully.</li>
              <li>Limit or object to specific types of data processing.</li>
              <li>Request portability of their personal data in a structured, machine-readable format.</li>
            </ul>

            <h3 className={subHeading}>Exercising Your Rights:</h3>
            <p className={body}>
              End Users should direct their requests to the relevant Institution (Data Controller). ExAIm, as a Data Processor, will assist Institutions promptly, transparently, and in accordance with applicable data protection laws.
            </p>

            <h3 className={subHeading}>Right to Lodge Complaints:</h3>
            <p className={body}>
              Users have the right to lodge a complaint with the relevant data protection supervisory authority if they believe their rights have been infringed:
            </p>

            <div className={`${infoBox} mt-4`}>
              <h4 className="text-base font-semibold text-[var(--brand-text)] mb-2">For UK Users:</h4>
              <p className="text-[var(--brand-muted)] text-sm">Information Commissioner&apos;s Office (ICO)</p>
              <p className="text-sm mt-1">
                Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className={link}>https://ico.org.uk</a>
              </p>
            </div>

            <div className={`${infoBox} mt-3`}>
              <h4 className="text-base font-semibold text-[var(--brand-text)] mb-2">For UAE Users:</h4>
              <p className="text-[var(--brand-muted)] text-sm">
                Relevant Data Protection Authority under UAE Federal Decree-Law No. 45 of 2021 (UAE PDPL), typically the UAE Data Office or local Emirate data protection authorities. More information can be found via:
              </p>
              <p className="text-sm mt-1">
                <a href="https://u.ae/en" target="_blank" rel="noopener noreferrer" className={link}>https://u.ae/en</a>
              </p>
            </div>
          </div>

          {/* 12. Jurisdiction and Governing Law */}
          <div>
            <h2 className={sectionHeading}>12. Jurisdiction and Governing Law</h2>
            <p className={`${body} mt-4`}>
              For UK-based or international Institutions, this Privacy Policy is governed exclusively by the laws of England and Wales, with disputes subject to English courts.
            </p>
            <p className={`${body} mt-4`}>
              For UAE-based Institutions, this Privacy Policy is governed exclusively by the laws of Dubai and the UAE, with disputes subject exclusively to Dubai Courts.
            </p>
          </div>

          {/* 13. Dedicated Privacy Contact */}
          <div>
            <h2 className={sectionHeading}>13. Dedicated Privacy Contact</h2>
            <p className={`${body} mt-4`}>
              For privacy-related inquiries, complaints, or to exercise your data protection rights under the UK GDPR or UAE PDPL, please contact our designated Data Protection Officer (DPO):
            </p>

            <div className={`${infoBox} mt-4`}>
              <h3 className="text-base font-semibold text-[var(--brand-text)] mb-3">Data Protection Officer (DPO)</h3>
              <p className="text-[var(--brand-muted)] text-sm">ExAIm Limited</p>
              <p className="text-[var(--brand-muted)] text-sm">2 Crossways Business Centre,</p>
              <p className="text-[var(--brand-muted)] text-sm">Bicester Road, Kingswood,</p>
              <p className="text-[var(--brand-muted)] text-sm">Aylesbury, HP18 0RA,</p>
              <p className="text-[var(--brand-muted)] text-sm mb-3">United Kingdom</p>
              <p className="text-sm">
                Email: <a href="mailto:privacy@exaim.ai" className={link}>privacy@exaim.ai</a>
              </p>
            </div>

            <p className={`${body} mt-4`}>
              <strong className="text-[var(--brand-text)]">Note:</strong> Our DPO is based in the United Kingdom and manages privacy compliance and inquiries for all jurisdictions, including the UK and UAE.
            </p>
          </div>

          {/* 14. Policy Updates */}
          <div>
            <h2 className={sectionHeading}>14. Policy Updates</h2>
            <p className={`${body} mt-4`}>
              We regularly review and update this policy. Institutions will be notified via email at least 30 days in advance of significant changes.
            </p>
          </div>

          {/* Acceptance */}
          <div className="pt-8 border-t border-[var(--brand-border)]">
            <p className={`${body} text-lg`}>
              By using ExAIm services, Institutions acknowledge and accept this Privacy Policy and our commitment to robust privacy and data protection standards across jurisdictions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
