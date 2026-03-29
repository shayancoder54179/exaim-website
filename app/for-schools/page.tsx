'use client'

import { motion } from 'framer-motion'
import {
  Users,
  BookOpen,
  Shield,
  Upload,
  Eye,
  GraduationCap,
  CreditCard,
  Headphones,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AdminDashboardMockup from '@/components/mockups/AdminDashboardMockup'
import ZohoContactForm from '@/components/ZohoContactForm'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

const benefits = [
  { icon: Users, title: 'Zero cost for class students', desc: 'Students enrolled by teachers always get free access.' },
  { icon: BookOpen, title: 'British curriculum aligned', desc: 'GCSE, IGCSE, AQA, and Edexcel support built in.' },
  { icon: Eye, title: 'School admin dashboard', desc: 'Full visibility across classes, teachers, and student performance.' },
  { icon: Shield, title: 'Content moderation & safety', desc: 'AI content is moderated. Students are never exposed to inappropriate material.' },
  { icon: Upload, title: 'Bulk CSV onboarding', desc: 'Add hundreds of students and teachers in minutes.' },
  { icon: GraduationCap, title: 'AI grading with vision', desc: 'AI reads images in student answers for richer feedback.' },
  { icon: Headphones, title: 'Dedicated pilot support', desc: 'Our team helps you set up and run your pilot.' },
  { icon: CreditCard, title: 'Flexible invoicing', desc: 'Schools are invoiced via bank transfer. No credit card required.' },
]

const steps = [
  { n: '01', title: 'Book a demo call', desc: 'Talk to our team about your school\'s needs.' },
  { n: '02', title: 'We provision your school', desc: 'Onboard teachers and students via CSV in minutes.' },
  { n: '03', title: 'Teachers create classes', desc: 'Students get free access automatically.' },
  { n: '04', title: 'Track performance', desc: 'Monitor progress from your admin dashboard.' },
]

export default function ForSchoolsPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="container-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-brand-text tracking-tight">
              Transform exam prep across your school
            </h1>
            <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
              Deploy ExAIm in minutes. Class students get free access. Teachers get powerful AI tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="container-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '5,000+', label: 'Students' },
              { value: '20+', label: 'Schools' },
              { value: '300+', label: 'Pre-built Exams' },
              { value: '£0', label: 'For class students' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-5 text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-brand-text">{stat.value}</p>
                <p className="text-sm text-brand-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding border-t border-brand-border/50">
        <div className="container-wrapper">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text">
              Built for schools, not just students
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card-hover p-5"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-400/10 flex items-center justify-center mb-3">
                  <b.icon className="w-4.5 h-4.5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-semibold text-brand-text mb-1">{b.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Dashboard Mockup */}
      <section className="section-padding-sm">
        <div className="container-wrapper max-w-4xl">
          <motion.div {...fadeUp}>
            <AdminDashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding border-t border-brand-border/50">
        <div className="container-wrapper">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text">
              How it works
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-5"
              >
                <span className="text-xs font-mono text-indigo-400 mb-3 block">{step.n}</span>
                <h3 className="text-sm font-semibold text-brand-text mb-1.5">{step.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding-sm">
        <div className="container-wrapper max-w-3xl">
          <motion.div {...fadeUp} className="glass-card p-8 md:p-12 text-center">
            <blockquote>
              <p className="text-lg md:text-xl text-brand-text leading-relaxed italic">
                &ldquo;Significantly enhanced my teaching process. Excited to continue using it.&rdquo;
              </p>
            </blockquote>
            <div className="mt-6">
              <p className="text-sm font-medium text-brand-text">Steve Porter</p>
              <p className="text-sm text-brand-muted">Head of Business & Economics, Tanglin Trust Singapore</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section id="demo-form" className="section-padding border-t border-brand-border/50">
        <div className="container-wrapper max-w-xl">
          <motion.div {...fadeUp} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text">
              Request a demo
            </h2>
            <p className="mt-3 text-sm text-brand-muted">
              Tell us about your school and we&apos;ll be in touch within 24 hours.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="glass-card p-6 md:p-8">
            <ZohoContactForm />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}
