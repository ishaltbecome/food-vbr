const bcrypt = require('bcrypt');

const User = require('../models/Users');

class AuthController {
    async registrationGet(req, res) {
        res.render('registration');
    }
    
    async registrationPost(req, res) {
        const { login, password } = req.body;

        const hashedPassword = bcrypt.hashSync(password, 5);

        await new User({ login:login, password:hashedPassword }).save()
        .then((user) => {
            return res.json(user);
        })
        .catch((err) => {
            console.error('error:', err.name);
            return res.json({error: err});
        });
    }
}

module.exports = new AuthController();
