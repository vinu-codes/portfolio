import styled, { css } from 'styled-components'
import {
  gridMarginX,
  mediaMinWidth,
  containerMaxWidth,
  mediaOrder,
} from './gridUtils'

const nonFluidStyles = () => {
  return mediaOrder.map(
    (size) => css`
      @media (min-width: ${mediaMinWidth[size]}px) {
        max-width: ${containerMaxWidth[size]}px;
      }
    `,
  )
}

const Grid = styled.div.attrs({ className: 'Grid' })`
  width: 100%;
  padding-left: ${(props) =>
    typeof props.marginX === 'number' ? props.marginX : gridMarginX}px;
  padding-right: ${(props) =>
    typeof props.marginX === 'number' ? props.marginX : gridMarginX}px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  max-width: 100%;
  position: relative;
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  ${(props) => !props.fluid && nonFluidStyles()}
`

export { Grid }
