import React from 'react'
import { LandingPage } from '@pages/Landing'
import { Provider } from '@components/Route'
import { ThemeProvider } from '@common/Theme/ThemeProvider'

const App = () => (
  <ThemeProvider>
    <Provider>
      <LandingPage />
    </Provider>
  </ThemeProvider>
)

export default App
