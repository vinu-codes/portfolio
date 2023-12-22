import styled, { css } from 'styled-components'
import { maxGridColumnCount, mediaOrder, mediaMinWidth } from './gridUtils'

const getColumnSize = (count) => 100 / (maxGridColumnCount / count)

// Add a `max-width` to ensure content within each column does not blow out
// the width of the column. Applies to IE10+ and Firefox. Chrome and Safari
// do not appear to require this.
const colFlex = (count = maxGridColumnCount) => {
  return css`
    flex: 0 0 ${getColumnSize(count)}%;
    max-width: ${getColumnSize(count)}%;
  `
}

const colOffset = (count) => css`
  margin-left: ${count === 0 ? 0 : getColumnSize(count)}%;
`

const colMediaQuery = (media, count, offset) => {
  let mediaText = `(min-width: ${mediaMinWidth[media]}px)`
  if (mediaMinWidth[media + 'Max']) {
    mediaText = `(max-width: ${
      mediaMinWidth[media + 'Max']
    }px) and (min-width: ${mediaMinWidth[media]}px)`
  } else if (media === 'xxs') {
    mediaText = `(max-width: ${mediaMinWidth[media] - 1}px)`
  }
  return css`
    @media ${mediaText} {
      ${count && colFlex(count)};
      ${typeof offset === 'number' &&
      offset < maxGridColumnCount &&
      colOffset(offset)};
    }
  `
}

// Prevent columns from becoming too narrow when at smaller grid tiers by
// always setting `width: 100%;`. This works because we use `flex` values
// later on to override this initial width.
const Col = styled.div.attrs({ className: 'Col' })`
  position: relative;
  width: 100%;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${(props) => props.size && colFlex(props.size)};
  ${(props) =>
    props.offset &&
    props.offset < maxGridColumnCount &&
    colOffset(props.offset)};
  ${(props) =>
    (props.xxs || typeof props.offsetXxs === 'number') &&
    colMediaQuery(mediaOrder[0], props.xxs, props.offsetXxs)};
  ${(props) =>
    (props.xs || typeof props.offsetXs === 'number') &&
    colMediaQuery(mediaOrder[1], props.xs, props.offsetXs)};
  ${(props) =>
    (props.sm || typeof props.offsetSm === 'number') &&
    colMediaQuery(mediaOrder[2], props.sm, props.offsetSm)};
  ${(props) =>
    (props.md || typeof props.offsetMd === 'number') &&
    colMediaQuery(mediaOrder[3], props.md, props.offsetMd)};
  ${(props) =>
    (props.lg || typeof props.offsetLg === 'number') &&
    colMediaQuery(mediaOrder[4], props.lg, props.offsetLg)};
  ${(props) =>
    (props.xl || typeof props.offsetXl === 'number') &&
    colMediaQuery(mediaOrder[5], props.xl, props.offsetXl)};
  ${(props) =>
    (props.xxl || typeof props.offsetXxl === 'number') &&
    colMediaQuery(mediaOrder[6], props.xxl, props.offsetXxl)};
`

export { Col }
