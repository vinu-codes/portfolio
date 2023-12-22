import React from 'react'
import { Section } from '@common/Section'
import { TechRender } from '@components/TechCard'

const Tech = ({ id }) => (
  <Section id={id}>
    <TechRender />
  </Section>
)

export { Tech }
