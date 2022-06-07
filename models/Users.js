const { DataTypes } = require("sequelize");
const sequelize = require("../databases/connectDatabase");
const jwt = require("jsonwebtoken");
const Users = sequelize.define("user", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, primaryKey: true },
  password: { type: DataTypes.STRING },
}, {
  getterMethods : {
    getJWTToken () {
      return jwt.sign(
        { email: this.email, user: this.name },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRE,
        }
      );
    }
  }
});
Users.sync();
module.exports = Users;
