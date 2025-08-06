const { DataTypes} = require('sequelize');
const { sequelize } = require('../config/db.postgresql.js');

const User = sequelize.define('User',{
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},
{
    tableName: 'users',
    underscored: true,
    timestamps: true
}
) 

module.exports = User;