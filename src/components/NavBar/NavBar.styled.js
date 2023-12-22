import styled, { css } from 'styled-components'
import { media } from '@utils'

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
const Container = styled.div`
  width: 100%;
  height: 72px;
  min-height: 72px;
  max-height: 72px;
  display: flex;
  flex-direction: row;
  padding-top: 4px;
  padding-bottom: 4px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
  background: white;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  transition: all 0.1s ease-in-out;

  &.active {
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    box-shadow: none;
    ${media.md`
    height: 72px;
    min-height: 72px;
    max-height: 72px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
  `};
  }
`
const MobileMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: none;
  margin-top: 72px;
  ${media.md`
    display: none;
  `};
  .active & {
    display: flex;
    ${media.md`
      display: none;
    `};
  }
  .not_active & {
    display: none;
  }
`

const MobileGroup = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`

const MobileItem = styled.li`
  list-style: none;
  padding: 0;
  width: 0;
  padding: 36px;
  cursor: pointer;
  span {
    &:hover {
      color: #6a6cff;
      font-weight: 700;
    }
  }
`

const MobileButton = styled.button`
  cursor: pointer;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  ${media.md`
    display: none;
  `};
`

const IconContainer = styled.div`
  transform: flipX(180deg);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Group = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;
  margin-left: auto;
  height: 100%;
  ${media.md`
    display: flex;
  `};
`

const Item = styled.li`
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: 8px;
  align-items: center;
  justify-content: center;
  &:first-child {
    margin-left: 0;
  }
  span {
    font-size: 16px;
    font-weight: 500;
  }
`

const Image = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background: grey;
  height: 64px;
  width: 64px;
  display: none;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${media.md`
    display: block;
  `};
`

export {
  Container,
  Image,
  Group,
  IconContainer,
  MobileButton,
  MobileMenu,
  Item,
  MobileGroup,
  MobileItem,
}
