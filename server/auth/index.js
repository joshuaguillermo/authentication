const express = require('express'); // para makapgusap yung mga applciations
const router = express.Router(); // pra makita lahat 
const Joi = require('joi'); // para sa username at password kung tama yung ilalagay sa database 
const bcrypt = require('bcryptjs'); // encryption sa password

const db = require('../db/connection.js'); // database connection
const users = db.get('users'); // gagawa ng databse and ang pangalan ng variable is users

users.createIndex('username', { unique: true }); // Creates an index on the db and collection (will not create if already exists)

const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]*$)/).min(3).max(30).required(),
    password: Joi.string().trim().min(10).required()

});


//any route in here is pre pended with /auth
router.get('/', (req, res) => {
    res.json({
        message: 'authentication work'
    });
}); /// if may request sa localhost/auth dito muna papasok


router.post('/signup', (req, res, next) => { //papasok dito kapag localhost/auth/signup/ na may request na username at password
    const result = Joi.validate(req.body, schema); // check if tama yung password
    if (result.error === null) { // pag may if kung na yung password
        users.findOne({ // ichecheck naman kung nasa database naba?
            username: req.body.username // ichecheck naman kung nasa database naba?
        }).then(user => { // ichecheck naman kung nasa database naba?
            if (user) { // pagmeron error na magpapakita
                const error = new Error('The Username is already taken');
                next(error);
            } else {
                bcrypt.hash(req.body.password, 12).then(hashedPassword => { // pagwalang katulad na username ihahashed yung username
                    const newUser = { // gawa ng json file
                        username: req.body.username,
                        password: hashedPassword
                    };
                    users.insert(newUser).then(insertedUser => { // insert sa data yung json na newUser
                        delete insertedUser.password;
                        res.json(insertedUser); // response sa console yung inserterUser
                    });
                });

            }
        });
    } else {
        next(result.error); // kung mali yung validation sa joi
    }
});
module.exports = router; //kita itong file na ito sa boung folder