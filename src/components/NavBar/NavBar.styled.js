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

const MobileButton = styled.button`
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
  ${media.md`
    background: green;
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
  display: flex;
`

const Image = styled.div`
  border-radius: 50%;
  overflow: hidden;
  background: grey;
  height: 64px;
  width: 64px;
  display: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${media.md`
    display: block;
  `};
`

export { Container, Image, Group, IconContainer, MobileButton }
