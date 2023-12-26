import React from 'react'
import styled, { keyframes } from 'styled-components'
import image from './solveig.png'

const animate = () => keyframes`
0%{
    left: 0px;
    transform: scale(1)
}

50%{
    transform: scale(1.5)
}
60% {
    transform: scale(1.5)
}
90% {
    left: 1000px;
    transform: scale(1.5)
}
100%{
    left: 2000px;
    transform: scale(2)
}`

const SolveigContainer = styled.div`
  position: fixed;
  left: 10px;
  top: 90px;
  z-index: 999;
  div {
    animation-name: ${animate};
    animation-duration: 4s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    position: relative;
    &:before {
      content: 'hire vinuey';
      position: absolute;
      top: 130px;
      left: -60px;
      width: 90px;
      height: 30px;
      padding: 10px;
      background: white;
      border: 4px solid black;
      border-radius: 8px;
      line-height: 26px;
    }
  }
  img {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
    border: 3px solid black;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: fill;
  }
`

const Solveig = () => {
  return (
    <SolveigContainer>
      <div>
        <img src={image} />
      </div>
    </SolveigContainer>
  )
}

export { Solveig }
