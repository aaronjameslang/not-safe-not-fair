const path = require('path');
const { spawnSync } = require('child_process');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          "cache-loader",
          {
            loader: 'babel-loader',
            options: {
              presets: ['babel-preset-env'],
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader"]
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      generateStatsFile: true,
      openAnalyzer: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      notsafenotfair: {
        build: {
          commithash: '"' + spawnSync('git', ['rev-parse', 'HEAD']).stdout.toString().slice(0, -1) + '"',
          dirty: spawnSync('git', ['diff', '--exit-code']).status,
          time: Date.now(),
        }
      }
    }),
    new UglifyJsPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  devServer: {
    contentBase: path.join(__dirname, "deploy"),
    host: "0.0.0.0"
  }
}
