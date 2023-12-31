import React from 'react'
import { TypeWriter } from '@components/TypeWriter'

import { MainWrapper, Subtitle, Title, Info } from './Main.styled'

const Main = (props) => {
  const {
    children,
    config = {},
    subtitle,
    title,
    info = [],
    className,
    ...rest
  } = props
  const { hasTypeWriter = false } = config

  const infoRender = () => {
    return info.map((info, index) => {
      return <p key={index}>{info}</p>
    })
  }

  return (
    <MainWrapper className={`main ${className ? className : ''}`} {...rest}>
      <Subtitle className="subtitle">
        <h3 className="subtitle">{subtitle}</h3>
      </Subtitle>
      {title && hasTypeWriter && (
        <Title className="title">
          <h2 className="title">{<TypeWriter text={title} speed={90} />}</h2>
        </Title>
      )}
      {title && !hasTypeWriter && (
        <Title className="title">
          <h2 className="title">{title}</h2>
        </Title>
      )}
      {info && <Info className="info">{infoRender()}</Info>}
      {children}
    </MainWrapper>
  )
}

export { Main }
