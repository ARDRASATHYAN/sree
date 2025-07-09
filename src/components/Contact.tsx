'use client'


import ParticleCanvas from './ParticleField'
import emailjs from 'emailjs-com'

// Particle Background
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  e.target as HTMLFormElement,
  import.meta.env.VITE_EMAILJS_USER_ID
)

    .then(() => {
      alert('Message sent successfully!')
    })
    .catch((err) => {
      alert('Failed to send message: ' + err.text)
    })
}

// Contact Page Component
export default function Contact() {
  
  return (
    <div id='contact' className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-br from-black to-gray-500 via-gray-900  text-white">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
       <ParticleCanvas/>
      </div>

      {/* Foreground */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10">Get in Touch</h1>

        <form 
          onSubmit={handleSubmit}  className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm shadow-md space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name" name='from_name'
              className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email" name='from_email'
              placeholder="sreevishnu1008@gmail.com"
              className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Type your message..." name='message'
              className="w-full px-4 py-2 rounded-md bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-6 bg-cyan-400 hover:bg-cyan-600 rounded-md text-white font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
