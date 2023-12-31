import styled from 'styled-components'
import { media, mtFn, mbFn, ptFn, font } from '@common/Theme'

const MainWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  ${mtFn};
  ${ptFn};
`

const Subtitle = styled.div`
  width: 100%;
  max-width: 600px;
  h3.subtitle {
    margin: 0;
    color: #6a6cff;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    ${media.md`
    line-height: 24px;
    font-size: 21px;
    `}
  }
`

const Title = styled.div`
  width: 100%;
  max-width: 600px;
  h2.title {
    margin: 0;
    text-align: center;
    color: #2a2b66;
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
  background: rgba(255, 255, 255, 0.7);
  transition: all 0.4s ease-in-out;
  border-radius: 10px;
  margin-bottom: 24px;
  p {
    color: rgb(135 135 135);
    text-align: center;
    font-size: 18px;
    line-height: 32px;
    font-weight: ${font.thin};
  }
  ${media.sm`
    background: transparent;
    margin-bottom: 0;
    p {
      color: rgb(135 135 135);
      font-size: 18px;
      line-height: 32px;
      font-weight: ${font.thin};
    }
  `};
`

export { MainWrapper, Subtitle, Title, Info }
