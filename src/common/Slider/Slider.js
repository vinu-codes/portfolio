import React, { useState } from 'react'
import { Icon } from '@common/Icon'
import {
  SliderContainer,
  SliderBox,
  IconContainer,
  CircleGroup,
  Circle,
} from './Slider.styled'

const items = [{ value: <div>hi</div>, label: 'div-hi' }]

const Slider = ({ items }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const handleClick = (index) => {
    setImageIndex(index)
  }

  const handlePrev = () => {
    if (!items || !items.length) return null
    if (imageIndex === 0) {
      setImageIndex(items.length - 1)
    } else {
      setImageIndex(imageIndex - 1)
    }
  }

  const handleNext = () => {
    if (!items || !items.length) return null
    if (imageIndex === items.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  const renderCircles = () => {
    if (!items || !items.length) return null
    const result = items.map((item, index) => (
      <Circle
        onClick={() => handleClick(index)}
        key={index}
        isActive={index === imageIndex}
      />
    ))
    return result
  }

  const renderItems = () => {
    const result = items.map((item) => {
      return (
        <li
          className="slider-box-item"
          key={item.id}
          style={{
            transform: `translateX(${-100 * imageIndex}%)`,
          }}
        >
          {item.value}
        </li>
      )
    })
    return result
  }

  return (
    <SliderContainer className="slider">
      <SliderBox className="slider-box">{renderItems()}</SliderBox>
      <button onClick={handlePrev} className="prev-button">
        <IconContainer className="left">
          <Icon name="CHEVRON" fill={'white'} size={32} />
        </IconContainer>
      </button>
      <button onClick={handleNext} className="next-button">
        <IconContainer className="right">
          <Icon name="CHEVRON" size={32} />
        </IconContainer>
      </button>
      <CircleGroup>{renderCircles()}</CircleGroup>
    </SliderContainer>
  )
}

Slider.defaultProps = {
  items,
}

export { Slider }
