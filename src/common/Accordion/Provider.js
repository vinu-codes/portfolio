import React, { createContext, useState } from 'react'
import { StateView } from '@common/StateView'
const Context = createContext()

const Provider = ({ children }) => {
  const enableStateView = false
  const [state, setState] = useState([])
  return (
    <>
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
      {enableStateView && <StateView state={{ state }} />}
    </>
  )
}

export { Provider, Context }
