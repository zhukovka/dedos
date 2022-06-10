const express = require('express');
const app = express();
app.use(express.static('src'));

app.get('*', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>DEDOS 🖐</title>
        </head>
        <body>
        <div id="root">
        <!--   The Content Will Be Here -->
        </div> 
        <script src="./index.js"></script>
        </body>
        </html>
    `);
})
// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Visit http://localhost:3000/\n');
});