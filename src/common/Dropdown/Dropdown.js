import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Wrapper, Group, List, IconContainer, Header } from './Dropdown.styled'
import { Icon } from '@common/Icon'
import { updatedArray, totalSelected } from './utils'

const keyCodes = {
  ENTER: 'Enter',
}

const Dropdown = ({ options, callback, name, ...props }) => {
  const ref = useRef(null)
  const iRuffu = useRef([])
  const elementRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)

    return () => {
      document.removeEventListener('keydown', escFunction, false)
    }
  }, [escFunction])

  useEffect(() => {
    const callback = (e) => {
      const target = e.target
      const wrapperRef = ref.current
      if (wrapperRef && !wrapperRef.contains(target)) {
        setIsOpen(false)
      }
    }
    const body = document.querySelector('body')
    body.addEventListener('click', callback)

    return () => {
      body.removeEventListener('click', callback)
    }
  }, [])

  iRuffu.current = options.map((option, index) =>
    iRuffu.current[index] ? iRuffu.current[index] : React.createRef(),
  )

  const optionsLength = options.length - 1 // 1 (assuming that we have 2 items in the array)

  const onKeyDown = (e) => {
    const key = e.keyCode || e.charCode
    if (key === keyCodes.ENTER || key === 13) {
      if (isOpen) {
        setIsOpen(false)
        return
      }
      setIsOpen(true)
      return
    }
    if (isOpen) {
      if (key === '40' || key === 40) {
        // what is the ?. in javascript ? it's called optional chaining
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

        if (iRuffu && iRuffu?.current[0]) {
          iRuffu.current[0].current.focus()
        }
      }
    }
  }

  const handleSelect = (selectedOption) => {
    const payload = updatedArray(selectedOption, options)
    callback({ name, value: payload })
  }

  const renderOptions = () => {
    if (!options || !options.length) return null
    const result = options.map((option, index) => (
      <List
        key={option.label}
        onClick={() => handleSelect(option)}
        ref={iRuffu.current[index]}
        onKeyDown={(e) => console.log(e)}
        tabIndex={0}
      >
        <IconContainer mr={8}>
          <Icon name={option.active ? 'CHECKBOX_FILLED' : 'CHECKBOX'} />
        </IconContainer>
        <span>{option.label}</span>
      </List>
    ))

    return (
      <Group
        style={{
          top: elementRef.current ? elementRef.current.offsetHeight : '54px',
        }}
        isActive={isOpen}
      >
        {result}
      </Group>
    )
  }

  const total = totalSelected(options)

  if (!options || !options.length) return null
  return (
    <Wrapper ref={ref} mt={props.mt} tabIndex={0} onKeyDown={onKeyDown}>
      <Header
        ref={elementRef}
        isActive={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{total > 0 ? `Selected: ${total}` : 'Select'}</span>
        <IconContainer className="IconContainer">
          <Icon name="CHEVRON" />
        </IconContainer>
      </Header>
      {renderOptions()}
    </Wrapper>
  )
}

export { Dropdown }
