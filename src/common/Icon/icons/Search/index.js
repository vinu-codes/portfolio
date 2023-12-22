/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { fill = 'none', stroke = '#A9AEB9' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill={fill}>
      <path
        d="M15.3798 15.0081L18.5909 18.13"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0557 9.80484C17.0557 13.5367 13.9359 16.6097 10.0278 16.6097C6.11973 16.6097 3 13.5367 3 9.80484C3 6.073 6.11973 3 10.0278 3C13.9359 3 17.0557 6.073 17.0557 9.80484Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
