const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize(require('../db.config'));

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    login: {
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: false
});

module.exports = User;