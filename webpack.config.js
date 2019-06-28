const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, './');
const SRC_DIR = path.resolve(__dirname, './src');

module.exports = {
    entry: {
        common: ['@babel/polyfill', `${SRC_DIR}/common.js`],
        counter: ['@babel/polyfill', `${SRC_DIR}/script.js`],
        githubapi: ['@babel/polyfill', `${SRC_DIR}/script3.js`]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'], 
        }]  
    },
    devtool: 'cheap-module-eval-source-map',
    devServer : {
        historyApiFallback: true,
        hot: true, // 실시간refresh
        inline: true,
        overlay: {
            warning: true,
            errors: true
        },
        stats: {
            color: true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 저장하면 자동 갱신
        new htmlWebpackPlugin({
            template: './public/index.html',
            chunks : ['common'],
            hash : true,
            //inject: 'body',
            showErrors: true,
            filename : 'index.html',
        }),
        new htmlWebpackPlugin({
            template: './public/counter.html',
            chunks : ['common', 'counter'],
            hash : true,
            //inject: 'body',
            showErrors: true,
            filename : 'counter.html',
        }),
        new htmlWebpackPlugin({
            template: './public/githubapi.html',
            chunks : ['common', 'githubapi'],
            hash : true,
            //inject: 'body',
            showErrors: true,
            filename : 'githubapi.html',
        })
    ]
}