import React from 'react'
import { Provider } from '@components/Route'
import { NavBar } from '@components/NavBar'
import { Content } from '@common/Content'
import { Footer } from '@components/Footer'

const Layout = ({ children, hero }) => (
  <Provider>
    <NavBar />
    {hero}
    <Content>{children}</Content>
    <Footer />
  </Provider>
)

Layout.defaultProps = {
  hero: null,
}

export { Layout }
