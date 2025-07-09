'use client'

import ParticleCanvas from './ParticleField'

export default function Skills() {
  const skills = [
    'JavaScript', ' Python ', ' MySQL', 'C++ ',
    'CSS', 'HTML ', 'Java',
    'Git & GitHub', 
  ]

  return (
    <div id='skills' className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-br from-gray-500 via-gray-900 to-black text-white">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Foreground */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-12">My Skills</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-4 text-center shadow-md backdrop-blur-md transition transform hover:scale-105 hover:border-cyan-400"
            >
              <p className="text-lg font-medium text-white">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
