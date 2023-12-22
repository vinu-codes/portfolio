import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useOnClickOutside } from './hooks/useOnClickOutside'
import { SyntaxPre, syntaxHighlight } from './Syntax'

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time))

const Wrapper = styled.div`
  width: 100%;
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 4px;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  pre {
    border-radius: 4px;
  }
  button {
    padding: 10px 14px;
    border: 1px solid transparent;
    background: rgb(137, 226, 225);
    border-radius: 4px;
    margin-top: 12px;
    cursor: pointer;
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 16px;
    right: 16px;
    span {
      color: black;
    }
    &.is-active {
      background: rgb(142 226 137);
      transform: scale(1.1);
      border: 1px solid rgb(117 185 113);
    }
  }
  textarea {
    position: absolute;
    left: -9999px;
    top: -9999px;
  }
`

const StateView = ({ state, theme, maxHeight }) => {
  const [html, setHtml] = useState(null)
  const prevCountRef = useRef(0)
  const [code, setCode] = useState('')
  const codeRef = useRef()
  const copyRef = useRef()
  const [isActive, setIsActive] = useState(false)

  const copyToClipboard = (e) => {
    codeRef.current.select()
    document.execCommand('copy')
    e.target.focus()
    e.preventDefault()
    setIsActive(true)
  }

  // useOnClickOutside(copyRef, () => {
  //   if (!isActive) return
  //   setIsActive(false)
  // })

  useEffect(() => {
    if (!isActive) return
    // setTimeout
    delay(1500).then(() => setIsActive(false))
  }, [isActive])

  useEffect(() => {
    /**
     * assign the latest render value of count to the ref
     * However, assigning a value to ref doesn't re-render the app
     * So, prevCountRef.current in the return statement displays the
     * last value in the ref at the time of render i.e., the previous state value.
     */
    prevCountRef.current = state
  }, [state]) //run this code when the value of count changes

  useEffect(() => {
    if (prevCountRef !== state) {
      setHtml(syntaxHighlight(JSON.stringify(state, undefined, 4)))
      setCode(JSON.stringify(state, undefined, 4))
    }
  }, [state])

  const createMarkup = () => {
    return {
      __html: html,
    }
  }

  const renderMarkup = () => {
    if (!html) return null
    return (
      <SyntaxPre
        maxHeight={maxHeight}
        themeType={theme}
        dangerouslySetInnerHTML={createMarkup()}
      />
    )
  }

  // const newString = {
  //   step1:
  //     "\nimport React, { useState } from 'react'\nimport { createRoot } from 'react-dom/client'\nimport styled from 'styled-components'\n",
  // }
  // const stringifyIt = code
  // console.log(typeof stringifyIt)
  // const someText = stringifyIt.replace(/(\r\n|\n|\r)/gm, '')
  // console.log('update', JSON.stringify(code))
  // const someText = JSON.stringify(code).replace(/(\r\n|\n|\r)/gm, '')
  // console.log('update', someText)
  return (
    <Wrapper className="StateView">
      {renderMarkup()}
      <textarea
        defaultValue={code}
        placeholder="Code Snippet"
        ref={codeRef}
        name={`code`}
      />
      <button
        ref={copyRef}
        className={isActive ? 'is-active' : ''}
        onClick={copyToClipboard}
      >
        <span>Copy</span>
      </button>
    </Wrapper>
  )
}

StateView.defaultProps = {
  state: null,
  theme: 'MONOKI',
  type: 'js',
  label: '',
  height: 0,
}

export { StateView, syntaxHighlight }
