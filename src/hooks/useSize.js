import { useState, useEffect } from 'react'

// Hook
const useSize = () => {
  const isClient = typeof window === 'object'

  const getSize = () => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  })

  const [windowSize, setWindowSize] = useState(getSize)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getSize())
    }

    window && window.addEventListener('resize', handleResize)
    return () => window && window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line
  }, [])

  return windowSize
}

export { useSize }
