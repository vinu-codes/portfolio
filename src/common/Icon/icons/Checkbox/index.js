/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#E3E5EB' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="1.75"
        y="1.75"
        width="16.5"
        height="16.5"
        rx="3.25"
        stroke={stroke}
        strokeWidth="1"
      />
    </svg>
  )
}

export default IconPath
