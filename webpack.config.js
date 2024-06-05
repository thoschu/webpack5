const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        //publicPath: 'auto',
        //publicPath: 'https://cdn.example.com/assets/',
        publicPath: 'dist/'
    },
    mode: 'none',
    plugins: [
        new TerserPlugin(),
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
                    'style-loader', 'css-loader', 'sass-loader'
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
