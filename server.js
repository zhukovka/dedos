const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

app.use(express.static('dist'));

if (process.env.NODE_ENV !== 'production') {
    console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`)
    const config = require('./webpack.dev.config.js');
    const compiler = webpack(config);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
        })
    );
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})
// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});