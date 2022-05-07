const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('src'));

app.get('*', (req, res) => {
    console.log(req.url);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>DEDOS 🖐</title>
        </head>
        <body>
        <div id="root"></div> 
        <script src="./app.js"></script>
        </body>
        </html>
    `);
})
// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Visit http://localhost:3000/\n');
});