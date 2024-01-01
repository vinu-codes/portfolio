import { colors } from '@common/Theme'
import styled, { css } from 'styled-components'

const SliderContainer = styled.div`
  width: 100%;
  min-width: 370px;
  max-width: 370px;
  height: 300px;
  max-height: 300px;
  position: relative;
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
  display: flex;
  justify-content: center;
  align-items: center;
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

const SliderNavigation = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  height: 100%;
  align-items: center;
`

const CircleGroup = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`

const Circle = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-left: 8px;
  border: 2px solid ${colors.lightPurple};
  &:nth-child(1) {
    margin-left: 0;
  }
  ${(props) =>
    props.isActive &&
    css`
      background: ${colors.lightPurple};
    `}
`

const SliderControl = styled.div`
  position: absolute;
  bottom: -80px;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 0 0 8px 8px;
  display: flex;
  padding: 16px;
  justify-content: space-between;
  z-index: 1;
  button {
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
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

    &:hover {
      svg.ICON {
        path {
          fill: ${colors.lightPurple};
        }
      }
      background: ${colors.white};
    }
  }
`

export {
  SliderContainer,
  SliderBox,
  IconContainer,
  CircleGroup,
  Circle,
  SliderControl,
  SliderNavigation,
}
