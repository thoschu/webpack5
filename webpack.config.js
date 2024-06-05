const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, '/'),
        },
        compress: true,
        port: 9000,
    },
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.[contenthash].js',
        //publicPath: 'auto',
        //publicPath: 'https://cdn.example.com/assets/',
        publicPath: 'dist/'
    },
    mode: 'none',
    plugins: [
        new TerserPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styling.[contenthash].css'
        }),
        new CleanWebpackPlugin()
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
