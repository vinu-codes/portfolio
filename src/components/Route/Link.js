import { useContext } from 'react'
import { NavigationContext } from './Context'
import styled, { css } from 'styled-components'

const isActiveFn = (props) => {
  if (props.isActive) {
    return css`
      font-weight: 700;
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
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  ${isActiveFn};
  ${mbFn};
`

const AnchorExternal = styled.a`
  color: black;
  text-decoration: none;
  padding: 12px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  ${isActiveFn};
  ${mbFn};
`

const Link = ({ to, external = false, children, mb, ...props }) => {
  const [currentPath, navigate] = useContext(NavigationContext)

  const handleClick = (event) => {
    console.log(event)
    if (event.metaKey || event.ctrlKey) {
      return
    }
    event.preventDefault()
    navigate(to)
  }

  return !external ? (
    <Anchor
      isActive={currentPath === to}
      mb={16}
      href={to}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Anchor>
  ) : (
    <AnchorExternal mb={mb} href={to} {...props}>
      {children}
    </AnchorExternal>
  )
}

export { Link }
