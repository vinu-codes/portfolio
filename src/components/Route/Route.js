import { useContext } from 'react'
import { NavigationContext } from './Context'

const Route = ({ path, children }) => {
  const [currentPath] = useContext(NavigationContext)

  if (path === currentPath) {
    return children
  }
  return null
}

export { Route }
