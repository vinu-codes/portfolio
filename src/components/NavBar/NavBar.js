import React, { useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Context } from '@components/Route'
import { Icon } from '@common/Icon'
import { useSize } from '@hooks/useSize'
import {
  Container,
  Image,
  Group,
  Item,
  IconContainer,
  MobileMenu,
  MobileButton,
  MobileGroup,
  MobileItem,
} from './NavBar.styled'
import profile from './assets/profile.png'

const NavBar = ({ title }) => {
  const { currentPath } = useContext(Context)
  const [isActive, setIsActive] = useState(false)
  const { width } = useSize()

  useEffect(() => {
    if (!!width && width >= 768) {
      setIsActive(false)
      const body = document.querySelector('body')
      body.style.overflow = 'auto'
    }
  }, [width])

  const toggleMenu = () => {
    setIsActive(!isActive)
    const body = document.querySelector('body')
    body.style.overflow = isActive ? 'auto' : 'hidden'
  }

  return (
    <Container className={isActive ? 'active' : 'not_active'}>
      <Image>
        <img src={profile} />
      </Image>
      <Group>
        <Item>
          <span>Home</span>
        </Item>
        <Item>
          <span>About</span>
        </Item>
        <Item>
          <span>Library</span>
        </Item>
        <Item>
          <span>Github</span>
        </Item>
      </Group>
      <MobileMenu className="mobile-menu">
        <MobileGroup className="mobile-group">
          <MobileItem className="mobile-item">
            <span>Home</span>
          </MobileItem>
          <MobileItem>
            <span>About</span>
          </MobileItem>
          <MobileItem>
            <span>Library</span>
          </MobileItem>
          <MobileItem>
            <span>Github</span>
          </MobileItem>
        </MobileGroup>
      </MobileMenu>

      <MobileButton onClick={toggleMenu}>
        <IconContainer>
          <Icon
            flip
            name={isActive ? 'CLOSE' : 'HAMBURGER'}
            size={32}
            stroke="rgb(106, 108, 255)"
          />
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
