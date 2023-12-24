import styled, { css } from 'styled-components'

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
  button {
    a {
      text-decoration: none;
    }
  }
  ${DarkStyle};
  padding-bottom: 24px;
  margin-top: 0;
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

  li.resume-link {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 24px;
    font-weight: 300;
    font-size: 16px;
    cursor: pointer;
  }
`
export { DarkStyle, DownloadLink, FooterContainer }
