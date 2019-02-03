import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.(css|scss)$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.(jpg|jpeg|png|gif|mp3|svg)$/, loaders: ['file-loader'] }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
