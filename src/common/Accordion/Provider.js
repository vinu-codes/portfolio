import React, { createContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { StateView } from '@common/StateView'
const Context = createContext()

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Provider = ({ children }) => {
  const enableStateView = false
  const [state, setState] = useState([])
  return (
    <Wrapper className="accordion-wrapper">
      <Context.Provider value={[state, setState]}>{children}</Context.Provider>
      {enableStateView && <StateView state={{ state }} />}
    </Wrapper>
  )
}

export { Provider, Context }
