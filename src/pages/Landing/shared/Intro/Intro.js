import React from 'react'
import { Hero } from '@components/Hero'
import { Main } from '@common/Main'
import { Icon, IconContainer } from '@common/Icon'
import { Button } from '@common/Button'
// import { Solveig } from '@components/Solveig'

const jumpToReleventDiv = (id) => {
  const releventDiv = document.getElementById(id)
  if (!releventDiv) return
  // behavior: "smooth" parameter for smooth movement
  releventDiv.scrollIntoView({ behavior: 'smooth' })
}

const Intro = () => {
  return (
    <>
      {/* <Solveig /> */}
      <Hero id="home">
        <Main
          className="intro"
          subtitle="Front End Developer"
          title="Hi! My name is Vinu. Welcome to my portfolio!"
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
      </Hero>
    </>
  )
}

export { Intro }
