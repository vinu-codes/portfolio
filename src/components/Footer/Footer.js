import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from '@components/Route'
import resume from './resume.pdf'

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  width: 24px;
  height: 24px;
`

const DarkStyle = css`
  box-shadow: 11px 0px 12px 6px rgba(0, 0, 0, 0.3);
  background: linear-gradient(
    45deg,
    #44484d 1%,
    #313539 1%,
    #313539 49%,
    #44484d 49%,
    #44484d 51%,
    #313539 51%,
    #313539 99%,
    #44484d 99%
  );
  background-size: 16px 16px;
  background-position: 0 0;
  background-color: #313539;
`

const DownloadLink = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  span {
    color: white;
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

const FooterContainer = styled.div`
  ${DarkStyle};
  padding-bottom: 24px;
  margin-top: 48px;
  padding-top: 48px;
  div.row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  div.copy {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    span {
      font-weight: 300;
      padding-top: 8px;
      color: white;
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 8px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 16px;
    border-bottom: 1px solid white;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 8px;
    &:first-child {
      margin-left: 0;
    }
    a {
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      line-height: 24px;
      font-weight: 300;
      font-size: 16px;
    }
  }
`

const Footer = () => (
  <FooterContainer className="footer">
    <div className="row">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="https://github.com/vinu-codes">Github</Link>
        </li>
        <li>
          <Link to="https://www.linkedin.com/in/vinujk/">LinkedIn</Link>
        </li>
        <li>
          <DownloadLink className="link" href={resume} download="resume">
            <span className="info">Resume</span>
          </DownloadLink>
        </li>
      </ul>
    </div>
    <div className="copy">
      <span>Copyright &#169;2024</span>
    </div>
  </FooterContainer>
)

export { Footer }
