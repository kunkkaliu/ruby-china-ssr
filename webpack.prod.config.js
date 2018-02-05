var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var SplitHashPlugin = require('split-hash-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

base.devtool = 'source-map';
// add hot-reload related code to entry chunks
Object.keys(base.entry).forEach(function (name) {
    base.entry[name] = [].concat(base.entry[name]);
});
// base.entry.unshift('babel-polyfill');
// use hash filename to support long-term caching
base.output.filename = 'static/js/[name].[chunkhash].js';
base.output.chunkFilename = 'static/js/[name].[chunkhash].js';
// add webpack plugins

// 减小bundle size是个很大的学问...
// https://chrisbateman.github.io/webpack-visualizer/
// http://stackoverflow.com/questions/34239731/how-to-minimize-the-size-of-webpacks-bundle
// https://webpack.github.io/docs/code-splitting.html
// http://survivejs.com/webpack/building-with-webpack/splitting-bundles/
base.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new AssetsPlugin({
        path: path.join(__dirname, 'dist'),
        filename: 'assets.json',
        fullPath: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
        },
        output: {
            comments: false
        }
    }),
    new SplitHashPlugin(),
    new ExtractTextPlugin("static/css/[name].[contenthash].css", {
        allChunks: true
    }),
    // extract vendor chunks
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'static/js/common.[chunkhash].js',
        minChunks: function (module, count) {
            return module.resource && module.resource.indexOf(path.resolve(__dirname, 'src')) === -1;
        }
    }),
    // extract manifest chunks
    new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        filename: 'static/js/manifest.[chunkhash].js',
        chunks: ['common']
    }),
    new webpack.optimize.DedupePlugin(),
    // 允许错误不打断程序
    new webpack.NoErrorsPlugin()
);

module.exports = base;