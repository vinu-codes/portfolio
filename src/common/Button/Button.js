import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.button`
  border: none;
  cursor: pointer;
  background: #6a6cff;
  color: white;
  display: flex;
  padding: 12px 14px 12px 14px;
  border-radius: 26px;
  border: 2px solid transparent;
  align-items: center;
  transition: all 0.2s ease-in;

  span {
    font-size: 16px;
    font-weight: 500;
    color: white;
  }

  &:hover {
    background: white;
    border: 2px solid #6a6cff;
    span {
      color: #6a6cff;
    }

    .ARROW {
      path {
        stroke: #6a6cff;
      }
    }
  }
`

const Button = ({ onClick, children }) => {
  return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
}

export { Button }
