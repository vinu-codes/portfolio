import React from 'react'
import { Main } from '@common/Main'
import { Section } from '@common/Section'

const aboutMeInfo = `I am a frontend developer with an accounting background and a strong passion
    for technology and coding. My main areas of expertise include HTML, CSS,
    JavaScript, React, and Styled Components. My main goal is to build top-class
    web applications and websites.`

const About = () => (
  <Section id="about">
    <Main
      subtitle="A bit about me..."
      title="About me"
      info={aboutMeInfo}
      config={{ hasTypeWriter: false }}
    />
  </Section>
)

export { About }
