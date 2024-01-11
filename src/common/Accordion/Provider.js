import React, { createContext, useState } from 'react'
import styled, { css } from 'styled-components'
import { StateView } from '@common/StateView'
const Context = createContext()

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Provider = ({ children, config }) => {
  const enableStateView = config ? config.enableStateView : false
  const [state, setState] = useState([])
  return (
    <MainWrapper>
      <Wrapper className="accordion-wrapper">
        <Context.Provider value={[state, setState]}>
          {children}
        </Context.Provider>
      </Wrapper>
      {enableStateView && <StateView state={{ state }} />}
    </MainWrapper>
  )
}

export { Provider, Context }
