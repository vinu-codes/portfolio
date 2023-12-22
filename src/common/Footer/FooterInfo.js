import React from 'react'
import styled from 'styled-components'
import { Icon } from '@common/Icon'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  width: 24px;
  height: 24px;
`

const FooterContainer = styled.div.attrs({ className: 'FooterContainer' })`
  display: flex;
  width: 100%;
  flex-direction: column;
  h3 {
    text-indent: 8px;
    text-align: center;
    color: white;
    width: 100%;
  }
`

const Group = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  padding: 8px;
  width: 100%;
  justify-content: center;
`

const Link = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  span {
    color: #aeaeae;
    font-weight: 100;
    display: block;
    line-height: 24px;
    width: 100%;
    font-size: 16px;
  }

  &:hover {
    span {
      color: #6a6cff;
    }
  }
  &:active {
    span {
      color: #6a6cff;
    }
  }
`

const FooterInfo = ({ items = [], title, children }) => {
  const renderItems = () => {
    if (!items || !items.length) return null
    const result = items.map((item) => (
      <ListItem key={item.label}>
        <Link
          className="link"
          href={item.value}
          key={item.label}
          download={item.type === 'download' && item.download}
        >
          <span className="info">{item.label}</span>
          {!!item.icon && (
            <IconContainer>
              <Icon name={item.icon} viewBox="0 0 24 24" />
            </IconContainer>
          )}
        </Link>
      </ListItem>
    ))

    return <Group>{result}</Group>
  }

  return (
    <FooterContainer>
      <h3>{title}</h3>
      {renderItems()}
      {children}
    </FooterContainer>
  )
}

export { FooterInfo }
