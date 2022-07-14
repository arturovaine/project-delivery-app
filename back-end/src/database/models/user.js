module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    { timestamps: false },
  );

  return User;
};
