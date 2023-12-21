import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [state, setState] = useState({})

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  )
}

export { Provider, Context }
