const express = require('express');
const app = express();
const startupDebugger=require('debug')('app:startup')

const dbDebugger=require('debug')('app:db');
const morgan = require('morgan');


if (app.get('env') === 'development') {
    ///Third party middle ware
    app.use(morgan('tiny'));
    startupDebugger("Morgan Enabled")
}



//database work


dbDebugger('Connected to the Database')
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});