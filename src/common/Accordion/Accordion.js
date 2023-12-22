import React from 'react'
import {
  AccordionContainer,
  AccordionHeader,
  AccordionExpander,
  AccordionContent,
} from './Accordion.styled'
import { Context } from './Provider'
import { useContext } from 'react'
import { getActiveItem, checkForNameOnArray } from './utils'

const updateArrayByName = (state, name) => {
  if (!state || !state.length) return []

  const result = state.map((item) => {
    if (item.name === name) {
      return { ...item, value: !item.value }
    }
    return { ...item, value: false }
  })
  return result
}

const Accordion = ({ title, name, children }) => {
  const [state, setState] = useContext(Context)

  const handleSelect = (name) => {
    const findMatch = checkForNameOnArray(state, name)
    if (findMatch) {
      setState(updateArrayByName(state, name))
    } else {
      setState([...state, { name, value: true }])
    }
  }

  const isActive = getActiveItem(state, name)

  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => handleSelect(name)}>
        {title && <span>{title}</span>}
      </AccordionHeader>
      <AccordionExpander isActive={isActive}>
        <AccordionContent>{children}</AccordionContent>
      </AccordionExpander>
    </AccordionContainer>
  )
}

export { Accordion }
