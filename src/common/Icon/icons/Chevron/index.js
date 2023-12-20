/* eslint-disable react/prop-types */
import React from 'react'
const IconPath = (props) => {
  const { fill = '#64d36c' } = props
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20">
      <g stroke="none" strokeWidth="1.5" fill="none" fillRule="evenodd">
        <path
          fill={fill}
          d="M8.0554,11.7677 L10.0004,9.8237 L11.9444,11.7677 C12.2374,12.0607 12.7124,12.0607 13.0054,11.7677 C13.2984,11.4747 13.2984,10.9997 13.0054,10.7067 L10.5304,8.2317 C10.2374,7.9397 9.7624,7.9397 9.4694,8.2317 L6.9944,10.7067 C6.7014,10.9997 6.7014,11.4747 6.9944,11.7677 C7.2874,12.0607 7.7624,12.0607 8.0554,11.7677"
        />
      </g>
    </svg>
  )
}

export default IconPath
