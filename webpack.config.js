const path = require('path');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');

const DIST_PATH = path.resolve(__dirname, 'dist')
const production = process.env.NODE_ENV === 'production'
const development = !production;

const getConfig = target => ({
    name: target,
    mode: development ? 'development' : 'production',
    target,
    entry: `./src/index.js`,
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        caller: { target },
                    },
                },
            },
        ],
    },
    optimization: {
        moduleIds: 'named',
        chunkIds: 'named',
    },
    externals:
        target === 'node' ? ['@loadable/component', nodeExternals()] : undefined,
    output: {
        path: path.join(DIST_PATH, target),
        filename: production ? '[name].js' : '[name].js',
        publicPath: `/${target}/`,
        libraryTarget: target === 'node' ? 'commonjs2' : undefined,
    },
    plugins: [new LoadablePlugin()],
})

module.exports = [getConfig('web'), getConfig('node')]