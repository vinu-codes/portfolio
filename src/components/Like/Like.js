import React, { useState, useEffect } from 'react'
import { Icon } from '@common/Icon'
import { LikeContainer, MessageContainer, LikeButton } from './Like.styled'

const Like = ({ onClick, count }) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [count])

  const handleClick = () => {
    onClick()
    setAnimate(true)
  }

  return (
    <LikeContainer className="like-container">
      <LikeButton onClick={handleClick} className={animate ? 'animate' : ''}>
        <span className="count">{count > 0 ? 0 : '0'}</span>
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
