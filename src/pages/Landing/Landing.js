import React from 'react'
import { Layout } from '@components/Layout'

import { Intro } from './shared/Intro'
import { Tech } from './shared/Tech'
import { About } from './shared/About'
import { Library } from './shared/Library'

const LandingPage = () => (
  <Layout hero={<Intro />}>
    <About />
    <Tech />
    <Library />
  </Layout>
)

export { LandingPage }
