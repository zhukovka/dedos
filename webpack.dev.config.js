const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        // hot: 'webpack/hot/dev-server.js',
        // client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    devtool: 'inline-source-map',
    // devServer: {
    //     static: './dist',
    //     hot: false,
    //     client: false
    // },
    plugins: [
        new HtmlWebpackPlugin({title: "Dedo", template: "./src/index.html"}),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    optimization: {
        // runtimeChunk: 'single',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /nodeModules/,
            use: {
                loader: 'babel-loader'
            }
        },{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset/resource',
        }]
    }
};