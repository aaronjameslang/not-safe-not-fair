const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'deploy'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env'],
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {loader: "style-loader"},
          {loader:   "css-loader"},
          {loader:  "sass-loader"},
        ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Not Safe Not Fair',
      filename: 'index.html'
    })
  ],
}
