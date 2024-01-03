import React from 'react'
import { createContext, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { colors } from '../colors'

const theme = {
  light: {
    colors: { white: `${colors.white}` },
  },
  dark: {
    colors: { white: `${colors.black}` },
  },
}

const ThemeContext = createContext()

const CustomThemeProvider = ({ children }) => {
  const [currentTheme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={[currentTheme, toggleTheme]}>
      <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, CustomThemeProvider }
