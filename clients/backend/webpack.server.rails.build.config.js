// Common webpack configuration for server bundle

const webpack = require('webpack');
const path = require('path');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

module.exports = {

  // the project dir
  context: __dirname,
  entry: [
    'babel-polyfill',
    './app/bundles/client/startup/serverRegistration',
  ],
  output: {
    filename: 'server-bundle.js',
    path: '../../app/assets/webpack/bs/backend',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      libs: path.join(process.cwd(), 'app', 'libs'),
      '#': path.resolve(__dirname, 'app', 'bundles', 'client', 'components'),
      'containers': path.resolve(
        __dirname, 'app', 'bundles', 'client', 'containers'
      ),
      'actions': path.resolve(
        __dirname, 'app', 'bundles', 'client', 'actions'
      ),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loaders: [
          'css/locals?modules&importLoaders=0&localIdentName=[name]__[local]__[hash:base64:5]',
        ],
      },
      {
        test: /\.scss$/,
        loaders: [
          'css/locals?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]',
          'sass',
          'sass-resources',
        ],
      },
    ],
  },

  sassResources: [
    './app/assets/styles/bs-variables.scss',
    './app/assets/styles/app-variables.scss'
  ],

};
