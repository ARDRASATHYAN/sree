'use client'



import useScrollToHash from '@/hooks/useScrollToHash'
import ParticleCanvas from './ParticleField'





  

// Certificate Card Component
const CertificateCard = ({
  title,
  issuer,
  date,
  link,
}: {
  title: string
  issuer?: string
  date?: string
  link?: string
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition shadow-md backdrop-blur-md"
  >
    <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
    <p className="text-sm text-gray-400">{issuer}</p>
    <p className="text-xs text-gray-500">{date}</p>
  </a>
)

export default function Certificates() {
    useScrollToHash()
//     const location = useLocation()

//   useEffect(() => {
//     if (location.hash === '#achievement') {
//       const el = document.getElementById('achievement')
//       if (el) el.scrollIntoView({ behavior: 'smooth' })
//     }
//   }, [location])
  return (
    <div id='achievement' className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-br from-black to-gray-500 via-gray-900 text-white">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
       <ParticleCanvas/>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-cyan-400">ACHIEVEMENTS </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CertificateCard
            title="Chief Ministers Student Excellence Award 2022. "
            // issuer="Coursera"
            // date="May 2024"
            // link="https://example.com/react-certificate"
          />
          <CertificateCard
            title="First Rank Holder MG University in MSc Computer Science "
            // issuer="freeCodeCamp"
            // date="March 2023"
            // link="https://example.com/js-certificate"
          />
          <CertificateCard
            title=" Bharat Scout And Guides RASHTRAPATHI AWARD"
            // issuer="Udemy"
            // date="August 2023"
            // link="https://example.com/threejs"
          />
          <CertificateCard
            title="Certificate from IIT Kharagpur in PROBLEM SOLVING
THROUGH PROGRAMMING IN C."
            // issuer="Codecademy"
            // date="January 2024"
            // link="https://example.com/typescript"
          />
          <CertificateCard
            title="Certificate from JOHNS HOPKINSUNIVERSITY in
HTML,CSs, and Javascript for Web Developers"
            // issuer="Codecademy"
            // date="January 2024"
            // link="https://example.com/typescript"
          />
          <CertificateCard
            title="NCC C Certificate holder."
            // issuer="Udemy"
            // date="August 2023"
            link="https://example.com/threejs"
          />
        </div>
      </div>
    </div>
  )
}
