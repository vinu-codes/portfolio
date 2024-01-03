import React from 'react'
import { Main } from '@common/Main'
import { Section } from '@common/Section'
import { MobileTech } from './MobileTech'
import { Tech } from './Tech'
import { media } from '@common/Theme'
import styled, { css } from 'styled-components'

const aboutMeInfo = [
  `I’m a front end developer with a strong passion for building web applications. I specialize in JavaScript, HTML, CSS, React, and Styled Components, with the goal of building scalable applications that meet the demands of todays' users. 
  `,
  `
  I enjoy solving complex problems and thinking outside the box. Web development serves as the perfect playground for me to embrace these challenges while expressing my creativity, turning each project into a unique and fulfilling journey. `,
  `In my spare time I find joy in hitting the gym for weightlifting sessions, playing music and immersing myself in new experiences, particularly in nature.`,
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
  background: ${(props) => props.theme.colors.white};
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
      title="Just me"
      info={aboutMeInfo}
      config={{ hasTypeWriter: false }}
    />

    <Tech />
    <MobileTech />
  </MainContainer>
)

export { About }
