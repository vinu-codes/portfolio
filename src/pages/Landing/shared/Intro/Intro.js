import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Hero } from '@components/Hero'
import { Main } from '@common/Main'
import { Icon, IconContainer } from '@common/Icon'
import { Button } from '@common/Button'
import { Like } from '@components/Like'
import { fetchCount, incrementCount, anonymousSignIn } from '@state/auth'
import { authSelector } from '@state/auth'
import { Popup } from '@common/Popup'
import styled from 'styled-components'

const LikeWrapper = styled.div`
  position: absolute;
  bottom: 48px;
  right: 32px;
`

const jumpToReleventDiv = (id) => {
  const releventDiv = document.getElementById(id)
  if (!releventDiv) return
  // behavior: "smooth" parameter for smooth movement
  releventDiv.scrollIntoView({ behavior: 'smooth' })
}

const Intro = () => {
  const dispatch = useDispatch()
  const count = useSelector(authSelector.count)
  const hasLiked = useSelector(authSelector.hasLiked)
  const uid = useSelector(authSelector.uid)

  const handleClick = () => {
    if (!!hasLiked) return
    dispatch(incrementCount(uid))
  }

  return (
    <>
      <Hero id="home">
        <Main
          className="intro"
          subtitle="Front End Developer"
          title="👋 My name is Vinu. Welcome to my portfolio!"
          config={{ hasTypeWriter: true }}
        >
          <Button mt={32} onClick={() => jumpToReleventDiv('library')}>
            <span>See my work</span>
            <IconContainer ml={5}>
              <Icon
                name="ARROW"
                stroke="white"
                rotate={180}
                viewBox="-2 -1 20 20"
              />
            </IconContainer>
          </Button>
        </Main>
        <LikeWrapper className="like-wrapper">
          <Popup message="I like you too" />
          <Like onClick={handleClick} count={count} />
        </LikeWrapper>
      </Hero>
    </>
  )
}

export { Intro }
