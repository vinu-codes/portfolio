import styled, { css, keyframes } from 'styled-components'
import { font, media } from '@common/Theme'

const slideIn = keyframes`
0% {
  transform: translateX(-100%);

}
100% {
  transform: translateX(0%);
}
`
const DottedBox = styled.div`
  border: 2px dashed #cccccc;
  background: rgb(239 239 239);
  padding: 24px;
  display: flex;
  width: 100%;
  ${media.md`
    max-width: calc(100% - 24px);
  `};
  width: 100%;
  justify-content: center;
  border-radius: 8px;
  align-items: flex-start;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`

const Panel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  &:not(:only-child) {
    width: 100%;
    ${media.md`
     width: 50%;
    `};
  }
  &.detail-panel {
    width: 50%;
    flex-direction: column;
    display: none;
    ${media.md`
      display: flex;
    `}
  }
  h2.detail-title {
    font-size: 20px;
    color: rgb(42, 43, 102);
    margin: 0px 0px 8px;
    font-weight: 700;
  }
  ul.detail-group {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 16px;
    overflow-y: auto;
  }

  li.detail-item {
    list-style: none;
    animation-name: ${slideIn};
    margin: 0px 0px 12px;
    span {
      font-size: 14px;
      line-height: 21px;
      font-weight: ${font.thin};
      color: rgb(47 47 47);
    }
  }
  button.detail-button {
    border-radius: 8px;
    flex-shrink: 0;
    margin-top: 16px;
    max-width: 200px;
    a.detail-link {
      padding: 0;
      width: 100%;
    }
  }
`
export { DottedBox, DetailContainer, Panel }
