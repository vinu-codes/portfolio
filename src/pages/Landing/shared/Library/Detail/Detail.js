import React from 'react'
import { Button } from '@common/Button'
import { Link } from '@components/Route'
import { DottedBox, DetailContainer, Panel } from './Detail.styled'

const Detail = ({ items, title, link, children }) => {
  const renderItems = () => {
    if (!items || !items.length) return null
    const result = items.map((item, index) => (
      <li className="detail-item" key={index}>
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
        <Panel className="detail">
          {title && <h2 className="detail-title">{title}</h2>}
          {renderItems()}
          {link && (
            <Button>
              <Link external={true} to="https://github.com/vinu-codes">
                <span>View in Github</span>
              </Link>
            </Button>
          )}
        </Panel>
      )}
    </DetailContainer>
  )
}

export { Detail }
