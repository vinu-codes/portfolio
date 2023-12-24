import React from 'react'
import { Hero } from '@components/Hero'
import { Main } from '@common/Main'
import { Icon, IconContainer } from '@common/Icon'
import { Button } from '@common/Button'

const Intro = () => (
  <Hero id="home">
    <Main
      className="intro"
      subtitle="Front End Developer"
      title="Hi my name is Vinu, welcome to my portfolio!"
      config={{ hasTypeWriter: true }}
    >
      <Button>
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
)

export { Intro }
