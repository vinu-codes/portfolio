import React from 'react'
import { LandingPage } from '@pages/Landing'
import { Provider } from '@components/Route'

const App = () => (
  <Provider>
    <LandingPage />
  </Provider>
)

export default App
