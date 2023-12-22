import { useContext } from 'react'
import { Context } from './Context'

const Route = ({ path, children }) => {
  const { currentPath } = useContext(Context)

  if (path === currentPath) {
    return children
  }
  return null
}

export { Route }
