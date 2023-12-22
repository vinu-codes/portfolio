import React from 'react'
import styled, { css } from 'styled-components'
import { Grid, Row, Col } from '@common/Grid'
import { FooterInfo } from './FooterInfo'
import myPDF from './resume.pdf'

const FooterContainer = styled.div`
  flex-shrink: 0;
  background: #424242;
  padding: 36px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.3) 6px 0px 10px 1px;
  &:before {
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #7a7a7a;
    z-index: 1;
  }
`

const Footer = () => {
  return (
    <FooterContainer className="footer">
      <Grid marginX={0}>
        <Row>
          <Col>
            <FooterInfo
              items={[
                {
                  label: 'GitHub',
                  icon: 'GITHUB',
                  type: 'link',
                  value: 'https://github.com/vinu-codes',
                },
                {
                  label: 'LinkedIn',
                  icon: 'LINKED_IN',
                  type: 'link',
                  value: 'https://www.linkedin.com/in/vinujk/',
                },
                {
                  label: 'Resume',
                  icon: 'RESUME',
                  type: 'download',
                  value: myPDF,
                  download: 'resume',
                },
              ]}
            />
          </Col>
        </Row>
      </Grid>
    </FooterContainer>
  )
}
export { Footer }
