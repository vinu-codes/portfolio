import React, { useContext, useEffect } from 'react'
import { Layout } from '@components/Layout'
import { NavigationContext } from '@components/Route'
import { Intro } from './shared/Intro'
import { About } from './shared/About'
import { Library } from './shared/Library'
import { anonymousSignIn, fetchCount } from '@state/auth'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '@state/auth'

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
  const dispatch = useDispatch()
  const [currentPath] = useContext(NavigationContext)
  const isAuthenticated = useSelector(authSelector.isAuthenticated)

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

  useEffect(() => {
    dispatch(anonymousSignIn())
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCount())
    }
  }, [isAuthenticated])

  return (
    <Layout>
      <Intro />
      <About />
      <Library />
    </Layout>
  )
}

export { LandingPage }
