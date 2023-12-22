import styled, { css } from 'styled-components'
import { mbFn, mrFn, mlFn, mtFn } from '@common/Theme'

const attributes = { className: 'ICON' }

const IconContainer = styled.div`
  ${mlFn};
  ${mtFn};
  ${mbFn};
  ${mrFn};
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Svg = styled.svg.attrs(attributes)`
  transition: all 0.2s ease-in-out;
  ${(props) =>
    props.rotate &&
    css`
      transform: rotate(${props.rotate}deg);
    `};
  ${(props) =>
    props.flip &&
    css`
      transform: scale(-1, 1);
      transform-origin: center;
    `};
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Group = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  flex-direction: row;
  padding: 0;
  margin-top: 16px;
  flex-flow: row wrap;
  justify-content: space-between;
  &:after {
    content: '';
    flex: auto;
  }
`

const Item = styled.li`
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: calc(100% / 9);
  width: 100%;
  flex: 1 1 auto;
  min-width: 132px;
`

const ItemContainer = styled.div`
  padding: 16px;
  margin: 5px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #333b44;
  border: 1px solid #1d1d1d;
  border-radius: 4px;
  flex-direction: column;
  position: relative;
  .copy-custom {
    opacity: 0;
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    .copy-custom {
      opacity: 1;
    }
  }
  .IconContainer {
    margin-left: unset;
  }
`

const Title = styled.h1`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
  font-size: 16px;
  color: #a9aeb9;
  width: 100%;
`

export { Svg, Container, ItemContainer, Title, Group, Item, IconContainer }
