module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.beforeCreate("Teste", () => {
    console.log("Antes de criar");
  });

  User.afterCreate("SendEmail", async user => {
    console.log(user);
    console.log("Enviando e-mail");
  });

  return User;
};
