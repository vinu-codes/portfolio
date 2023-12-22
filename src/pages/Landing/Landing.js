import React from 'react'
import { Layout } from '@components/Layout'

import { Intro } from './shared/Intro'
import { About } from './shared/About'
import { Library } from './shared/Library'
import { Hero } from '@components/Hero'

const LandingPage = () => (
  <Layout>
    <Intro />
    <About />
    <Hero>
      <Library />
    </Hero>
  </Layout>
)

export { LandingPage }
