'use strict'

const LiveReloadPlugin = require('webpack-livereload-plugin')
    , devMode = require('.').isDevelopment

/**
 * Fast source maps rebuild quickly during development, but only give a link
 * to the line where the error occurred. The stack trace will show the bundled
 * code, not the original code. Keep this on `false` for slower builds but
 * usable stack traces. Set to `true` if you want to speed up development.
 */

    , USE_FAST_SOURCE_MAPS = false

module.exports = {
  entry: './browser/js/app.js', 
  output: {
    path: __dirname,
    filename: './browser/bundle.js' 
  },
  context: __dirname,
  devtool: devMode && USE_FAST_SOURCE_MAPS
    ? 'cheap-module-eval-source-map'
    : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  module: {
    rules: [
      {
      test: /jsx?$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
      ]
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
    ]
  },
  plugins: devMode
    ? [new LiveReloadPlugin({appendScriptTag: true})]
    : []
}