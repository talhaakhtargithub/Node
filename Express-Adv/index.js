const express = require('express');
const app = express();
require('dotenv').config();



const dbDebugger=require('debug')('app:db');
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const logger = require('./logger');
 const courses=require('./routes/courses')
 const main=require('./routes/main')


 app.use('/api/courses',courses)
 app.use('/',main)
// Cheking Enviornment
console.log(`Node_env:${process.env.NODE_ENV}`);
// console.log(`${app.get('env')}`);
// JSON and URL-encoded middleware with options

app.set('view engine','pug')
app.set('views','./views')

//Built-in Middleware
app.use(express.json());
//Built-in Middleware
//url encoded Payroll   key=value $ key=value
app.use(express.urlencoded({ extended: true }));
//Built-in Middleware
/// for sending css,html,js content
app.use(express.static('public'))

///Third party middle ware
app.use(helmet());



//configuration

console.log("Application name:" + config.get('name'));
console.log("Application mail:" + config.get('mail.host'));
console.log("Application mail Password:" + config.get('mail.password'));

// Enviornment Checking
if (app.get('env') === 'development') {
    ///Third party middle ware
    app.use(morgan('tiny'));
    console.log("Morgan Enabled")
}



// Custom Middleware
app.use(logger);
app.use(function (req, res, next) {
    console.log('Authenticating...');
    next();
});



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});



//  $env:app_password = "123" 
///  nodemon index.js