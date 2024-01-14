const express = require('express');
const app = express();
app.use(express.json());
const Joi = require('joi');

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
    const result = Joi.validate(req.body, schema);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
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



app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send(`The course with the given ID was not found`);
    }


    const index=courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)

})




app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if (!course) {
        return res.status(404).send(`The course with the given ID was not found`);
    }


    

})




function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required(),
    };
    return Joi.object(schema).validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
