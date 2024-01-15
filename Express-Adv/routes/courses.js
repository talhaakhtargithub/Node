
const express = require('express');
const router = express.Router();
const courses = [
    { name: 'Angular', id: 1 },
    { name: 'Angular-material', id: 2 },
    { name: 'Angular-Dev', id: 3 },
];


router.get('/', (req, res) => {
    res.send(courses);
});

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send(`The course with the given ID was not found`);
    }

    return res.send(course);
});

router.post('/', (req, res) => {
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

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
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

module.exports=router