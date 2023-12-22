import React, { useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Icon } from '@common/Icon'
import { colors } from '@common/Theme'
import { TechLogo } from '@components/TechCard/TechLogo'
import { media } from '@common/Theme'
import { Button } from '@common/Button'

const animate = () => keyframes`
0% {
  transform: translateX(calc(-50% + 0px));
}
100% {
  transform: translateX(calc(-50% + 6px));
}`

const animateCancel = () => keyframes`
0% {
  transform: translateX(calc(-50% + 0px));
}
100% {
  transform: translateX(calc(-50% + 0px));
}`

const animateChevron = () => {
  return keyframes`
    0% {
      transform: scale(1.1)
    }
    100% {
      transform: scale(1)
    }
  `
}

const Blade = styled.div`
  height: 100%;
  &:before {
    content: '';
    position: absolute;
    left: -28px;
    top: 50%;
    height: 64px;
    cursor: pointer;
    transform: translateY(-50%);
    width: 12px;
    border-radius: 8px;
    background: ${colors.lightPurple};
    animation: ${animate} 0.5s ease-in-out infinite alternate;
  }

  &:hover {
    &:before {
      animation-play-state: paused;
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      display: none;
    `};
`

const TechContainer = styled.div`
  position: absolute;
  right: -500px;
  top: 0;
  width: 500px;
  background: transparent;
  border-left: 3px solid ${colors.lightPurple};
  height: 100%;
  transition: all 0.3s ease-in-out;
  display: none;
  box-shadow: -3px 0px 9px 0px rgba(0, 0, 0, 0.16);
  background: white;
  ${media.md`
    display: block;
  `};

  ${(props) =>
    props.isActive &&
    css`
      right: 0;
      &:before {
        display: none;
      }
    `}
`

const Header = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 72px;
`

const CloseButton = styled.button`
  position: absolute;
  left: 16px;
  top: 16px;
  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`
const TechGroup = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button.tech-button {
    animation: ${animateChevron} 0.5s ease-in-out infinite alternate;
  }
`

const TechItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  height: 150px;
  width: 150px;
  padding: 16px 16px 8px 16px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 16px;
  position: relative;
  transition: all 0.3s ease-in-out;
  span {
    font-size: 16px;
    color: ${colors.lightGrey};
    text-align: center;
    width: 100%;
    margin-top: 8px;
  }
  svg {
    max-height: 150px;
    max-width: 150px;
    width: 100%;
    height: 100%;
  }
  img {
    max-height: 150px;
    max-width: 150px;
    width: 100%;
    height: 100%;
  }
  ${(props) =>
    props.isActive &&
    css`
      z-index: 99;
    `};
  ${(props) =>
    props.color &&
    css`
      border: 4px solid ${props.color};
    `}
`

const items = [
  { label: 'JS', color: 'rgb(233 202 51)', name: 'JS_GRAPHIC' },
  { label: 'HTML', color: 'rgb(227 80 36)', name: 'HTML_GRAPHIC' },
  { label: 'CSS', color: '#1c74ba', name: 'CSS_GRAPHIC' },
  { label: 'React', color: '#62dafb', name: 'REACT_GRAPHIC' },
  { label: 'Styled', color: '#ae579c', name: 'STYLED_GRAPHIC' },
  { label: 'Git', color: '#f13d2d', name: 'GIT_GRAPHIC' },
]

const Tech = () => {
  const [isExpanded, setExpanded] = useState(true)
  const [imageIndex, setImageIndex] = useState(0)

  const handleExpand = () => {
    setExpanded(!isExpanded)
  }

  const handleClick = () => {
    if (imageIndex === items.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  const renderTech = () => {
    if (!items || !items.length) return null
    const result = items.map((item, index) => (
      <TechItem
        style={{
          transform: `translateY(${-100 * imageIndex}%)`,
        }}
        color={item.color}
        key={index}
      >
        <TechLogo name={item.name} />
        <span>{item.label}</span>
      </TechItem>
    ))
    return (
      <TechGroup>
        {result}
        <Button className="tech-button" onClick={handleClick}>
          <Icon name="CHEVRON" rotate={-180} fill="white" />
        </Button>
      </TechGroup>
    )
  }

  return (
    <TechContainer isActive={isExpanded}>
      <Blade onClick={handleExpand} isActive={isExpanded} />
      <Header>
        <CloseButton onClick={handleExpand}>
          <Icon size={32} name="CLOSE" stroke={colors.lightPurple} />
        </CloseButton>
      </Header>
      {renderTech()}
    </TechContainer>
  )
}

export { Tech }
