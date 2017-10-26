var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var distPath = path.join(__dirname, 'dist');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './src/index.jsx'
    },
    target: 'web',
    output: {
        path: distPath,
        filename: 'static/js/[name].js',
        publicPath: '/'
    },
    eslint: {
        configFile: './.eslintrc'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: 'index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            },
            chunks: ['common', 'main'],
            favicon: __dirname + '/favicon.ico',
            chunksSortMode: 'dependency'
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['eslint-loader'],
                exclude: /node_modules/,
                include: __dirname 
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader?limit=10240&name=static/images/[name].[hash:8].[ext]'
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader?limit=10240&name=static/fonts/[name].[hash:8].[ext]'
            },
            {
                test: /\.css?$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader?sourceMap")
            },
            {
                test: /\.less?$/,
                loader:  ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap!postcss-loader?sourceMap!less-loader?sourceMap"),
                include: __dirname
            }
        ]
    }
};
