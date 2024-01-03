import React from 'react'
import { LandingPage } from '@pages/Landing'
import { Provider } from '@components/Route'
import { ThemeProvider } from '@common/Theme/ThemeContext'

const App = () => (
  <ThemeProvider>
    <Provider>
      <LandingPage />
    </Provider>
  </ThemeProvider>
)

export default App
