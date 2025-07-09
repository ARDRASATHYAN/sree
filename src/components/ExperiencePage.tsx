'use client'

import { useState } from 'react'
import ParticleCanvas from './ParticleField'


// 🔹 Experience Type
type ExperienceProps = {
  role: string
  company: string
  period: string
  description?: string
  screenshot?: string
}

export default function ExperiencePage() {
  const [selected, setSelected] = useState<ExperienceProps | null>(null)

  const experiences: ExperienceProps[] = [
    {
      role: 'HSST Computer Science',
      company: 'Memunda HSS, Vadakara',
      period: '3 Months',
      // description: 'Conducted high school computer science classes and mentored final-year students on project development.',
      screenshot: 'https://img.freepik.com/free-photo/medium-shot-family-hanging-out-jetty_23-2150514805.jpg?semt=ais_hybrid&w=740',
    },
    {
      role: 'HSST Computer Science',
      company: 'BEM Higher Secondary School, Vadakara',
      period: '3 Months',
      // description: 'Taught advanced computer topics and supported ICT integration across classrooms.',
      screenshot: '/screenshots/bem.jpg',
    },
    {
      role: 'Faculty of Computer Science',
      company: 'Velocity Entrance Coaching Center, Vadakara',
      period: '2.5 Years',
      // description: 'Trained over 300+ students for KEAM and other competitive exams, focusing on logic-building and programming basics.',
      screenshot: '/screenshots/velocity.jpg',
    },
    {
      role: 'Faculty of Computer Science',
      company: 'Dr. JPS Entrance Coaching Center',
      period: '1 Year 3 Months',
      // description: 'Developed specialized CS curriculum and handled multiple batches across Koyilandi and Kasaragod branches.',
      screenshot: '/screenshots/jps.jpg',
    },
  ]

  return (
    <div id='experience' className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-16 text-center">
          Professional Experience
        </h1>

        <div className="grid gap-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(exp)}
              className="cursor-pointer group bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-full w-1 bg-cyan-400 rounded-r-sm" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                {exp.screenshot && (
                  <div className="w-full md:w-40 h-28 relative rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={exp.screenshot}
                      alt={exp.company}
                      
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-1">{exp.role}</h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-gray-300 text-sm line-clamp-2">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black border border-white/10 rounded-2xl max-w-3xl w-full p-6 shadow-lg overflow-hidden"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-cyan-400">{selected.role}</h2>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-400 mb-2">
              {selected.company} | {selected.period}
            </p>
            <p className="text-gray-300 mb-4">{selected.description}</p>
            {selected.screenshot && (
              <div className="w-full h-72 relative rounded-md overflow-hidden border border-white/10">
                <img
                  src={selected.screenshot}
                  alt={selected.company}
               
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
