import React from 'react'
import { TechRender } from '@components/TechCard'
import styled from 'styled-components'
import { media } from '@common/Theme'

const MobileTechContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  h3 {
    color: rgb(42, 43, 102);
    font-weight: 600;
    font-size: 27px;
    line-height: 48px;
  }
  ${media.md`
    display: none;
  `};
`

const MobileTech = () => (
  <MobileTechContainer>
    <h3>Technologies</h3>
    <TechRender />
  </MobileTechContainer>
)

export { MobileTech }
