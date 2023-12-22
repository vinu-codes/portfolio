import React from 'react'
import styled from 'styled-components'

import {
  HTML_GRAPHIC,
  JS_GRAPHIC,
  CSS_GRAPHIC,
  REACT_GRAPHIC,
  STYLED_GRAPHIC,
  GIT_GRAPHIC,
} from './assets'

const matchingLogo = {
  HTML_GRAPHIC,
  JS_GRAPHIC,
  CSS_GRAPHIC,
  REACT_GRAPHIC,
  STYLED_GRAPHIC,
  GIT_GRAPHIC,
}

const Container = styled.div``

const TechLogo = ({ name, ...props }) => {
  const MatchingGraphic = matchingLogo[name] || null
  return <MatchingGraphic {...props} />
}

export { TechLogo }
