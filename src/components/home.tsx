import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'
import ParticleCanvas from './ParticleField'
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa'

const RotatingFrame = ({ direction = 1, color = 'skyblue', frameSize = 6.5 }) => {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.01 * direction
    }
  })

  const frameThickness = 0.3

  return (
    <group ref={groupRef}>
      <mesh position={[0, frameSize / 2, 0]}>
        <planeGeometry args={[frameSize + frameThickness, frameThickness]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[0, -frameSize / 2, 0]}>
        <planeGeometry args={[frameSize + frameThickness, frameThickness]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[-frameSize / 2, 0, 0]}>
        <planeGeometry args={[frameThickness, frameSize]} />
        <meshBasicMaterial color={color} />
      </mesh>
      <mesh position={[frameSize / 2, 0, 0]}>
        <planeGeometry args={[frameThickness, frameSize]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  )
}

export default function Home() {
  return (
    <div
      id="about"
      className="relative w-full h-screen overflow-hidden font-sans bg-gradient-to-br from-gray-500 via-gray-900 to-black text-white"
    >
      {/* Fullscreen Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Foreground UI */}
      <div className="relative z-10 flex flex-col lg:flex-row h-full w-full">
        {/* Left: Rotating Frames + Image */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full  flex items-center justify-center relative">
          <div className="absolute  w-64 h-64 sm:w-64 sm:h-64 lg:w-134 lg:h-134 z-0">
            <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }}>
              <ambientLight />
              <RotatingFrame direction={1} color="skyblue" frameSize={6.5} />
              <RotatingFrame direction={-1} color="lightgreen" frameSize={6.8} />
            </Canvas>
          </div>
          <img
            className="relative z-10 w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg ring-4 ring-white/20"
            src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000"
            alt="Profile"
          />
        </div>

        {/* Right: Text & Social */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center">
          <div className="p-6 sm:p-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-400 mb-4">
              SREEVISHNU KP
            </h1>
            <p className="mb-6 text-sm sm:text-base">
              A self-motivated and hardworking individual seeking an opportunity
              to contribute in a challenging environment where I can apply my
              skills, knowledge, and determination to support the growth of the
              organization.
            </p>

            <a
              href="/CV_Sreevishnu.pdf"
              download
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition-all duration-300"
            >
              Download Resume
            </a>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xl sm:text-2xl text-cyan-400">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sreevishnu@gmail.com"
                className="hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/919856726642"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
