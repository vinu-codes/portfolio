import React from 'react'
import styled from 'styled-components'
import { TechLogo } from './TechLogo'
import { media } from '@common/Theme'

const ListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 16px;
  margin-left: 0;
  display: flex;
  max-width: 90px;
  width: 100%;
  justify-content: center;
  ${media.md`
  max-width: 120px;`}
`

const Card = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
  background: white;
  transition: all 0.2s ease-in-out;
  box-shadow: 1px 2px 20px 0px rgba(0, 0, 0, 0.14);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Image = styled.div`
  width: 36px;
  height: 36px;
  padding: 0px 0px 8px 0px;
  ${media.md`
  width: 100%;
  height: 100%;
  padding: 0 10px 8px 8px;`}
  svg {
    width: 100%;
    height: 100%;
  }
`
const Text = styled.div`
  span {
    color: grey;
    padding-bottom: 8px;
  }
`
const TechCard = ({ label, name }) => (
  <ListItem className="list-item">
    <Card className="card">
      <Image className="image">
        <TechLogo className="tech-logo" name={name} />
      </Image>
      <Text className="tech-text">
        <span>{label}</span>
      </Text>
    </Card>
  </ListItem>
)

export { TechCard }
