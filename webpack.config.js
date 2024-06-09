const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://webpack.js.org/plugins/

module.exports = {
    devServer: {
        //bonjour: true,
        client: {
            logging: 'verbose',
        },
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        compress: true,
        port: 9000,
        allowedHosts: 'auto',
        headers: {
            'X-Custom-Foo': 'bar',
        },
        devMiddleware: {
            index: '/', // 'hello.html'
            writeToDisk: true
        }
    },
    entry: {
        hello: './src/hello.js',
        car: './src/car.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js', //'[id].[contenthash].js'
        //publicPath: 'auto',
        //publicPath: 'https://cdn.example.com/assets/',
        publicPath: '',
        // clean: {
        //     dry: true,
        //     keep: /\.css/,
        // }
    },
    // https://webpack.js.org/configuration/mode/#usage
    mode: 'none', // 'none' 'development' 'production'
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 4000
        }
    },
    plugins: [
        new TerserPlugin(), // in production mode by default
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({}),
        // new HtmlWebpackPlugin({
        //     template: 'src/template.hbs',
        //     title: 'Webpack App by Tom S.',
        //     filename: 'index.html',
        //     meta: {
        //         description: 'A better Webpack Solution',
        //     },
        //     minify: true
        // })
        new HtmlWebpackPlugin({
            template: 'src/template.hbs',
            title: 'Webpack App by Tom S.',
            filename: 'hello.html',
            meta: {
                description: 'A better Webpack Solution',
            },
            minify: true,
            chunks: ['hello']
        }),
        new HtmlWebpackPlugin({
            template: 'src/template.hbs',
            title: 'Webpack Car by Tom S.',
            filename: 'car.html',
            meta: {
                description: 'A better Webpack Solution for Car',
            },
            minify: false,
            chunks: ['car']
        })
    ],
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg)$/,
            //     type: 'asset/resource'
            // },
            // {
            //     test: /\.(svg)$/,
            //     type: 'asset/inline'
            // },
            {
                test: /\.(png|jpg|svg|webp)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024 // 4kb
                    }
                }
            },
            {
                test: /\.txt/,
                type: 'asset/source'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env' // compiles modern JS down to ES5
                        ],
                        plugins: [
                            [
                                '@babel/plugin-proposal-record-and-tuple',
                                {
                                    'importPolyfill': true
                                }
                            ]
                        ]
                    }
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    }
};
