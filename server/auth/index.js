const express = require('express');
const router = express.Router();
const Joi = require('joi');
const bcrypt = require('bcryptjs');
const md5 = require('md5');
const db = require('../db/connection.js');
const users = db.get('users');

users.createIndex('username', { unique: true });

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]*$)/).min(3).max(30).required(),
    password: Joi.string().min(6).required()

});


//any route in here is pre pended with /auth
router.get('/', (req, res) => {
    res.json({
        message: 'authentication work'
    });
});


router.post('/signup', (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if (result.error === null) {
        users.findOne({
            username: req.body.username
        }).then(user => {
            res.json({ user });
            console.log(req.body);
            if (user) {
                console.log('usernametaken');
            } else {

                const newUser = {
                    username: req.body.username,
                    password: req.body.password
                };
                user.insert(newUser);
            }
        });
    } else {
        next(result.error);
    }
});
module.exports = router;