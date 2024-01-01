import { colors, font } from '@common/Theme'
import styled, { css } from 'styled-components'

const ImageContainer = styled.div`
  border: 3px solid black;
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 5px;
  overflow: hidden;
  img {
    transform: scale(1.2);
    transform-origin: 50% 50%;
  }
`
const Group = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const List = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 16px 16px 16px 0px;
  background: transparent;
  margin-top: 4px;
  position: relative;
  cursor: pointer;
  user-select: none;

  span.label {
    font-weight: 500;
    margin-left: 16px;
  }
`

const pseudoStyles = css`
  content: '';
  position: absolute;
  border-radius: 50%;
  height: 12px;
  width: 12px;
  border: 2px solid ${colors.lightPurple};
`

const Dot = styled.span`
  position: relative;
  width: 16px;
  height: 16px;
  .active & {
    &:after {
      display: block;
    }
  }
  &:before {
    ${pseudoStyles};
    background: transparent;
  }
  &:after {
    ${pseudoStyles};
    background: ${colors.lightPurple};
    display: none;
  }
`

const Label = styled.div`
  h4 {
    font-size: 16px;
    color: ${colors.navyBlue};
    margin: 0 0 8px 0;
    font-weight: ${font.bold};
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
`

export { Container, ImageContainer, Group, List, Label, Dot }
