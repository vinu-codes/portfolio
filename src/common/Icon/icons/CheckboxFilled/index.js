import React from 'react'

const IconPath = (props) => {
  const { fill = '#64d36c', stroke = '#fff' } = props
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect
        x="1.5"
        y="1.5"
        width="17"
        height="17"
        rx="3.5"
        fill={fill}
        stroke={fill}
      />
      <path
        d="M7 11.5L8.63636 13.1364L14.7727 7"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconPath
