// src/hooks/useScrollToHash.ts
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function useScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1)) // remove #
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
}
