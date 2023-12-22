import React, { useEffect, useRef, useState } from 'react'

const TypeWriter = ({ text = 'Hello', speed = 80 }) => {
  const index = useRef(0)
  const [currentText, setCurrentText] = useState('')

  useEffect(() => {
    index.current = 0
    setCurrentText('')
  }, [text])

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextCharacter = text.charAt(index.current) // 'H'
      setCurrentText((prev) => prev + nextCharacter) // 'l'
      index.current += 1
    }, speed)

    return () => {
      clearTimeout(timer)
    }
  }, [currentText, text])

  return <p>{currentText}</p>
}

export { TypeWriter }
