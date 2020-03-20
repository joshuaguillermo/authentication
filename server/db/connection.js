const monk = require('monk');

const url = 'localhost:27017/authfornewbs';

const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server')
})
module.exports = db;