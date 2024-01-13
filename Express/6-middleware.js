// authorize.js
const { people } = require('./3-data_json');

const authorize = (req, res, next) => {
    const { user } = req.query;

    if (user) {
        const userFind = people.find(obj => obj.name === user);

        if (userFind) {
            req.user = { ...userFind };
            next();
        } else {
            res.status(401).send('User not found');
        }
    } else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = authorize;