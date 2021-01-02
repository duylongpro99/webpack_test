// webpack.config.js
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const  CopyPlugin = require("copy-webpack-plugin");
module.exports = {
    // 1. [context]: src is the folder with all the
  // sources and so that webpack would watch all
  // the files in this folder, we write the 'context' field.

  // 2. [__dirname]: responsible for the absolute
  // path to the current folder.
  // In my case, this is the pureJsTemplate folder.
  context: path.resolve(__dirname, 'src'),
  mode:'development',

  //3. [entry]: entry point for the application.
  entry: './index.js',

  //4. [output]: the path and file name where we will add all our javascript code.
  output: {
      filename: 'bundle.[hash].js',
      path: path.resolve(__dirname,'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: 'index.html'}),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        }
      ]
    })
  ]
}