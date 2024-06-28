const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

// https://webpack.js.org/plugins/

module.exports = {
    performance : {
        hints : false,
    },
    devServer: {
        //bonjour: true,
        client: {
            logging: 'verbose',
        },
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        compress: false,
        port: 9001,
        allowedHosts: 'auto',
        headers: {
            'X-Custom-Foo': 'bar',
        },
        devMiddleware: {
            index: 'hello.html', // '/'
            writeToDisk: true
        }
    },
    entry: './src/hello.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js', //'[id].[contenthash].js'
        //publicPath: 'auto',
        //publicPath: 'https://cdn.example.com/assets/',
        //publicPath: 'http://127.0.0.1:8899/',
        publicPath: '',
        clean: {
            dry: true,
            // keep: /\.css/,
        }
    },
    // https://webpack.js.org/configuration/mode/#usage
    mode: 'none', // 'none' 'development' 'production'
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000
        }
    },
    plugins: [
        new TerserPlugin(), // in production mode by default
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: 'src/template.hbs',
            title: 'Webpack App by Tom S.',
            filename: 'hello.html',
            meta: {
                description: 'A better Webpack Solution for hello-world',
            },
            minify: false
        }),
        // new ModuleFederationPlugin({
        //     name: 'HelloApp',
        //     filename: 'remoteEntry.js',
        //     exposes: {
        //         './Hello': './src/hello.js',
        //     },
        // }),
        // new ModuleFederationPlugin({
        //     name: 'CarApp',
        //     remotes: {
        //         'HelloApp': 'HelloApp@http://localhost:8899/remoteEntry.js',
        //     },
        // })
    ],
    module: {
        rules: [
            // {
            //     test: /\.(png|jpg|svg|webp)$/,
            //     type: 'asset',
            //     parser: {
            //         dataUrlCondition: {
            //             maxSize: 4 * 1024 // 4kb
            //         }
            //     }
            // },
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
