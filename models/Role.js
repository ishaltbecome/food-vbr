const { Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URI)

const Role = sequelize.define('roles', {
    role: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Role
