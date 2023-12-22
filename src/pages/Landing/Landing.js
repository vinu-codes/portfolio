import React from 'react'
import { Layout } from '@components/Layout'

import { Intro } from './shared/Intro'
import { About } from './shared/About'
import { Library } from './shared/Library'

const LandingPage = () => (
  <Layout hero={<Intro />}>
    <About />
    <Library />
  </Layout>
)

export { LandingPage }
