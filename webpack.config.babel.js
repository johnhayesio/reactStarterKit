import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const VENDOR_LIBS = [ 'faker', 'tachyons', 'react', 'react-dom', 'react-input-range', 'react-redux', 'react-router', 'redux', 'redux-form', 'redux-thunk' ]

module.exports = {
  entry: { bundle: './app/index.js', vendor: VENDOR_LIBS },
  output: { path: path.resolve(__dirname, 'build'), filename: '[name].[chunkhash].js' },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(css|scss)$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.(jpg|jpeg|png|gif|mp3|svg)$/, loaders: ['file-loader'] }
    ]
  },
  mode: 'development',
  devServer: { port: 5555 },
  optimization: {
    runtimeChunk: { name: 'manifest' },
    splitChunks: { cacheGroups: { vendor: { chunks: 'initial', test: 'vendor', name: 'vendor', enforce: true } } }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
