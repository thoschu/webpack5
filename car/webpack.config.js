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
        compress: true,
        port: 9002,
        allowedHosts: 'auto',
        headers: {
            'X-Custom-Foo': 'bar',
        },
        devMiddleware: {
            index: 'car.html', // '/'
            writeToDisk: true
        }
    },
    entry: './src/car.js',
    // entry: {
    //     hello: './src/hello.js',
    //     // car: './src/car.js',
    //     car: {
    //         import: './src/car.js',
    //         // dependOn: 'shared',
    //     }
    // },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[contenthash].js', //'[id].[contenthash].js'
        //publicPath: 'auto',
        //publicPath: 'https://cdn.example.com/assets/',
        //publicPath: 'http://127.0.0.1:8899/',
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
            minSize: 3000
        }
    },
    plugins: [
        new TerserPlugin(), // in production mode by default
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({}),
        new HtmlWebpackPlugin({
            template: 'src/template.hbs',
            title: 'Webpack Car by Tom S.',
            filename: 'car.html',
            meta: {
                description: 'A better Webpack Solution for car',
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
                test: /\.scss$/,
                use: [
                    //'style-loader', 'css-loader', 'sass-loader'
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader'
            }
        ]
    }
};
