const path = require('path');

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
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            // {
            //     test: /\.(png)$/,
            //     type: 'asset/resource'
            // },
            // {
            //     test: /\.(jpg)$/,
            //     type: 'asset/inline'
            // }
        ]
    }
};
