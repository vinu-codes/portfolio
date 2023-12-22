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

const AccordionContent = styled.div`
  padding: 16px 16px 32px 16px;
`

const AccordionExpander = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      max-height: 800px;
      height: 100%;
      border-bottom: 1px solid black;
    `}
  p {
    margin: 0;
    padding: 0;
  }
`

export {
  AccordionContainer,
  AccordionHeader,
  AccordionExpander,
  AccordionContent,
}
