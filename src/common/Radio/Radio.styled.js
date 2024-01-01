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
  align-items: flex-start;
  padding: 16px 16px 16px 0px;
  background: white;
  margin-top: 4px;
  position: relative;
  cursor: pointer;
  user-select: none;

  span.label {
    font-weight: 500;
    margin-left: 16px;
  }
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
    content: '';
    position: absolute;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #6b6cfe;
  }
  &:after {
    content: '';
    position: absolute;
    background: white;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.22);
    transition: all 0.3s ease-in-out;
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
