import React, { useContext } from 'react'
import { Context } from './Provider'
import {
  AccordionContainer,
  AccordionExpander,
  AccordionHeader,
} from './Accordion.styled'
// accordion with {}

const Accordion = ({ title, name = 'acc1', children }) => {
  const [state, setState] = useContext(Context)

  const handleSelect = (name) => {}

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => handleSelect(name)}>
        {title}
      </AccordionHeader>
      <AccordionExpander>{children}</AccordionExpander>
    </AccordionContainer>
  )
}

export { Accordion }
