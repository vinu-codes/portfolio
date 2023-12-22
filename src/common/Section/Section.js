import React from 'react'
import styled from 'styled-components'

const SectionContainer = styled.div``

const Section = ({ children, id }) => {
  return <SectionContainer id={id}>{children}</SectionContainer>
}

Section.defaultProps = {
  id: '',
  children: null,
}

export { Section }
