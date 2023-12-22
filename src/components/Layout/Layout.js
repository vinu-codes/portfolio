import React from 'react'
import { Provider } from '@components/Route'
import { NavBar } from '@components/NavBar'
import { Content } from '@common/Content'
import { Footer } from '@components/Footer'

const Layout = ({ children }) => (
  <Provider>
    <NavBar />
    <Content>{children}</Content>
    <Footer />
  </Provider>
)

export { Layout }
