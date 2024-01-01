import React, { useState } from 'react'
import { Group, List, Heading } from './Radio.styled'

const Radio = ({ options, value, callback, name }) => {
  const renderOptions = () => {
    if (!options || !options.length) return null

    const result = options.map((option) => {
      return (
        <List
          isActive={option.label === value}
          onClick={() => callback({ name: name, data: option.label })}
        >
          <span> {option.label}</span>
        </List>
      )
    })
    return <Group>{result}</Group>
  }

  return (
    <>
      <Heading>
        <span>Pick an option:</span>
      </Heading>
      {renderOptions()}
    </>
  )
}

export { Radio }
