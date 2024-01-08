const express = require('express');
const fs = require('fs/promises');

const app = express();
const port = 5000;

app.get('/', async (req, res) => {
    try {
        const home = await fs.readFile('./navbar-app/index.html', 'utf-8');
        res.send(home);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/style.css', async (req, res) => {
    try {
        const homestyle = await fs.readFile('./navbar-app/style.css', 'utf-8');
        res.setHeader('Content-Type', 'text/css');
        res.send(homestyle);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.use((req, res) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
