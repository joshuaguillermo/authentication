//basic code for creating mongodb walang babaguhin

const monk = require('monk');

const url = 'localhost:27017/authfornewbs'; // ito lang babaguhin para makapagcreate ng bagong database

const db = monk(url);

db.then(() => {
    console.log('Connected correctly to server')
})
module.exports = db;