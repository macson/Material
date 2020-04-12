const autoprefixer = require('autoprefixer');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./app.scss', './app.js'],
  output: {
    filename: 'style-bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          {loader: 'extract-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
              options: {
              webpackImporter: false,
                sassOptions: {
                  includePaths: ['node_modules'],
                },
                implementation: require('dart-sass'),
            },
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      }
    ],
  },
};