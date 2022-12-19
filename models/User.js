const { Sequelize, DataTypes, Model } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_URI)

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: false
})

module.exports = User
