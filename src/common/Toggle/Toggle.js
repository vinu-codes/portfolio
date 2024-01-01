import React from 'react'
import styled from 'styled-components'
import { colors } from '@common/Theme'
import { font } from '@common/Theme'

const ToggleWrapper = styled.div`
  max-width: 120px;

  position: relative;
`

const ToggleContainer = styled.label`
  position: absolute;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background: ${colors.lightPurple};
    &:before {
      left: 27px;
    }
  }

  &:focus + span {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`

const ToggleSlider = styled.span`
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

const Label = styled.div`
  h4 {
    font-size: 16px;
    color: ${colors.navyBlue};
    margin: 0 0 8px 0;
    font-weight: ${font.bold};
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`

const Toggle = ({ callback, name, label, value }) => {
  const handleChange = (e) => {
    callback({ value: e.target.checked, name })
  }

  return (
    <Container>
      {label && (
        <Label>
          <h4>{label}</h4>
        </Label>
      )}
      <ToggleWrapper tabIndex={0}>
        <ToggleContainer className="toggle-container">
          <Input value={value} onChange={handleChange} type="checkbox" />
          <ToggleSlider className="ToggleSlider" />
        </ToggleContainer>
      </ToggleWrapper>
    </Container>
  )
}

export { Toggle }
