import React from 'react'
import { Button } from '@common/Button'
import { Link } from '@components/Route'
import { DottedBox, DetailContainer, Panel } from './Detail.styled'

const Detail = ({ items, title, link, children }) => {
  const renderItems = () => {
    if (!items || !items.length) return null
    const result = items.map((item, index) => (
      <li className="detail-item" key={index}>
        {item.title && <h3 className="detail-subtitle">{item.title}</h3>}
        <span>{item.label}</span>
      </li>
    ))
    return <ul className="detail-group">{result}</ul>
  }

  return (
    <DetailContainer>
      {children && (
        <Panel>
          <DottedBox>{children}</DottedBox>
        </Panel>
      )}
      {!!items && !!title && (
        <Panel className="detail-panel">
          {title && <h2 className="detail-title">{title}</h2>}
          {renderItems()}
          {link && (
            <Button className="detail-button">
              <Link
                className="detail-link"
                target="_blank"
                external={true}
                to={link}
              >
                <span>View in GitHub</span>
              </Link>
            </Button>
          )}
        </Panel>
      )}
    </DetailContainer>
  )
}

export { Detail }
