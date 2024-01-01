import styled, { css } from 'styled-components'

const Container = styled.div`
  margin: 32px 32px 0px 32px;
`

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
  padding: 16px;
  background: white;
  margin-top: 4px;
  position: relative;
  cursor: pointer;
  user-select: none;

  &:before {
    content: '';
    position: relative;
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
    top: 20px;
    left: 24px;
    right: 19px;
    transform: translateX(-50%);
    display: none;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.22);
    transition: all 0.3s ease-in-out;
  }
  span {
    font-weight: 500;
    margin-left: 16px;
  }
  ${(props) =>
    props.isActive &&
    css`
      &:after {
        display: block;
      }
    `}
`

const Heading = styled.div`
  span {
    font-weight: 500;
  }
`

export { Container, ImageContainer, Group, List, Heading }
