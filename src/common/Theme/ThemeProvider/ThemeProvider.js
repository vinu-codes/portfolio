import React from 'react'
import { createContext, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { colors } from '../colors'

const theme = {
  light: {
    colors: {
      white: colors.white,
      lightPurple: colors.lightPurple,
      lightGrey: colors.lightGrey,
      offWhite: colors.offWhite,
      text: colors.darkGrey,
      darkGrey: colors.darkGrey,
      navyBlue: colors.navyBlue,
      yellow: colors.navyBlue,
    },
  },
  dark: {
    colors: {
      white: colors.navyBlue,
      lightPurple: colors.white,
      lightGrey: colors.white,
      offWhite: colors.darkNavyBlue,
      text: colors.white,
      navyBlue: colors.white,
      yellow: colors.yellow,
      darkGrey: colors.darkNavyBlue,
    },
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
