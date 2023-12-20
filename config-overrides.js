const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  addWebpackAlias({
    ['@pages']: path.resolve(__dirname, './src/pages'),
    ['@common']: path.resolve(__dirname, './src/common'),
    ['@components']: path.resolve(__dirname, './src/components'),
    ['@utils']: path.resolve(__dirname, './src/utils'),
    ['@hooks']: path.resolve(__dirname, './src/hooks'),
  }),
)
