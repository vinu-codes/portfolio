/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const IconPath = (props) => {
  const { fill = 'none', stroke = '#A9AEB9' } = props
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill={fill}>
      <path
        d="M3.25 10.25L7.75 5.75L12.25 10.25"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
