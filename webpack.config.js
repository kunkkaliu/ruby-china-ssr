var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
    filename: 'static/css/[name]-one.[contenthash].css',
    allChunks: true
});
const extractLESS = new ExtractTextPlugin({
    filename: 'static/css/[name]-two.[contenthash].css',
    allChunks: true
});

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
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: 'index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            },
            chunks: ['manifest', 'common', 'main'],
            favicon: __dirname + '/favicon.ico',
            chunksSortMode: 'dependency'
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, '/src/assets/lib'),
            to: path.join(__dirname, '/dist/static/lib')
        }]),
        extractCSS
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: 'static/images/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: 'static/fonts/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.css?$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.less?$/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader', 'less-loader']
                })
            }
        ]
    }
};
