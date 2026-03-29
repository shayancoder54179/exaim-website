'use client'

import { motion } from 'framer-motion'
import { Heart, Lightbulb, Users, Star, Globe, Shield } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

const timeline = [
  {
    year: '2010',
    title: 'Improve ME Institute Founded',
    desc: 'An award-winning after-school centre in the UAE, growing to 1,000+ students and 40 tutors.',
  },
  {
    year: '2015–2020',
    title: 'Recognising the Challenge',
    desc: 'Years of firsthand experience witnessing the struggles students and teachers face with exam preparation.',
  },
  {
    year: '2021',
    title: 'The Vision Takes Shape',
    desc: 'The concept for ExAIm emerges — using AI to make examiner-quality feedback accessible to every student.',
  },
  {
    year: '2022',
    title: 'Building the Platform',
    desc: 'Development begins on the ExAIm platform, combining AI grading, question generation, and a personal tutor.',
  },
  {
    year: '2023',
    title: 'ExAIm Launches',
    desc: 'ExAIm goes live, serving students and teachers across British curriculum schools.',
  },
]

const values = [
  { icon: Heart, title: 'Student-Centered', desc: 'Every feature starts with the student experience. We build tools that help students learn, not just pass exams.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'We use the latest AI to solve real problems in education — from instant grading to personalised tutoring.' },
  { icon: Users, title: 'Empowerment', desc: 'We empower teachers with tools that amplify their impact, not replace them.' },
  { icon: Star, title: 'Excellence', desc: 'We hold ourselves to the same standard as the examiner-level feedback we deliver to students.' },
  { icon: Globe, title: 'Accessibility', desc: 'Class students are always free. Quality exam preparation should not be gated by cost.' },
  { icon: Shield, title: 'Integrity', desc: 'Student data is encrypted, content is moderated, and privacy is non-negotiable.' },
]

const team = [
  {
    name: 'Iqbal Munshi',
    role: 'Teacher & Educational Advisor',
    bio: 'With over 30 years of teaching experience, Iqbal brings deep insights into the challenges teachers and students face in exam preparation.',
    initials: 'IM',
  },
  {
    name: 'Shaun Daswani',
    role: 'Founder & CEO',
    bio: 'Shaun was once Iqbal\'s student. This experience inspired him to create ExAIm, combining his background in mathematics and economics with a deep understanding of educational needs.',
    initials: 'SD',
  },
  {
    name: 'Jason Daswani',
    role: 'COO & Product Lead',
    bio: 'Jason brings expertise in product development and technology, ensuring ExAIm delivers a seamless, powerful platform that teachers and students can rely on.',
    initials: 'JD',
  },
]

export default function OurStoryPage() {
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
              Our story
            </h1>
            <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto">
              From an after-school centre in the UAE to an AI-powered platform serving schools worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20">
        <div className="container-wrapper max-w-2xl">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-brand-border" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-indigo-600 border-2 border-brand-bg" />
                  <span className="text-xs font-mono text-indigo-400 mb-1 block">{item.year}</span>
                  <h3 className="text-base font-semibold text-brand-text mb-1">{item.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding-sm border-y border-brand-border/50">
        <div className="container-wrapper max-w-4xl text-center">
          <motion.div {...fadeUp}>
            <p className="text-sm font-medium text-indigo-400 mb-4">Our mission</p>
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-brand-text leading-relaxed">
              &ldquo;To revolutionize exam preparation by making examiner-quality feedback accessible to every student, empowering teachers with powerful tools, and transforming how schools prepare students for success.&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-wrapper">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text">Our values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card p-6"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-400/10 flex items-center justify-center mb-3">
                  <v.icon className="w-4.5 h-4.5 text-indigo-400" />
                </div>
                <h3 className="text-sm font-semibold text-brand-text mb-1.5">{v.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding border-t border-brand-border/50">
        <div className="container-wrapper">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text">The team</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-5">
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-lg font-semibold text-white mx-auto mb-4">
                  {person.initials}
                </div>
                <h3 className="text-base font-semibold text-brand-text">{person.name}</h3>
                <p className="text-xs text-indigo-400 mb-3">{person.role}</p>
                <p className="text-sm text-brand-muted leading-relaxed">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section-padding-sm border-t border-brand-border/50">
        <div className="container-wrapper">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '1,000+', label: 'Students at Improve ME' },
              { value: '40+', label: 'Tutors' },
              { value: '30+', label: 'Years Experience' },
              { value: 'Award-Winning', label: 'Institute' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center p-4"
              >
                <p className="text-2xl md:text-3xl font-bold text-brand-text">{stat.value}</p>
                <p className="text-sm text-brand-muted mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
