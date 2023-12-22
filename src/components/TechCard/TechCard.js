import React from 'react'
import styled from 'styled-components'
import { TechLogo } from './TechLogo'
import { media } from '@utils'

const ListItem = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 50%;
  margin-top: 16px;
  margin-left: 0;
  display: flex;
  justify-content: center;
  ${media.xs`
    width: 33%;
  `};
  ${media.sm`
    width: 20%;
  `};
`

const Card = styled.div`
  max-width: 140px;
  /* min-width: 140px; */
  height: 84px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
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
  padding: 0px 10px 8px 10px;
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
const TechCard = ({ label, name }) => {
  return (
    <ListItem>
      <Card>
        <Image>
          <TechLogo name={name} />
        </Image>
        <Text>
          <span>{label}</span>
        </Text>
      </Card>
    </ListItem>
  )
}

export { TechCard }
