var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var distPath = path.join(__dirname, 'dist_server');
module.exports = {
    entry: {
        main: ['babel-polyfill', './src/serverRender.jsx']
    },
    target: 'node',
    output: {
        path: distPath,
        filename: 'js/[name].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            },
            output: {
                comments: false
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    "babelrc": false,
                    "presets": ["es2015", "react", "stage-0"],
                    "plugins": ["transform-runtime", "transform-decorators-legacy", "add-module-exports"]
                }
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader?limit=10240&name=images/[name].[hash:8].[ext]'
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader?limit=10240&name=fonts/[name].[hash:8].[ext]'
            },
            {
                test: /\.(less|css)$/,
                loader: 'ignore-loader'
            },
            {
                test: /\.(json)$/,
                loader: 'json-loader'
            }
        ]
    },
    externals: [nodeExternals()]
};
