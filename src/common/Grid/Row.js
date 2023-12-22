import styled, { css } from 'styled-components'
import { colGutterSize } from './gridUtils'
import { Col } from './Col'

const mtFn = ({ mt }) =>
  mt &&
  css`
    margin-top: ${mt}px;
  `

const mbFn = ({ mb }) =>
  mb &&
  css`
    margin-bottom: ${mb}px;
  `

const Row = styled.div.attrs({ className: 'Row' })`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.wrap ? 'column' : 'row')};
  margin-right: -${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  margin-left: -${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  box-sizing: border-box;
  ${(props) =>
    props.fluid &&
    css`
      width: 100%;
    `}
  ${Col} {
    padding-left: ${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
    padding-right: ${(props) => (props.noGutters ? 0 : colGutterSize / 2)}px;
  }

  ${mtFn};
  ${mbFn};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`

export { Row }
