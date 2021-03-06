/* eslint-disable */
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'index.js'
  },
  optimization: {
    minimize: false
  }
})