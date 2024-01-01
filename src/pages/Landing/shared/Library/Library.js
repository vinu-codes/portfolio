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
import { Button } from '@common/Button'
import { Link } from '@components/Route'

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

const DottedBox = styled.div`
  border: 2px dashed #cccccc;
  background: rgb(239 239 239);
  padding: 24px;
  display: flex;
  width: 100%;
  ${media.md`
    max-width: calc(100% - 24px);
  `};
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

const slideIn = keyframes`

0% {
  transform: translateX(-100%);

}
100% {
  transform: translateX(0%);
}
`
const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const Panel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  &:not(:only-child) {
    width: 100%;
    ${media.md`
    width: 50%;
  `};
  }
  ${media.md`
    width: 100%;
  `};
  &.detail {
    width: 50%;
    flex-direction: column;
    display: none;
    ${media.md`
      display: flex;
    `}
  }
  h2.detail-title {
    font-size: 20px;
    color: rgb(42, 43, 102);
    margin: 0px 0px 8px;
    font-weight: 700;
  }
  ul.detail-group {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 16px;
  }

  li.detail-item {
    list-style: none;
    animation-name: ${slideIn};
    margin: 0px 0px 8px;
    span {
      font-size: 14px;
      line-height: 21px;
      color: rgb(47 47 47);
    }
  }
  button {
    flex-shrink: 0;
    margin-top: 16px;
    max-width: 200px;
  }
`

const Detail = ({ items, title, link, children }) => {
  const renderItems = () => {
    if (!items || !items.length) return null
    const result = items.map((item, index) => (
      <li className="detail-item" key={index}>
        <span>{item.label}</span>
      </li>
    ))
    return <ul className="detail-group">{result}</ul>
  }

  return (
    <DetailContainer>
      {children && (
        <Panel>
          <DottedBox>{children}</DottedBox>
        </Panel>
      )}
      {!!items && !!title && (
        <Panel className="detail">
          {title && <h2 className="detail-title">{title}</h2>}
          {renderItems()}
          {link && (
            <Button>
              <Link external={true} to="https://github.com/vinu-codes">
                <span>View in Github</span>
              </Link>
            </Button>
          )}
        </Panel>
      )}
    </DetailContainer>
  )
}

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
    <Detail>
      <AccordionContainer>
        <Accordion name="accordion" title="title 2">
          <p>this is inside accordionv2</p>
        </Accordion>
      </AccordionContainer>
    </Detail>
  )

  const toggleComponent = (
    <Detail>
      <Toggle
        className="toggle"
        label="Enable light theme"
        value={state.toggle}
        name="toggle"
        callback={handleToggleCallback}
      />
    </Detail>
  )

  const dropdownComponent = (
    <Detail>
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
