import React from 'react'

const IconPath = (props) => {
  const { stroke = '#A9AEB9', fill = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.00003 4L16 16M4 16L16 4.00003"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default IconPath
