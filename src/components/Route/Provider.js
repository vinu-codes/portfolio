import { useState, useEffect } from 'react'
import { NavigationContext } from './Context'

const Provider = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener('popstate', handler)

    return () => {
      window.removeEventListener('popstate', handler)
    }
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setCurrentPath(to)
  }

  return (
    <NavigationContext.Provider value={[currentPath, navigate]}>
      {children}
    </NavigationContext.Provider>
  )
}

export { Provider }
