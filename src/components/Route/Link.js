import { useContext } from 'react'
import NavigationContext from './Context'
import styled, { css } from 'styled-components'

const isActiveFn = (props) => {
  if (props.isActive) {
    return css`
      font-weight: 700;
      border-left: 3px solid black;
    `
  }
}

const mbFn = (props) => {
  if (props.mb) {
    return css`
      margin-bottom: ${props.mb}px;
    `
  }
}

const Anchor = styled.a`
  color: black;
  text-decoration: none;
  padding: 12px;
  transition: 0.3s all ease-in-out;
  ${isActiveFn};
  ${mbFn};
`

const Link = ({ to, children }) => {
  const { navigate, currentPath } = useContext(NavigationContext)

  const handleClick = (event) => {
    console.log(event)
    // On Mac machines the META key is the Cmd (⌘) key.
    if (event.metaKey || event.ctrlKey) {
      return
    }

    event.preventDefault()
    navigate(to)
    // updates address bar with path received from 'to'
  }

  return (
    <Anchor
      isActive={currentPath === to}
      mb={16}
      href={to}
      onClick={handleClick}
    >
      {children}
    </Anchor>
  )
}

export { Link }
