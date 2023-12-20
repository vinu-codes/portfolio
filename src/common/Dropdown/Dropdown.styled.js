import styled, { css } from 'styled-components'

const mtFn = ({ mt }) =>
  (mt || mt === 0) &&
  css`
    margin-top: ${mt}px;
  `

const mrFn = ({ mr }) =>
  (mr || mr === 0) &&
  css`
    margin-right: ${mr}px;
  `

const Wrapper = styled.div`
  position: relative;
  max-width: 360px;
  min-width: 250px;
  width: 100%;
  ${mtFn};

  &:focus-visible {
    outline: none;
    &:after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      width: calc(100% + 8px);
      height: calc(100% + 8px);
      border: 2px solid #368e8c;
      border-radius: 3px;
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;

  ${mrFn};
`

const Header = styled.div`
  width: 100%;
  cursor: pointer;
  height: 25px;
  border: 2px solid #0148dd;
  padding: 25px;
  display: flex;
  align-items: center;
  user-select: none;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  border-radius: 4px;
  position: relative;
  &:hover {
    border: 2px solid #6583c3;
  }
  .IconContainer {
    right: 12px;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }
  svg {
    margin-left: auto;
    transition: transform 0.2s;
    path {
      fill: #0148dd;
    }
  }
  ${(props) =>
    props.isActive &&
    css`
      border-radius: 4px 4px 0 0;
      svg {
        transform: rotate(180deg);
      }
    `}
`

const Group = styled.ul`
  position: absolute;
  z-index: 999;
  top: 100%;
  left: 0;
  list-style: none;
  background: white;
  padding: 0;
  margin: 0;
  width: 100%;
  display: none;
  max-height: 280px;
  overflow-y: auto;
  border-radius: 0 0 8px 8px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  ${(props) =>
    props.isActive &&
    css`
      display: block;
    `}
`

const List = styled.li`
  list-style: none;
  padding: 0;
  user-select: none;
  margin: 0;
  width: 100%;
  padding: 22px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    line-height: 21px;
    font-size: 16px;
  }
  svg.CHECKBOX_FILLED {
    rect {
      fill: #0148dd;
      stroke: #0148dd;
    }
  }
`
export { Wrapper, Group, List, IconContainer, Header }
