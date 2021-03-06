// basic code for building express walang babaguhin sa port 5000

const express = require('express');
const volleyball = require('volleyball');
//const bodyParser = require('body-parser');
const app = express();
const auth = require('./auth/index.js');

app.use(volleyball);

//app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello joshua'
    });
});
app.use('/auth', auth); ///pag may request na pumasok dito pasok sya sa auth/index.js

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000; /// dito ilalagay yung port ng webpage
app.listen(port, () => {
    console.log('Listening on port', port);
});