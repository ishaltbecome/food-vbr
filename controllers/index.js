const User = require('../models/User')
const Role = require('../models/Role')

class Controller {
    indexGet(req, res) {
        res.render('index')
    }

    dashboardGet(req, res) {
        res.render('dashboard/index')
    }

    async userlistGet(req, res) {
        try {
            // const roles = await Role.findAll()
            // const users = await User.findAll({where: {roleId: roles.id}})
            const users = await User.sequelize.query(`
                SELECT users.login, users.roleId
                FROM users, roles
                WHERE users.roleId=roles.id
            `)
            res.json(users)
            // res.render('dashboard/userlist', { users })
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    }
}

module.exports = new Controller()
