'use client'

import ParticleCanvas from './ParticleField'

export default function AdditionalInfo() {
  const additionalInfo = [
    {
  title: 'Leadership & Event Coordination',
  detail: [
    'Led the Project Team (2020–21).',
    'Organized and managed ATHARVA 2K20 — the first-ever All Kerala inter-college IT fest in the history of Farook College, Kozhikode, Kerala.'
  ]
},

    {
      title: 'Languages Spoken',
      detail: 'Malayalam,English, Hindi, Tamil',
    },
    
    {
      title: 'Soft Skills',
      detail: 'Teamwork, Time Management, Adaptability, Communication, Active Learning , Problem-Solving , Computer Literacy ',
    },
    
  ]

  return (
    <div id='additionalinfo' className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-br from-gray-500 via-gray-900 to-black  text-white">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Foreground */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          Additional Information
        </h1>

        <div className="space-y-8">
          {additionalInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-md backdrop-blur-md hover:border-cyan-400 transition"
            >
              <h2 className="text-2xl font-semibold text-cyan-300 mb-2">{item.title}</h2>
               {Array.isArray(item.detail) ? (
                <ul className="list-disc list-inside text-white mt-2 space-y-1">
                  {item.detail.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-white">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
