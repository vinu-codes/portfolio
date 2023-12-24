import React from 'react'
import { NavBar } from '@components/NavBar'
import { Content } from '@common/Content'
import { Footer } from '@components/Footer'

const routes = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Library', path: '/library' },
]

const Layout = ({ children, hero }) => (
  <>
    <NavBar routes={routes} />
    {children}
    <Footer />
  </>
)

Layout.defaultProps = {
  hero: null,
}

export { Layout }
