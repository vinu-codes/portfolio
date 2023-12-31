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

  `Aside from coding, you'll often find me: 
    - Lifting Weights: I enjoy the challenge and discipline of weightlifting, both for physical health and mental well-being.
    - Hiking: Exploring the great outdoors and connecting with nature is one of my favorite ways to unwind.`,
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
  ${media.md`
    height: calc(100vh - 90px);
    /* min-height: 1100px; */
    overflow: hidden;
  `};
  .main.about {
    position: relative;
  }
`

const About = () => (
  <MainContainer className="main-container" id="about">
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
