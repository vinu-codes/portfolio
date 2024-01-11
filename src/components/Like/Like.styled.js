import styled, { keyframes } from 'styled-components'
import { colors } from '@common/Theme'
import { font } from '@common/Theme'

const LikeContainer = styled.div`
  display: flex;
  background: white;
  flex-direction: row;
  max-width: 250px;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 0px 8px 8px 0;
  span {
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: ${colors.lightGrey};
    line-height: 20px;
  }
`

const borderAnimation = keyframes`
  0% {
    border-width: 6px;
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(5.3);
    border-width: 0px;
    opacity: 0;
  }
`

const LikeButton = styled.button.attrs({ className: 'class' })`
  cursor: pointer;
  border: none;
  display: flex;
  flex-grow: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background: ${colors.lightPurple};
  padding: 12px;
  border-radius: 8px 0 0 8px;
  transition: all 0.3s ease-in-out;
  pointer-events: all;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgb(93 95 227);
    opacity: 1;
    transform-origin: center center;
    transform: translate(-50%, -50%) scale(0.1);
    z-index: 1;
  }

  &.animate {
    transform: scale(1.1);
    pointer-events: none;
    &:before {
      animation: ${borderAnimation} cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
      animation-fill-mode: forwards;
    }
    svg {
      transform: scale(1.1);
    }
  }
  span {
    padding: 0;
    margin: 0;
    line-height: 20px;
    font-size: 14px;
    color: ${colors.white};
    position: relative;
    top: 1px;
    font-weight: ${font.thin};
  }
  span.plus {
    font-size: 17px;
    margin-left: 2px;
  }
  svg {
    margin-left: 8px;
  }
  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`
export { LikeContainer, MessageContainer, borderAnimation, LikeButton }
