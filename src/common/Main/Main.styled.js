import styled from 'styled-components'
import { media, mtFn, mbFn, ptFn, font } from '@common/Theme'
import { colors } from '@common/Theme'

const MainWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative;
  ${mtFn};
  ${ptFn};
`

const Subtitle = styled.div`
  width: 100%;
  max-width: 600px;
  h3.subtitle {
    margin: 0;
    color: ${(props) => props.theme.colors.lightPurple};
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    ${media.md`
    line-height: 24px;
    font-size: 21px;
    `};
  }
`

const Title = styled.div`
  width: 100%;
  max-width: 600px;
  h2.title {
    margin: 0;
    text-align: center;
    color: ${(props) => props.theme.colors.navyBlue};
    font-weight: 600;
    font-size: 27px;
    line-height: 48px;
    ${media.md`
    font-size: 44px;
    line-height: 64px;
    `}
  }
`

const Info = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 16px;
  transition: all 0.4s ease-in-out;
  border-radius: 10px;
  margin-bottom: 24px;
  p {
    color: ${(props) => props.theme.colors.text};
    text-align: center;
    font-size: 18px;
    line-height: 32px;
    font-weight: ${font.thin};
  }
  ${media.sm`
    margin-bottom: 0;
    p {
      color: ${(props) => props.theme.colors.text};
      font-size: 18px;
      line-height: 32px;
      font-weight: ${font.thin};
    }
  `};
`

export { MainWrapper, Subtitle, Title, Info }
