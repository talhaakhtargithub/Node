const express = require('express');
const app = express();
require('dotenv').config();

const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const logger = require('./logger');


// console.log(`Node_env:${process.env.NODE_ENV}`);
// console.log(`${app.get('env')}`);
// JSON and URL-encoded middleware with options
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/// for sending css,html,js content
app.use(express.static('public'))

///Third party middle ware
app.use(helmet());

//config

console.log("Application name:"+config.get('name'));
console.log("Application mail:"+config.get('mail.host'));
console.log("Application mail Password:"+config.get('mail.password'));


if (app.get('env')==='development'){
    app.use(morgan('tiny'));
    console.log("Morgan")
}



// Custom Middleware
app.use(logger);
app.use(function (req, res, next) {
    console.log('Authenticating...');
    next();
});

const courses = [
    { name: 'Angular', id: 1 },
    { name: 'Angular-material', id: 2 },
    { name: 'Angular-Dev', id: 3 },
];

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send(`The course with the given ID was not found`);
    }

    return res.send(course);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required(),
    };

    const { error } = Joi.object(schema).validate(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send(`The course with the given ID was not found`);
    }

    const { error } = validateCourse(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send(`The course with the given ID was not found`);
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

const validateCourse = (course) => {
    const schema = {
        name: Joi.string().min(3).required(),
    };
    return Joi.object(schema).validate(course);
};

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
