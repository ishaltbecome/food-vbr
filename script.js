require('dotenv').config()
const { Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize(process.env.DB_URI)
const Role = require('./models/Role')
const User = require('./models/User')

// Role.bulkCreate([{role: 'ADMIN'}, {role: 'EMPLOYEE'}, {role: 'CANTEEN'}])
User.create({login: '401930', password: 'ybrjkfq', roleId: 3})