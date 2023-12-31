import styled, { css } from 'styled-components'
import { media, font, colors } from '@common/Theme'

const DesktopTitle = styled.h2`
  font-size: 16px;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  color: #2a2b66;
  margin-left: 16px;
  display: none;
  ${media.md`
    display: block;
  `};
`

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 72px;
  min-height: 72px;
  max-height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.16);
  background: white;
  z-index: 999;
  top: 0;
  left: 0;
  transition: all 0.1s ease-in-out;
  ${media.md`
    padding-left: 24px;
    padding-right: 24px;
`};
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
  width: 100%;
`

const MobileItem = styled.li`
  list-style: none;
  padding: 0;
  width: 0;
  padding: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  align-items: center;
  .github-button {
    border: none;

    background: ${colors.lightPurple};
    border: 2px solid transparent;
    border-radius: 16px;
    cursor: pointer;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    padding: 13px 13px;
    margin-left: 8px;
    align-items: center;
    justify-content: center;
    max-height: 48px;
    span {
      font-size: 16px;
      color: white;
      font-weight: ${font.thin};
      line-height: 22px;
      font-weight: ${font.regular};
    }
    &:hover {
      background: white;
      border: 2px solid ${colors.lightPurple};
      span {
        color: ${colors.lightPurple};
      }
    }
  }
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
    color: ${colors.navyBlue};
    font-weight: ${font.thin};
  }
  ${(props) =>
    props.isActive &&
    css`
      span {
        color: ${colors.lightPurple};
        font-weight: ${font.bold};
      }
    `};
`

const Image = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background: grey;
  height: 48px;
  width: 48px;
  display: none;
  cursor: pointer;
  border: 2px solid ${colors.navyBlue};
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
  DesktopTitle,
  MobileItem,
}
