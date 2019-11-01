module.exports = function(sequelize, DataTypes) {
  var Registration = sequelize.define("Registration", {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  });
  return Registration;
};
