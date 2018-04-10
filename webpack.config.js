const path = require('path')
const { spawnSync } = require('child_process')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const {
  DEBUG
} = process.env

const commonPlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || DEBUG ? 'debug' : 'production'),
    notsafenotfair: {
      build: {
        commithash: '"' + spawnSync('git', ['rev-parse', 'HEAD']).stdout.toString().slice(0, -1) + '"',
        dirty: spawnSync('git', ['diff', '--exit-code']).status,
        time: Date.now()
      }
    }
  })
]

if (!DEBUG) {
  commonPlugins.push(new UglifyJsPlugin())
}

if (process.env.ANALYSE) {
  commonPlugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      openAnalyzer: false
    })
  )
}

const clientConfig = {
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'deploy', 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: DEBUG ? 'source-map' : undefined,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Not Safe Not Fair',
      filename: 'index.html',
      inlineSource: '.'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new ExtractTextPlugin('styles.css')
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
