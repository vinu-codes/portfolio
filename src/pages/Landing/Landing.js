import React, { useContext, useEffect } from 'react'
import { Layout } from '@components/Layout'
import { NavigationContext } from '@components/Route'
import { Intro } from './shared/Intro'
import { About } from './shared/About'
import { Library } from './shared/Library'
import { Hero } from '@components/Hero'

const jumpToReleventDiv = (id) => {
  const releventDiv = document.getElementById(id)
  if (!releventDiv) return
  // behavior: "smooth" parameter for smooth movement
  releventDiv.scrollIntoView({ behavior: 'smooth' })
}

const LandingPage = () => {
  const [currentPath] = useContext(NavigationContext)

  useEffect(() => {
    if (currentPath === '/') {
      console.log('we are at home')
      jumpToReleventDiv('home')
    }
    if (currentPath === '/about') {
      console.log('we are at About')
      jumpToReleventDiv('about')
    }
    if (currentPath === '/library') {
      console.log('we are at library')
      jumpToReleventDiv('library')
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
