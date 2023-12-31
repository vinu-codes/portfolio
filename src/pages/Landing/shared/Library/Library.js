import React, { useState } from 'react'
import { Dropdown } from '@common/Dropdown/Dropdown'
import { Toggle } from '@common/Toggle'
import { Accordion } from '@common/Accordion'
import { Section } from '@common/Section'
import { Provider as AccordionContainer } from '@common/Accordion'
import { Main } from '@common/Main'
import { Modal } from '@common/Modal'
import { Hero } from '@components/Hero'
import { Slider } from '@common/Slider'
import { Grid, Row, Col } from '@common/Grid'
import styled from 'styled-components'
import { media } from '@common/Theme'

const Container = styled.div`
  .main.library {
    ${media.md`
      height: auto;
    `}
  }
`
const SliderContainer = styled.div`
  width: 100%;
  min-width: 500px;
  display: flex;
  justify-content: center;
`

const Library = () => {
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
    <Container id="library">
      <Hero>
        <Main
          pt={100}
          title="My library"
          className="library"
          subtitle="Component Library"
        ></Main>
        {/* <Dropdown
        options={state.dropdown}
        name="dropdown"
        callback={({ name, value }) => {
          setState({ ...state, [name]: value })
        }}
      /> */}
        {/* <Toggle
        className="toggle"
        value={state.toggle}
        name="toggle"
        callback={handleToggleCallback}
      />
      <AccordionContainer>
        <Accordion name="accordion" title="title 2">
          <p>this is inside accordionv2</p>
        </Accordion>
      </AccordionContainer> */}
        {/* <Modal active={true} title="Modal">
        children
      </Modal> */}

        <SliderContainer>
          <Slider />
        </SliderContainer>
      </Hero>
    </Container>
  )
}

export { Library }
