const { DataTypes } = require("sequelize");
const sequelize = require("../databases/connectDatabase");
const Users = sequelize.define("user", {
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, primaryKey: true },
  password: { type: DataTypes.STRING },
});
Users.sync({ force: true });
module.exports = Users;
