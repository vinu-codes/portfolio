import styled, { css } from 'styled-components'

const sizes = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 480px)',
  md: '(min-width: 480px)',
}

const media = {
  xs: (...args) => css`
    @media ${sizes.xs} {
      ${css(...args)};
    }
  `,
  sm: (...args) => css`
    @media ${sizes.sm} {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media ${sizes.md} {
      ${css(...args)};
    }
  `,
}

export { media }
