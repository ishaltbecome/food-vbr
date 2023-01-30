require('dotenv').config()
const bcrypt = require('bcrypt')
const { Sequelize, DataTypes } = require('sequelize')

const Role = require('./Role')

const sequelize = new Sequelize(process.env.DB_URI)

const User = sequelize.define('users', {
    login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    }
}, {
    timestamps: false,
    hooks: {
        beforeCreate: async (user, options) => {
            const hashedPassword = await bcrypt.hash(user.password, 5)
            user.password = hashedPassword
        }
    }
})

module.exports = User
