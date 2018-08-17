'use strict';
const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const HtmlWebpackInjectAssetsPlugin = require('html-webpack-inject-assets-plugin');
const portfinder = require('portfinder');

const HOST = process.env.HOST;
const PORT = process.env.PORT && Number(process.env.PORT);
function requireTemplateData(path) {
  try {
    delete require.cache[require.resolve(path)];
    return require(path);
  } catch (e) {
    return () => {};
  }
}

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: (() => {
      const rules = utils.styleLoaders({sourceMap: config.dev.cssSourceMap, usePostCSS: true, extract: true});
      rules.push({
        test: /\.hbs\.html$/,
        loader: 'handlebars-loader',
        options: {
          extensions: ['.hbs.html'],
          knownHelpersOnly: false,
          // inlineRequires: /\/assets\/(:?images|audio|video)\//ig,
          helperDirs: [path.join(__dirname, '../', 'dev/helpers')],
          // partialDirs: [resolve('src/views/partial')],
        }
      });
      return rules;
    })()
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        {from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html')},
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? {warnings: false, errors: true}
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: utils.assetsPath(`css/[name].[hash].css`),
      chunkFilename: utils.assetsPath(`css/[id].[hash].css`),
    }),
    // // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      "window.jQuery": 'jquery',
      "windows.jQuery": 'jquery',
    }),
    new ExtraWatchWebpackPlugin({
      dirs: [path.resolve(__dirname, '../dev'), path.resolve(__dirname, '../src')]
    })
  ]
});

config.pages.forEach(page => {
  devWebpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      filename: `${page}.html`,
      template: path.resolve(__dirname, `../src/views/${page}.hbs.html`),
      inject: false,
      chunks: ['commons', page],
      templateParameters: () => requireTemplateData(path.resolve(__dirname, `../dev/data/${page}.js`))()
    })
  );
});
devWebpackConfig.plugins.push(new HtmlWebpackInjectAssetsPlugin());
if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  devWebpackConfig.plugins.push(new BundleAnalyzerPlugin())
}
module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      devWebpackConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
          ? utils.createNotifierCallback()
          : undefined
      }));

      resolve(devWebpackConfig)
    }
  })
});
