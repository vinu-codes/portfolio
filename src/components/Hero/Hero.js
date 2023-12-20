import React from 'react'
import styled from 'styled-components'
import image from './assets/bg.svg'

const SectionContainer = styled.div`
  color: #fff;
  background: linear-gradient(
      to right,
      rgba(245, 245, 245, 0.8),
      rgba(245, 245, 245, 0.8)
    ),
    url(${(props) => props.imgSrc});
  background-position: center;
  height: 700px;
  min-height: 700px;
  max-height: 120rem;
  position: relative;
`

const Hero = ({ children }) => {
  return <SectionContainer imgSrc={image}>{children}</SectionContainer>
}

export { Hero }
