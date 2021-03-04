const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = path.join(__dirname, '..');
const webpackEnv = process.env.NODE_ENV || 'development';

module.exports = {
  mode: webpackEnv,
  entry: {
    app: path.join(rootDir, './index.web.ts'),
  },
  output: {
    path: path.resolve(rootDir, 'dist'),
    filename: 'app-[hash].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js|mjs)$/,
        exclude: /node_modules[/\\](?!react-native-vector-icons)/,
        use: {
          loader: 'babel-loader',
          options: {
            // Disable reading babel configuration
            babelrc: false,
            configFile: false,

            // The configuration for compilation
            presets: [
              ['@babel/preset-env', {useBuiltIns: 'usage'}],
              '@babel/preset-react',
              '@babel/preset-flow',
              '@babel/preset-typescript',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [
      '.web.tsx',
      '.web.ts',
      '.tsx',
      '.ts',
      '.web.jsx',
      '.web.js',
      '.jsx',
      '.js',
    ], // read files in fillowing order
    alias: {
      'react-native$': require.resolve('react-native-web'),
    },
  },
  // Development server config
  devServer: {
    contentBase: [path.join(__dirname, 'web')],
    historyApiFallback: true,
  },
};
