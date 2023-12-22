import styled, { css } from 'styled-components'

const monokiTheme = css`
  span {
    font-size: 14px;
    line-height: 21px;

    &.string {
      color: #ff8b39;
    }
    &.number-item {
      color: darkorange;
    }
    &.boolean {
      color: #f97e72;
    }
    &.null {
      color: #f97e72;
    }
    &.key {
      color: #2ee2fa;
    }
  }
`

const greyTheme = css`
  span {
    font-size: 14px;
    line-height: 21px;
    &.string {
      color: white;
    }
    &.number-item {
      color: white;
    }
    &.boolean {
      color: white;
    }
    &.null {
      color: white;
    }
    &.key {
      color: grey;
    }
  }
`
const getTheme = (val) => {
  if (!val || !val.length) return 'DEFAULT'
  const resultTheme = val.toUpperCase()
  return resultTheme
}

const themePicker = (theme) => {
  const match = getTheme(theme)
  return {
    GREY: greyTheme,
    MONOKI: monokiTheme,
    DEFAULT: monokiTheme,
  }[match]
}

const SyntaxPre = styled.pre`
  outline: 1px solid transparent;
  padding: 8px;
  margin: 0px;
  color: white;
  margin-top: 16px;
  background: #1f2428;
  overflow: auto;
  ${monokiTheme};
  ${(props) =>
    props.maxHeight &&
    css`
      max-height: ${props.maxHeight}px;
    `};
`

const syntaxHighlight = (json) => {
  const updateJson = json
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return updateJson.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = 'number-item'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key'
        } else {
          cls = 'string'
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean'
      } else if (/null/.test(match)) {
        cls = 'null'
      }
      return '<span class="' + cls + '">' + match + '</span>'
    },
  )
}

export { SyntaxPre, syntaxHighlight }
