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

const mbFn = ({ mb }) =>
  mb &&
  css`
    margin-bottom: ${mb}px;
  `

const mlFn = ({ ml }) =>
  (ml || ml === 0) &&
  css`
    margin-left: ${ml}px;
  `

const ptFn = ({ pt }) =>
  (pt || pt === 0) &&
  css`
    padding-top: ${pt}px;
  `

export { mrFn, mtFn, mbFn, mlFn, ptFn }
