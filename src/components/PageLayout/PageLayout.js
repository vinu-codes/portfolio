import React from 'react'
import { NavigationProvider } from '@components/Route'
import { NavBar } from '@components/NavBar'
import { Content } from '@common/Content'

const PageLayout = ({ children }) => (
  <NavigationProvider>
    <NavBar />
    <Content>{children}</Content>
  </NavigationProvider>
)

export { PageLayout }
