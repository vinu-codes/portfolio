import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Context } from '@components/Route'
import { Icon } from '@common/Icon'
import {
  Container,
  Image,
  Group,
  IconContainer,
  MobileButton,
} from './NavBar.styled'
import profile from './assets/profile.png'

const NavBar = ({ title }) => {
  const { currentPath } = useContext(Context)

  return (
    <Container>
      <Image>
        <img src={profile} />
      </Image>

      <Group></Group>
      <MobileButton>
        <IconContainer>
          <Icon flip name="HAMBURGER" size={32} stroke="rgb(106, 108, 255)" />
        </IconContainer>
      </MobileButton>
    </Container>
  )
}

NavBar.defaultProps = {
  title: 'NavBar',
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
}

export { NavBar }
