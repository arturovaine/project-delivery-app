'use strict';
const db = require('.');

const UserModel = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  }, {
    sequelize: db,
    modelName: 'users',
    timestamps: false,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale);
  }

  return User;
}

module.exports = UserModel;
 