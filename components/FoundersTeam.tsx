'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, User, Code } from 'lucide-react'

const teamMembers = [
  {
    name: 'Iqbal Munshi',
    role: 'Teacher & Educational Advisor',
    icon: GraduationCap,
    description: 'With over 30 years of teaching experience, Iqbal Munshi brings deep insights into the challenges teachers and students face in exam preparation. His expertise in understanding exam-related issues and educational methodologies has been instrumental in shaping ExAIm\'s approach to helping students succeed.',
    color: 'from-blue-50 to-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    name: 'Shaun Daswani',
    role: 'Founder & CEO',
    icon: User,
    description: 'Shaun was once Iqbal Munshi\'s student, learning firsthand about the struggles students face during exam preparation. This experience inspired him to create ExAIm, combining his background in mathematics and economics with a deep understanding of educational needs to revolutionize how students prepare for exams.',
    color: 'from-green-50 to-green-100',
    iconColor: 'text-green-600',
  },
  {
    name: 'Jason Daswani',
    role: 'COO & Product Lead',
    icon: Code,
    description: 'Jason brings a strong understanding of product development and technology. His expertise in translating educational needs into innovative tech solutions ensures that ExAIm delivers a seamless, powerful platform that teachers and students can rely on.',
    color: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-600',
  },
]

export default function FoundersTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="container-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Our Story
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 lg:mb-20 max-w-2xl mx-auto leading-relaxed">
            Meet the team behind ExAIm and learn how their unique backgrounds came together to transform exam preparation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${member.color} rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all flex flex-col h-full`}
                >
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md ${member.iconColor}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">{member.name}</h3>
                  <p className={`font-semibold mb-4 text-center ${member.iconColor}`}>{member.role}</p>
                  <p className="text-gray-700 leading-relaxed flex-grow">{member.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

