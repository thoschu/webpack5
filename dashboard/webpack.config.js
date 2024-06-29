const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

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
        port: 9000,
        allowedHosts: 'auto',
        devMiddleware: {
            index: 'dashboard.html', // '/'
            writeToDisk: true
        },
        historyApiFallback: {
            index: 'dashboard.html'
        }
    },
    entry: './src/dashboard.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js', //'[id].[contenthash].js'
        publicPath: 'http://localhost:3000/',
        clean: {
            dry: true
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
            title: 'Webpack Dashboard by Tom S.',
            filename: 'dashboard.html',
            meta: {
                description: 'A better Webpack Solution for dashboard',
            },
            minify: false
        }),
        new ModuleFederationPlugin({
            name: 'DashboardApp',
            remotes: {
                'HelloWorldApp': 'HelloWorldApp@http://localhost:3001/remoteEntry.js',
                'CarApp': 'CarApp@http://localhost:3002/remoteEntry.js',
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/env' // compiles modern JS down to ES5
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
