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
import styled, { keyframes } from 'styled-components'
import { colors, media } from '@common/Theme'
import { Detail } from '@pages/Landing/shared/Library/Detail'
import { Parallax } from '@components/Parallax'

const Container = styled.div`
  .main.library {
    ${media.md`
      height: auto;
    `}
  }
  .hero {
    min-height: 800px;
    ${media.md`
      min-height: 1100px;
    `};
  }
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
    <Detail
      title="Radio"
      link="https://github.com/vinu-codes/portfolio/blob/main/src/common/Radio/Radio.js"
      items={[
        {
          label:
            'Built with reusability in mind, this component is designed to work across all browsers.',
        },
        {
          label:
            'This is a reusable component, designed from the ground - up, I intentionally hand coded each line',
        },
        {
          label:
            'The component supports conditional rendering of a label, providing additional context or information when needed. This feature ensures flexibility in conveying information alongside the radio options.',
        },
      ]}
    >
      <Radio
        name="radio"
        label="Pick an option"
        options={radioOptions}
        value={state.radio}
        callback={({ name, data }) => {
          setState({ ...state, [name]: data })
        }}
      />
    </Detail>
  )

  const accordionExample = (
    <Detail
      title="Accordion"
      items={[
        {
          title: '',
          label:
            'This accordion component provides an intuitive and space-efficient interface whilst elevating the developers experience through its reusable, customizable, and well-documented design. Its adoption can significantly expedite the development of interactive and collapsible sections within React applications.',
        },
        {
          title: '',
          label:
            'Developers can integrate the accordion effortlessly into their projects by importing the component and configuring it through props. The simplicity of the API contributes to a smooth onboarding process for new developers.',
        },
        {
          title: 'Developer Notes',
          label:
            'When a user selects any of these accordion headers, the component will pick up the name passed to the specified accordion you clicked. It will then use this name as an identifier on the provider state. This allows for better developer experience when adding additional Accordion items. This moves away from relying on an array format, instead they can simply pass children to the Accordion Provider and fill in the name property.',
        },
      ]}
      link="https://github.com/vinu-codes/portfolio/blob/main/src/common/Accordion/Accordion.js"
    >
      <AccordionContainer>
        <Accordion name="accordion-abc" title="Accordion Item 1">
          <p>
            These are the details of the content. You can find more in-depth
            information here.
          </p>
        </Accordion>
        <Accordion name="accordion-efg" title="Accordion Item 2">
          <p>
            These are the details of the content. You can find more in-depth
            information here.
          </p>
        </Accordion>
        <Accordion name="accordion-hij" title="Accordion Item 3">
          <p>
            These are the details of the content. You can find more in-depth
            information here.
          </p>
        </Accordion>
      </AccordionContainer>
    </Detail>
  )

  const toggleComponent = (
    <Detail
      title="Toggle"
      items={[
        {
          label:
            'This toggle component is reusable and can be integrated into different parts of the application, providing a consistent user interface for controlling binary options. ',
        },
        {
          label:
            'The core of this toggle component is an input element with the type attribute set to checkbox. This choice enables straightforward state manangement allowing the component to toggle between its "on" and "off" states.',
        },
        {
          label:
            'The component is equipped with a callback functionality that allows the parent component to manage the state, that gets invoked upon a state change. This function enables seamless integration with other parts of the application, allowing the toggle component to only focus on rendering and styling based on the provided props.',
        },
      ]}
      link="https://github.com/vinu-codes/portfolio/blob/main/src/common/Toggle/Toggle.js"
    >
      <Toggle
        className="toggle"
        label="Enable"
        value={state.toggle}
        name="toggle"
        callback={handleToggleCallback}
      />
    </Detail>
  )

  const dropdownComponent = (
    <Detail
      title="Dropdown"
      link="https://github.com/vinu-codes/portfolio/blob/main/src/common/Dropdown/Dropdown.js"
      items={[
        {
          label:
            'This Dropdown component was developed from scratch, starting out with a basic sketch. It is a fully comprehensive reusable component.',
        },
        {
          label:
            'It supports a dynamic list of options, allowing users to choose from a set of predefined values.',
        },
        {
          label:
            'It is highly customizable, enabling developers to modify the appearance, styling, and behavior of the dropdown to suit the specific requirements of their project.',
        },
        {
          label:
            'The component adheres to accessibility standards, ensuring that users with disabilities can interact with it using assistive technologies. Key considerations have been taken into account to facilitate interaction with assistive technologies. These considerations include: tabIndex: The tabIndex attribute has been strategically set to allow users to navigate through interactive elements on the page using the keyboard. ',
        },
        {
          label:
            'The component is designed to be responsive, providing an optimal user experience across various screen sizes and devices. The dropdown supports keyboard navigation for enhanced usability. Users can use arrow keys to navigate through the list of options, press Enter to select an option, and Esc to close the dropdown.',
        },
      ]}
    >
      <Dropdown
        options={state.dropdown}
        name="dropdown"
        callback={({ name, value }) => {
          setState({ ...state, [name]: value })
        }}
      />
    </Detail>
  )

  return (
    <Container id="library">
      <Hero>
        <Main
          pt={100}
          title="Library"
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
