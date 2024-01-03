import React from 'react'
import { LandingPage } from '@pages/Landing'
import { Provider } from '@components/Route'
import { CustomThemeProvider } from '@common/Theme/ThemeProvider'

const App = () => (
  <CustomThemeProvider>
    <Provider>
      <LandingPage />
    </Provider>
  </CustomThemeProvider>
)

export default App
