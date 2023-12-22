import { useState, useEffect } from 'react'
import { Context } from './Context'

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
    <Context.Provider value={{ currentPath, navigate }}>
      {children}
    </Context.Provider>
  )
}

export { Provider }
