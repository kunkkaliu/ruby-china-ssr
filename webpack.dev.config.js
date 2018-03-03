var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

base.mode = 'development';
// base.devtool = 'cheap-module-eval-source-map';
// add hot-reload related code to entry chunks
Object.keys(base.entry).forEach(function (name) {
    base.entry[name] = ['react-hot-loader/patch', 'webpack-hot-middleware/client'].concat(base.entry[name]);
});
// base.entry.unshift('babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client');
base.optimization = {
    runtimeChunk: {
        name: "manifest"
    },
    splitChunks: {
        cacheGroups: {
            common: {
                test: /[\\/]node_modules[\\/]/,
                name: "common",
                chunks: "all"
            }
        }
    }
};
base.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
        filename: 'static/css/[name].css',
        allChunks: true
    })
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'common',
    //     filename: 'static/js/common.js',
    //     minChunks: function (module, count) {
    //         return module.context && module.context.indexOf('node_modules') >= 0;
    //     }
    // }),
    // // extract manifest chunks
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'manifest',
    //     filename: 'static/js/manifest.js',
    //     chunks: ['common']
    // })
);

module.exports = base;
