import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { media } from '@common/Theme'
import light from './assets/bg.svg'
import dark from './assets/bg-dark.svg'
import { Parallax } from '@components/Parallax'
import { ThemeContext } from '@common/Theme/ThemeProvider'

const SectionContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(245, 245, 245, 0.8),
      rgba(245, 245, 245, 0.8)
    ),
    url(${(props) => props.imgSrc});
  background-position: center;
  height: 700px;
  min-height: 700px;
  max-height: 120rem;
  position: relative;
  ${(props) =>
    props.isDark &&
    css`
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(42, 43, 102, 0.9);
      }
    `}

  ${media.md`
    height: calc(100vh - 90px);
    min-height: 500px;
  `};

  .main.intro {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`

const Hero = ({ children, ...props }) => {
  const [theme, setTheme] = useContext(ThemeContext)

  return (
    <SectionContainer
      className="hero"
      imgSrc={theme === 'light' ? light : dark}
      isDark={theme === 'dark'}
      {...props}
    >
      {children}
    </SectionContainer>
  )
}

export { Hero }
