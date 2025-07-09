'use client'

import { GraduationCap } from 'lucide-react'
import ParticleCanvas from './ParticleField'


const educationData = [
  {
    institution: 'School Of Computer Sciences Mahatma Gandhi University Kerala',
    degree: 'MASTER OF SCIENCE ',
    duration: '2021- 2023 ',
    description: '86.3%',
  },
  {
    institution: 'Farook College, Calicut University Kerala',
    degree: 'BACHELOR OF SCIENCE ',
    duration: '2018- 2021 ',
    description: '88%',
  },
  {
    institution: 'Memunda HSS Kozhikode Kerala ',
    degree: 'SECONDARY SCHOOL ',
    duration: '2016-2018 ',
    description: '97.58% ',
  },
]

export default function EducationPage() {
  return (
    <div id='educations' className="relative min-h-screen w-full overflow-hidden text-white font-sans bg-gradient-to-br from-black to-gray-500 via-gray-900">
      {/* 🔹 Animated Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* 🔹 Foreground Content */}
      <div className="relative z-10 px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-cyan-400 mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap size={32} /> Education
          </h1>

          <div className="space-y-10">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="relative border-l-4 border-cyan-500 pl-6 py-4 bg-white/5 backdrop-blur-md rounded-md shadow-md"
              >
                <div className="absolute left-[-10px] top-5 w-4 h-4 bg-cyan-400 rounded-full border-2 border-white" />
                <h2 className="text-xl font-semibold text-cyan-300">{edu.institution}</h2>
                <p className="text-sm text-gray-400">{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.duration}</p>
                <p className="mt-2 text-white">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
