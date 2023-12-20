/* eslint-disable react/prop-types */
import React from 'react'

const IconPath = (props) => {
  const { stroke = '#fff' } = props
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <svg width="24" height="24" viewBox="0 0 178 178" fill="none">
        <path
          d="M30 126.123H137.123M30 152.655H137.123"
          stroke={stroke}
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M52.5522 104.897C53.2155 101.249 57.1953 61.7828 86.0489 59.7929C99.3149 59.7929 119.877 65.4972 122.53 104.234"
          stroke={stroke}
          strokeWidth="11"
          strokeLinecap="round"
        />
        <circle
          cx="88.7021"
          cy="40.8889"
          r="17.3889"
          stroke={stroke}
          strokeWidth="9"
        />
      </svg>
    </svg>
  )
}

export default IconPath
