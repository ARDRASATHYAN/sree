'use client'

import { useRef, useMemo } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const count = 1000
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 40
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(t + i) * 0.001
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
                  attach="attributes-position"
                  count={particles.length / 3}
                  array={particles}
                  itemSize={3}    args={[particles, 3]}    />
      </bufferGeometry>
      <pointsMaterial
        color="#00ffff"
        size={0.1}
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  )
}

export default function ParticleCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight />
      <ParticleField />
    </Canvas>
  )
}
