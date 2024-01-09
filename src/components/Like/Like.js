import React from 'react'

import styled from 'styled-components'
import { colors } from '@common/Theme'
import { font } from '@common/Theme'

import { Icon } from '@common/Icon'

const LikeContainer = styled.div`
  display: flex;
  background: white;
  flex-direction: row;
  max-width: 240px;
  width: 100%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 0px 8px 8px 0;
  span {
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: ${colors.lightGrey};
    line-height: 20px;
  }
`

const LikeButton = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  background: ${colors.lightPurple};
  padding: 12px;
  border-radius: 8px 0 0 8px;
  span {
    padding: 0;
    margin: 0;
    line-height: 20px;
    font-size: 14px;
    color: ${colors.white};
    position: relative;
    top: 1px;
    font-weight: ${font.thin};
  }
  span.plus {
    font-size: 17px;
    margin-left: 2px;
  }
  svg {
    margin-left: 8px;
  }
`

const Like = ({ onClick, count }) => {
  return (
    <LikeContainer className="like-container">
      <LikeButton onClick={onClick} className="like-button">
        <span className="count">{count > 0 ? count : '0'}</span>
        <span className="plus">+</span>
        <Icon name="THUMB" size={20} stroke="white" />
      </LikeButton>
      <MessageContainer className="message-container">
        <span className="message">Like what you see?</span>
      </MessageContainer>
    </LikeContainer>
  )
}

export { Like }
