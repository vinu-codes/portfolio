import React, { useState } from 'react'
import { Dropdown } from '@common/Dropdown/Dropdown'
import { Toggle } from '@common/Toggle'
import { Accordion } from '@common/Accordion'
import { Section } from '@common/Section'
import { Provider as AccordionContainer } from '@common/Accordion'
import { Main } from '@common/Main'
import { Hero } from '@components/Hero'
import { Slider } from '@common/Slider'
import { Radio } from '@common/Radio'
import styled from 'styled-components'
import { media } from '@common/Theme'

const Container = styled.div`
  min-height: 1100px;
  .main.library {
    ${media.md`
      height: auto;
    `}
  }
  .hero {
    min-height: 1100px;
  }
`

const DottedBox = styled.div`
  border: 2px dashed #cccccc;
  background: rgb(239 239 239);
  padding: 24px;
  display: flex;
  max-width: 350px;
  width: 100%;
  justify-content: center;
  border-radius: 8px;
  align-items: flex-start;
`

const aspectRatio = 1.3333

const deviceWidth = {
  sm: 400,
  md: 700,
  lg: 1000,
}

const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .slider {
    background: white;
    border-radius: 8px 8px 0 0;
    transition: all 0.3s ease-in-out;
    ul.slider-box {
      li.slider-box-item {
        padding-top: 32px;
        padding-left: 16px;
        padding-right: 16px;
        display: flex;
        height: 100%;
        justify-content: center;
      }
    }
    ${media.md`
      width: ${deviceWidth.md}px;
      max-width: ${deviceWidth.md}px;
      max-height: calc(${deviceWidth.md}px / ${aspectRatio});
      height: calc(${deviceWidth.md}px / ${aspectRatio});
    `};
    ${media.lg`
      width: ${deviceWidth.lg}px;
      max-width: ${deviceWidth.lg}px;
      max-height: calc(${deviceWidth.lg}px / ${aspectRatio});
      height: calc(${deviceWidth.lg}px / ${aspectRatio});
    `}
  }
`
const radioOptions = [
  { label: 'Option 1', value: 'A', id: 'A' },
  { label: 'Option 2', value: 'B', id: 'B' },
  { label: 'Option 3', value: 'C', id: 'C' },
  { label: 'Option 4', value: 'D', id: 'D' },
]

const Library = () => {
  const [state, setState] = useState({
    toggle: true,
    dropdown: [
      { label: 'Thor', id: 1, active: false },
      { label: 'Captain America', id: 2, active: false },
      { label: 'Iron Man', id: 3, active: false },
    ],
    radio: '',
  })

  const handleToggleCallback = (data) => {
    setState({ ...state, [data.name]: data.value })
  }

  const radioComponent = (
    <DottedBox>
      <Radio
        name="radio"
        label="Pick an option"
        options={radioOptions}
        value={state.radio}
        callback={({ name, data }) => {
          setState({ ...state, [name]: data })
        }}
      />
    </DottedBox>
  )

  const accordionExample = (
    <DottedBox>
      <AccordionContainer>
        <Accordion name="accordion" title="title 2">
          <p>this is inside accordionv2</p>
        </Accordion>
      </AccordionContainer>
    </DottedBox>
  )

  const toggleComponent = (
    <DottedBox>
      <Toggle
        className="toggle"
        label="Enable light theme"
        value={state.toggle}
        name="toggle"
        callback={handleToggleCallback}
      />
    </DottedBox>
  )

  const dropdownComponent = (
    <DottedBox>
      <Dropdown
        options={state.dropdown}
        name="dropdown"
        callback={({ name, value }) => {
          setState({ ...state, [name]: value })
        }}
      />
    </DottedBox>
  )

  return (
    <Container id="library">
      <Hero>
        <Main
          pt={100}
          title="My library"
          className="library"
          subtitle="Component Library"
        ></Main>

        <SliderWrapper>
          <Slider
            items={[
              { value: accordionExample, label: 'Accordion' },
              {
                value: dropdownComponent,
                label: 'Dropdown',
              },
              {
                value: toggleComponent,
                label: 'Toggle',
              },
              {
                value: radioComponent,
                label: 'Radio',
              },
            ]}
          />
        </SliderWrapper>
      </Hero>
    </Container>
  )
}

export { Library }
