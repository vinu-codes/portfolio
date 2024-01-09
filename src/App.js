import React from 'react'
import { LandingPage } from '@pages/Landing'
import { Provider as RouteProvider } from '@components/Route'
import { CustomThemeProvider } from '@common/Theme/ThemeProvider'
import { Provider } from 'react-redux'
import { store } from './state/store'

const App = () => (
  <Provider store={store}>
    <CustomThemeProvider>
      <RouteProvider>
        <LandingPage />
      </RouteProvider>
    </CustomThemeProvider>
  </Provider>
)

export default App
