const webpackConfig = require('./webpack.client.base.config')

const path = require('path')
const webpack = require('webpack')

const stJsPath = `${__dirname}/app/assets/javascripts/bl_styleguide`
const jsTestsPath = `${__dirname}/test/javascripts`
// const one = `${jsTestsPath}`

const browser = process.env.KARMA_BROWSER || 'PhantomJS'

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

webpackConfig.devtool = 'inline-source-map'

// Needed by Enzyme
webpackConfig.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
}

webpackConfig.module.loaders.push(
  {
    test: /\.jsx?$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
  },
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
  {test: /\.json$/, loader: 'json'}
)

webpackConfig.resolve.alias['testHelpers'] = path.resolve(
  __dirname, 'test', 'helpers'
)

// Leave out CommonsChunkPlugin which creates problems with karma-webpack
// https://github.com/webpack/karma-webpack/issues/24
const commonsChunkPluginIndex = webpackConfig.plugins.findIndex(
  (plugin)=> plugin.chunkNames
)
webpackConfig.plugins.splice(commonsChunkPluginIndex, 1)

module.exports = function(config) {
  config.set({
    browsers: [browser],
    singleRun: true,
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['dots'],
    webpack: webpackConfig,
    files: ['test/entry.js'],
    preprocessors: {
      'test/entry.js': ['webpack', 'sourcemap']
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    // For CircleCI testing report
    junitReporter: {
      outputDir: `${process.env['CIRCLE_TEST_REPORTS']}/junit`,
      useBrowserName: false,
      outputFile: 'test-results.xml'
    }
  })
}
