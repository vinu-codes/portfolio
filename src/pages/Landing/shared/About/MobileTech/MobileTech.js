import React from 'react'
import { TechRender } from '@components/TechCard'
import styled from 'styled-components'
import { media } from '@common/Theme'

const MobileTechContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${media.md`
    display: none;
  `};
`

const MobileTech = () => (
  <MobileTechContainer>
    <TechRender />
  </MobileTechContainer>
)

export { MobileTech }
