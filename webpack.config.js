const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, './dist'),
        },
        compress: true,
        port: 8080,
        allowedHosts: 'auto',
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[contenthash].js',
        //publicPath: 'auto',
        //publicPath: 'https://cdn.example.com/assets/',
        publicPath: '',
        // clean: {
        //     dry: true,
        //     keep: /\.css/,
        // }
    },
    mode: 'none',
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styling.[contenthash].css'
        }),
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
            title: "Webpack App by Tom S.",
            filename: 'index.html',
            meta: {
                discription: 'A better Webpack Starter',
            }
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
                test: /\.(png|jpg|svg)$/,
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
            }
        ]
    }
};
