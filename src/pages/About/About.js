import React from 'react'
import { Content } from '@common/Content'
import { Grid, Row, Col } from '@common/Grid'
import { Main } from '@common/Main'

const aboutMeInfo = ` I am a frontend developer with an accounting background and a strong passion
    for technology and coding. My main areas of expertise include HTML, CSS,
    JavaScript, React, and Styled Components. My main goal is to build top-class
    web applications and websites.`

const About = () => (
  <Main
    subtitle="A bit about me..."
    title="About Me"
    info={aboutMeInfo}
    config={{ hasTypeWriter: false }}
  ></Main>
)

export { About }
