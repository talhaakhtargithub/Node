const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Welcome, This is the home page');
});

app.get('/about', (req, res) => {
    res.send('Welcome, This is the About page');
});

app.get('/help', (req, res) => {
    res.send('Welcome, This is the help page');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
