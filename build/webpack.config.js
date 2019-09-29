/* global __dirname, require, module*/

// const webpack = require('webpack');
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

let libraryName = pkg.name;

let outputFile;
let mode;

if (env === 'build') {
  mode = 'production';
  outputFile = libraryName + '.min.js';
} else {
  mode = 'development';
  outputFile = libraryName + '.js';
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: true,
    failOnError: mode === 'production',
    fix: mode !== 'production',
  }
})

const config = {
  mode: mode,
  entry: __dirname + '/src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      ...createLintingRule(),
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.opts$/,
        loader: 'ignore-loader'
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src/**')],
    extensions: ['.json', '.js']
  },
  // plugins: [
  //   // copy custom static assets
  //   new CopyWebpackPlugin([
  //     {
  //       from: path.resolve(__dirname, './assets'),
  //       to: 'assets',
  //       ignore: ['.*'],
  //     },
  //   ]),
  // ]
};

module.exports = config;
