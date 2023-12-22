import React from 'react'
import PropTypes from 'prop-types'

const NavBar = ({ title }) => {
  return <div>NavBar</div>
}

NavBar.defaultProps = {
  title: 'NavBar',
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export { NavBar }
