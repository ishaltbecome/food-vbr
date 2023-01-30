require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const maxAge = 3 * 24 * 60 * 60

function generateToken(login) {
    return jwt.sign({ login }, process.env.SECRET, { expiresIn: maxAge })
}

class AuthController {
    loginGet(req, res) {
        res.render('login')
    }

    async loginPost(req, res) {
        const { login, password } = req.body

        try {
            const user = await User.findOne({ where: { login } })
            if (user) {
                const auth = await bcrypt.compare(password, user.password)
                if (auth) {
                    const token = generateToken(login)
                    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 })
                    res.json(user)
                }
                else res.json({ message: "Неверный пароль" })
            }
            else res.json({ message: "Пользователь не существует" })
        } catch (err) {
            res.json(err)
        }
    }

    async logoutGet(req, res) {
        res.cookie('jwt', '', { maxAge: 1 })
        res.redirect('/login')
    }
}

module.exports = new AuthController()
