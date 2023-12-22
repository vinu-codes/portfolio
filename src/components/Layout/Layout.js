import React from 'react'
import { Provider } from '@components/Route'
import { NavBar } from '@components/NavBar'
import { Content } from '@common/Content'
import { Footer } from '@components/Footer'

const routes = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Library', path: '/library' },
]

const Layout = ({ children, hero }) => (
  <Provider>
    <NavBar routes={routes} />

    {children}
    <Footer />
  </Provider>
)

Layout.defaultProps = {
  hero: null,
}

export { Layout }
