import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Custom = styled.div`
  width: 100%;
  height: 1100px;
  background: red;
  display: flex;
  position: absolute;
  width: 500px;
  top: 50px;
  z-index: -1;
  transform: translateX(-200px);
`
const Parallax = () => {
  const myElement = useRef(null)

  useEffect(() => {
    // Use GSAP animation in the useEffect hook
    gsap.to(myElement.current, {
      x: 200,
      duration: 0.5,
      scrollTrigger: {
        trigger: myElement.current,
        start: 'top 100%', // Start the animation when the element is 80% in view
        end: 'bottom 0%', // End the animation when the element is 20% out of view
        scrub: true,
      },
    })
  }, [])

  return (
    <Custom ref={myElement}>
      {/* Your content goes here */}
      <p>This is some example content.</p>
    </Custom>
  )
}

export { Parallax }
