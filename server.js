const express = require('express');
const app = express();

app.use(express.static('src'));

app.get('/', (req, res) => {

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>DEDOS 🖐</title>
        </head>
        <body>
            <h1 class='dedo'>DEDOS 👍</h1>
            <ol>
                <li><a href="/polegar">Polegar</a></li>
            </ol>
        </body>
        </html>
    `);
})

app.get('/polegar', function (req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Polegar 👍</title>
        </head>
        <body>
            <h1 class='dedo'>Polegar 👍</h1>
        </body>
        </html>
    `);
})
// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('Visit http://localhost:3000/\n');
});