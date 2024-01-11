import styled, { css } from 'styled-components'
import { colors, mrFn, font } from '@common/Theme'

const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  &.active {
    .header {
      border-radius: 4px 4px 0 0;
      border-bottom: none;
    }
  }
  &:first-of-type {
    .header {
      border-radius: 4px 4px 0 0;
    }
  }
  &:last-of-type {
    .header {
      border-top: none;
      border-radius: 0 0 4px 4px;
    }
  }
  &:last-of-type {
    &.active {
      .header {
        border-radius: 0 0 0 0;
      }
    }
  }
  &:not(:first-of-type) {
    &:not(:last-of-type) {
      .header {
        border-radius: 0px 0px 0 0;
        border-top: 0;
      }
    }
  }
  &:last-of-type {
    &.active {
      .content {
        border-radius: 0 0 4px 4px;
      }
    }
  }
`

const AccordionHeader = styled.div`
  width: 100%;
  cursor: pointer;
  border-top: 1px solid ${colors.lightGrey};
  border-right: 1px solid ${colors.lightGrey};
  border-left: 1px solid ${colors.lightGrey};
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 16px 0 16px 16px;
  user-select: none;
  display: flex;
  align-items: center;
  background: ${colors.grey};
  border-radius: 4px;
`

const AccordionContent = styled.div`
  padding: 16px 16px 32px 16px;
  line-height: 20px;
  font-size: 12px;
  font-weight: ${font.thin};
  .active & {
    border-right: 1px solid ${colors.lightGrey};
    border-left: 1px solid ${colors.lightGrey};
    border-bottom: 1px solid ${colors.lightGrey};
  }
`

const AccordionExpander = styled.div`
  width: 100%;
  max-height: 0;
  height: 0;
  overflow: hidden;
  .active & {
    max-height: 800px;
    height: 100%;
  }
  p {
    margin: 0;
    padding: 0;
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  margin-left: auto;
  ${mrFn};
  svg.ICON.CHEVRON {
    path {
      fill: ${colors.navyBlue};
    }
  }
`

export {
  AccordionContainer,
  AccordionHeader,
  AccordionExpander,
  AccordionContent,
  IconContainer,
}
