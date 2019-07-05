// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        '@babel/polyfill',
        './src/index.js',
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]__[hash:base64:5]',
                            },
                        },
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            variables: path.resolve('./src/less/variables.less'),
            components: path.resolve('./src/js/components'),
            assets: path.resolve('./src/assets'),
            config: path.resolve('./src/js/config'),
            constants: path.resolve('./src/js/constants'),
            actions: path.resolve('./src/js/actions'),
            other: path.resolve('./src/js/other'),
            layouts: path.resolve('./src/js/layouts'),
            utils: path.resolve('./src/js/utils'),
        },
    },
};
