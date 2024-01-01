import React from 'react'
import PropTypes from 'prop-types'
import { Group, List, Label, Container, Dot } from './Radio.styled'

const Radio = ({ options, value, callback, label, name }) => {
  const renderOptions = () => {
    if (!options || !options.length) return null

    const result = options.map((option) => {
      return (
        <List
          key={option.label}
          className={option.label === value ? 'active' : ''}
          onClick={() => callback({ name: name, data: option.label })}
        >
          <Dot />
          <span className="label">{option.label}</span>
        </List>
      )
    })
    return <Group>{result}</Group>
  }

  return (
    <Container>
      {label && (
        <Label>
          <h4>{label}</h4>
        </Label>
      )}
      {renderOptions()}
    </Container>
  )
}

Radio.propTypes = {
  label: PropTypes.string,
}

export { Radio }
