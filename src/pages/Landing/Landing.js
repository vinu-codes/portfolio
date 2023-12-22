import React, { useState } from 'react'
import { Hero } from '@components/Hero'
import { TechRender } from '@components/TechCard'
import { Button } from '@common/Button'
import { Dropdown } from '@common/Dropdown/Dropdown'
import { Toggle } from '@common/Toggle'
import { Accordion } from '@common/Accordion'
import { Content } from '@common/Content'
import { Provider as AccordionContainer } from '@common/Accordion'

const LandingPage = () => {
  const [state, setState] = useState({
    toggle: true,
    dropdown: [
      { label: 'Thor', id: 1, active: false },
      { label: 'Captain America', id: 2, active: false },
      { label: 'Iron Man', id: 3, active: false },
      { label: 'Extra Item', id: 4, active: false },
      { label: 'Extra sdfsdf', id: 5, active: false },
    ],
  })

  const handleToggleCallback = (data) => {
    setState({ ...state, [data.name]: data.value })
  }

  return (
    <div>
      <Hero />
      <TechRender />
      <Button>button</Button>
      <Dropdown
        options={state.dropdown}
        name="dropdown"
        callback={({ name, value }) => {
          setState({ ...state, [name]: value })
        }}
      />
      <Toggle
        className="toggle"
        value={state.toggle}
        name="toggle"
        callback={handleToggleCallback}
      />
      <AccordionContainer>
        <Accordion name="accordion" title="title 2">
          <p>this is inside accordionv2</p>
        </Accordion>
      </AccordionContainer>
      <Content>
        <div>children for content</div>
      </Content>
    </div>
  )
}

export default LandingPage
