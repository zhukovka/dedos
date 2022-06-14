import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import App from "./src/App";
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

app.use(express.static('dist'));

// if (process.env.NODE_ENV !== 'production') {
//     console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`)
//     const config = require('./webpack.config.js');
//     const compiler = webpack(config);
// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
//     app.use(
//         webpackDevMiddleware(compiler, {
//             publicPath: config.output.publicPath,
//         })
//     );
// }
const nodeStats = path.resolve(
    __dirname,
    './dist/node/loadable-stats.json',
)

const webStats = path.resolve(
    __dirname,
    './dist/web/loadable-stats.json',
)
app.get('*', (req, res) => {
    const nodeExtractor = new ChunkExtractor({ statsFile: nodeStats })
    // const { default: App } = nodeExtractor.requireEntrypoint()

    const webExtractor = new ChunkExtractor({ statsFile: webStats })
    const jsx = webExtractor.collectChunks(<App />)

    const html = renderToString(jsx)

    res.set('content-type', 'text/html')
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
        ${webExtractor.getLinkTags()}
        ${webExtractor.getStyleTags()}
        </head>
        <body>
          <div id="root">${html}</div>
          ${webExtractor.getScriptTags()}
        </body>
      </html>
    `)
})

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!\n');
});