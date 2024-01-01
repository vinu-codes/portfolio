import styled, { css } from 'styled-components'
import { colors, mrFn } from '@common/Theme'

const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const AccordionHeader = styled.div`
  width: 100%;
  border-top: 1px solid ${colors.lightGrey};
  border-right: 1px solid ${colors.lightGrey};
  border-left: 1px solid ${colors.lightGrey};
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 16px 0 16px 16px;
  user-select: none;
  display: flex;
  background: ${colors.grey};
  border-radius: 4px;
  .active & {
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid transparent;
  }
`

const AccordionContent = styled.div`
  padding: 16px 16px 32px 16px;
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
  transition: all 1s ease-in-out;
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
