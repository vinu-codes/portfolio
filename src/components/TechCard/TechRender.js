import React from 'react'
import { TechCard } from './TechCard'
import styled from 'styled-components'

const TechGroup = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
  padding-left: 20px;
  max-width: 450px;
  padding-right: 20px;
`

const technologiesCard = [
  { label: 'JS', name: 'JS_GRAPHIC' },
  { label: 'HTML', name: 'HTML_GRAPHIC' },
  { label: 'CSS', name: 'CSS_GRAPHIC' },
  { label: 'React', name: 'REACT_GRAPHIC' },
  { label: 'Styled', name: 'STYLED_GRAPHIC' },
  { label: 'Git', name: 'GIT_GRAPHIC' },
]

const TechRender = () => (
  <TechGroup>
    {technologiesCard.map((tech) => (
      <TechCard key={tech.label} label={tech.label} name={tech.name} />
    ))}
  </TechGroup>
)

export { TechRender }
