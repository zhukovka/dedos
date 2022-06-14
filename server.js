import path from 'path'
import express from 'express'
import React, {StrictMode} from 'react'
import { renderToString } from 'react-dom/server'
import { ChunkExtractor } from '@loadable/server'
import App from "./src/App";
import { StaticRouter } from "react-router-dom/server";

const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();

app.use(express.static('dist'));

const webStats = path.resolve(
    __dirname,
    './dist/web/loadable-stats.json',
)
app.get('*', (req, res) => {
    let url = req.originalUrl;
    const webExtractor = new ChunkExtractor({ statsFile: webStats })
    const jsx = webExtractor.collectChunks(<App />)
    const html = renderToString(<StrictMode><StaticRouter location={url}>{jsx}</StaticRouter></StrictMode>);

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