import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { Button } from '@common/Button'
import { Link } from '@components/Route'
import { media } from '@common/Theme'

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
  ${media.md`
    width: 100%;
  `};
  &.detail {
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
  }

  li.detail-item {
    list-style: none;
    animation-name: ${slideIn};
    margin: 0px 0px 8px;
    span {
      font-size: 14px;
      line-height: 21px;
      color: rgb(47 47 47);
    }
  }
  button {
    flex-shrink: 0;
    margin-top: 16px;
    max-width: 200px;
  }
`

const Detail = ({ items, title, link, children }) => {
  const renderItems = () => {
    if (!items || !items.length) return null
    const result = items.map((item, index) => (
      <li className="detail-item" key={index}>
        <span>{item.label}</span>
      </li>
    ))
    return <ul className="detail-group">{result}</ul>
  }

  return (
    <DetailContainer>
      {children && (
        <Panel>
          <DottedBox>{children}</DottedBox>
        </Panel>
      )}
      {!!items && !!title && (
        <Panel className="detail">
          {title && <h2 className="detail-title">{title}</h2>}
          {renderItems()}
          {link && (
            <Button>
              <Link external={true} to="https://github.com/vinu-codes">
                <span>View in Github</span>
              </Link>
            </Button>
          )}
        </Panel>
      )}
    </DetailContainer>
  )
}

export { Detail }
