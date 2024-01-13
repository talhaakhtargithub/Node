const express = require('express');
const app = express();
const morgan = require('morgan');
const loggerMiddleWare = require('./5-logger');
const authorize = require('./6-middleware');

// Middleware
app.use([loggerMiddleWare, authorize]);
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
    res.send('Home 😒');
});

app.get('/about', (req, res) => {
    res.send('About 🤔');
});

app.get('/api/products', (req, res) => {
    res.send('Products 🤔');
});

app.get('/api/items', (req, res) => {
    res.send('Items 🤔');
});

// Server Listening
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}....`);
});
