import { colors } from '@common/Theme'
import styled, { css } from 'styled-components'

const SliderContainer = styled.div`
  width: 100%;
  min-width: 370px;
  max-width: 370px;
  height: 300px;
  max-height: 300px;
  position: relative;
  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 10px;
    border: 2px solid ${colors.lightPurple};
    background: ${colors.lightPurple};
    &:hover {
      background: ${colors.lightPurple};
    }
    svg.ICON {
      path {
        fill: white;
      }
    }
    &:focus {
      outline: none;
    }
    &:nth-child(2) {
      left: 10px;
      bottom: 0;
    }
    &:nth-child(3) {
      right: 10px;
      bottom: 0;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`
const SliderBox = styled.ul`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  .slider-box-item {
    width: 100%;
    transition: all 0.4s ease-in-out;
    height: 300px;
    flex-shrink: 0;
    flex-grow: 0;
  }
`

const IconContainer = styled.div`
  svg {
    g {
      path {
        fill: black;
      }
    }
  }
  &.right {
    transform: rotate(90deg);
  }
  &.left {
    transform: rotate(-90deg);
  }
`

const CircleGroup = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  display: flex;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`

const Circle = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 8px;
  border: 2px solid white;
  &:nth-child(1) {
    margin-left: 0;
  }
  ${(props) =>
    props.isActive &&
    css`
      background: white;
    `}
`

export { SliderContainer, SliderBox, IconContainer, CircleGroup, Circle }
