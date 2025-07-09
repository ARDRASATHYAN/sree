'use client'


import ParticleCanvas from './ParticleField'

// 🎇 Particle background

export default function ProjectDetailsPage() {
  return (
    <div id='projects' className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-br from-black to-gray-500 via-gray-900 text-white">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas/>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-12 text-center">My Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project Card 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">Ostellu</h2>
            <p className="text-gray-300 mb-2">An Hostel Manegement System</p>
            <p className="text-sm text-gray-400">Area: Android App Using Android Studio </p>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">Kalika</h2>
            <p className="text-gray-300 mb-2">The project entitled "KALIKA" is an web application.This online shopping platform is
created for disabled people to showcase products made by them so that buyers can buy it from the
portal. </p>
            <p className="text-sm text-gray-400">Area: Web Development Using Advance Java </p>
          </div>

           <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold text-cyan-300 mb-2">Emotion Mining in Malayalam Online News: A Machine Learning Approach</h2>
            {/* <p className="text-gray-300 mb-2">The project entitled "KALIKA" is an web application.This online shopping platform is
created for disabled people to showcase products made by them so that buyers can buy it from the
portal. </p> */}
            <p className="text-sm text-gray-400">Area: NLP, Machine Learning, Deeping Learning </p>
          </div>

          {/* Add more project cards here */}
        </div>
      </div>
    </div>
  )
}
