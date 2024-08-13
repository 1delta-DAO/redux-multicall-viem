
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./redux-multicall-viem.cjs.production.min.js')
} else {
  module.exports = require('./redux-multicall-viem.cjs.development.js')
}
