var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var distPath = path.join(__dirname, 'dist_server');
module.exports = {
    entry: {
        main: ['./src/serverRender.jsx']
    },
    mode: 'production',
    target: 'node',
    output: {
        path: distPath,
        filename: 'js/[name].js',
        libraryTarget: 'commonjs2'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_debugger: true,
        //         drop_console: true
        //     },
        //     output: {
        //         comments: false
        //     }
        // }),
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    drop_console: true
                }
            }
        })
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    "babelrc": false,
                    "presets": [[
                        "env", {
                            "targets": {
                                "node": "current"
                            },
                            "useBuiltIns": true,
                            "debug": false
                        }
                    ], "react", "stage-0"],
                    "plugins": ["transform-decorators-legacy", "add-module-exports"]
                }
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
                test: /\.(less|css)$/,
                loader: 'ignore-loader'
            }
        ]
    },
    externals: [nodeExternals()]
};
