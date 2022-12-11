const { Sequelize, DataTypes, Model } = require('sequelize');

class Users extends Model {}

Users.init({
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
    tableName: 'users'
});

module.exports = Users;