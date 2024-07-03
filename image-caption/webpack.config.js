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
        port: 9003,
        allowedHosts: 'auto',
        devMiddleware: {
            index: 'image-caption.html', // '/'
            writeToDisk: true
        },
        historyApiFallback: {
            index: 'image-caption.html'
        }
    },
    entry: './src/image-caption.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js', //'[id].[contenthash].js'
        publicPath: 'http://localhost:3003/',
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
            title: 'Webpack ImageCaption by Tom S.',
            filename: 'image-caption.html',
            meta: {
                description: 'A better Webpack Solution for image-caption',
            },
            minify: false
        }),
        new ModuleFederationPlugin({
            name: 'ImageCaptionApp',
            filename: 'remoteEntry.js',
            exposes: {
                './ImageCaption': './src/components/image-caption/image-caption.js',
            }
        })
    ],
    module: {
        rules: [
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
