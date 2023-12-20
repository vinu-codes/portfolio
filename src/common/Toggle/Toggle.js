import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  width: 120px;
  height: 120px;
  position: relative;
`

const Container = styled.label`
  position: absolute;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background: rgb(42, 43, 102);
    &:before {
      left: 27px;
    }
  }

  &:focus + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 25px;
  background: grey;
  border-radius: 100px;
  transition: background 0.5s;
  &:before {
    content: '';
    position: absolute;
    height: 21px;
    width: 21px;
    left: 2px;
    top: 2px;
    border-radius: 21px;
    background: white;
    transition: left 0.2s;
  }
`
const Toggle = ({ callback, name, value }) => {
  const handleChange = (e) => {
    callback({ value: e.target.checked, name })
  }

  return (
    <Wrapper tabIndex={0}>
      <Container className="toggle-container">
        <Input value={value} onChange={handleChange} type="checkbox" />
        <Slider className="slider" />
      </Container>
    </Wrapper>
  )
}

export { Toggle }
