const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const { spawnSync } = require('child_process')

const commonPlugins = [
  new webpack.DefinePlugin({
    notsafenotfair: {
      build: {
        commithash: '"' + spawnSync('git', ['rev-parse', 'HEAD']).stdout.toString().slice(0, -1) + '"',
        dirty: spawnSync('git', ['diff', '--exit-code']).status,
        time: Date.now()
      }
    }
  })
]

const clientConfig = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'deploy', 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Not Safe Not Fair',
      filename: 'index.html',
      inlineSource: '.'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ].concat(commonPlugins),
  devServer: {
    contentBase: path.join(__dirname, 'deploy'),
    host: '0.0.0.0'
  }
}

const serverConfig = {
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'deploy'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/\.\/native/, /\/pg\//)
  ].concat(commonPlugins)
}

module.exports = [clientConfig, serverConfig]
