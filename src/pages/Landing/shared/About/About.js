import React from 'react'
import { Main } from '@common/Main'
import { Section } from '@common/Section'
import { MobileTech } from './MobileTech'
import { Tech } from './Tech'
import { media } from '@common/Theme'

import styled from 'styled-components'

const aboutMeInfo = [
  `I am a frontend developer with an accounting background and a strong passion
    for technology and coding. My main areas of expertise include HTML, CSS,
    JavaScript, React, and Styled Components. My main goal is to build top-class
    web applications and websites.`,

  `Aside from coding, you'll often find me lifting weights as I enjoy the challenge and discipline of weightlifting, both for physical health and mental well-being, exploring the great outdoors and connecting with nature to unwind.`,
]

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 80px;
  min-height: 1100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .main {
    position: relative;
  }
  ${media.md`
    height: calc(100vh - 90px);
    overflow: hidden;
  `};
`

const About = () => (
  <MainContainer id="about">
    <Main
      className="about"
      subtitle="A bit about me..."
      title="About me"
      info={aboutMeInfo}
      config={{ hasTypeWriter: false }}
    />

    <Tech />
    <MobileTech />
  </MainContainer>
)

export { About }
