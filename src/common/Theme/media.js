import styled, { css } from 'styled-components'

const sizes = {
  xs: '(min-width: 480px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1200px)',
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
  lg: (...args) => css`
    @media ${sizes.lg} {
      ${css(...args)};
    }
  `,
}

export { media }
