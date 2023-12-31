import React, { useContext, useEffect } from 'react'
import { Layout } from '@components/Layout'
import { NavigationContext } from '@components/Route'
import { Intro } from './shared/Intro'
import { About } from './shared/About'
import { Library } from './shared/Library'
import { Hero } from '@components/Hero'

const targetElement = {
  offsetTop: 100,
}
const scrollToElement = (id) => {
  const targetElement = document.getElementById(id)

  if (targetElement) {
    // Calculate the additional pixels from the top
    const additionalPixels = 72

    // Calculate the target scroll position
    const scrollPosition = targetElement.offsetTop - additionalPixels

    // Scroll to the target element with smooth behavior
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    })
  }
}

const LandingPage = () => {
  const [currentPath] = useContext(NavigationContext)

  useEffect(() => {
    if (currentPath === '/') {
      console.log('we are at home')
      scrollToElement('home')
    }
    if (currentPath === '/about') {
      console.log('we are at About')
      scrollToElement('about')
    }
    if (currentPath === '/library') {
      console.log('we are at library')
      scrollToElement('library')
    }
  }, [currentPath])

  return (
    <Layout>
      <Intro />
      <About />
      <Library />
    </Layout>
  )
}

export { LandingPage }
