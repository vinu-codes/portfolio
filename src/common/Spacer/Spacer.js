import { colors } from '@common/Theme'
import styled from 'styled-components'

const SpacerContainer = styled.hr`
  width: 100%;
  margin-top: 24px;
  margin-bottom: 10px;
  position: relative;
  background: none;
  height: 16px;
  border: none;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: ${colors.lightPurple};
  }
`

const Spacer = () => <SpacerContainer />

export { Spacer }
