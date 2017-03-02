import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const prod = process.argv.indexOf('-p') !== -1

export default {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', '..', 'webroot', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff)$/,
        loader: 'url-loader',
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!sass-loader',
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader!image-webpack-loader'
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  devtool: prod ? false : 'inline-source-map'
}