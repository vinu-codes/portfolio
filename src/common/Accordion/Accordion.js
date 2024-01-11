import React from 'react'
import {
  AccordionContainer,
  AccordionHeader,
  AccordionExpander,
  AccordionContent,
  IconContainer,
} from './Accordion.styled'
import { Context } from './Provider'
import { useContext } from 'react'
import { Icon } from '@common/Icon'
import { getActiveItem, checkForNameOnArray } from './utils'

const updateArrayByName = (state, name) => {
  console.log(state)
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
      setState([...state, { name, value: false }])
    }
  }

  const isActive = getActiveItem(state, name)

  return (
    <AccordionContainer className={isActive ? 'container active' : 'container'}>
      <AccordionHeader className="header" onClick={() => handleSelect(name)}>
        {title && <span>{title}</span>}
        <IconContainer mr={8}>
          <Icon name="CHEVRON" rotate={isActive ? 180 : 0} />
        </IconContainer>
      </AccordionHeader>
      <AccordionExpander>
        <AccordionContent className="content">{children}</AccordionContent>
      </AccordionExpander>
    </AccordionContainer>
  )
}

export { Accordion }
