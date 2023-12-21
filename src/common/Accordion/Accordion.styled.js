import styled, { css } from 'styled-components'

const AccordionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const AccordionHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  padding: 16px;
  user-select: none;
`
const AccordionExpander = styled.div`
  width: 100%;
  max-height: 0;
  height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      max-height: 400px;
      height: 100%;
      padding: 16px 16px 32px 16px;
      line-height: 28px;
      border-bottom: 1px solid black;
    `};
  p {
    margin: 0;
    padding: 0;
  }
`

export { AccordionContainer, AccordionHeader, AccordionExpander }
