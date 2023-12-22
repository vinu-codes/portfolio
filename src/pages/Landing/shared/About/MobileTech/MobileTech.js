import React from 'react'
import { Section } from '@common/Section'
import { TechRender } from '@components/TechCard'
import styled from 'styled-components'
import { media } from '@common/Theme'

const MobileTechContainer = styled.div`
  display: block;
  ${media.sm`
    display: none;
  `};
`

const MobileTech = () => (
  <MobileTechContainer>
    <TechRender />
  </MobileTechContainer>
)

export { MobileTech }
