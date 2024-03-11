const { DataTypes } = require('sequelize');
const { db } = require('../database/config.db');

const User = db.define('Users', {
    User_Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    User_RolID: {
        type: DataTypes.INTEGER,
    },
    User_Name: {
        type: DataTypes.STRING,
        require: [true, 'El nombre del usuario es obligatorio'],
    },
    User_NumEmpleado: {
        type: DataTypes.STRING,
        require: [true, 'El numero de empledo es obligatorio'],
    },
    User_Email: {
        type: DataTypes.STRING,
        require: [true, 'El correo es obligatorio'],
    },
    User_Password: {
        type: DataTypes.STRING,
        require: [true, 'El password es obligatorio'],
    },
    User_Status: {
        type: DataTypes.BOOLEAN,
    },
}, {
    tableName: 'Users',
},
{
    defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
    }
});

module.exports = {
    User
};
