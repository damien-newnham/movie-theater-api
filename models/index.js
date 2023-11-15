const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/db.sqlite",
});

const ShowModel = require("./Show");
const UserModel = require("./User");

const Show = ShowModel(sequelize);
const User = UserModel(sequelize);

Show.belongsToMany(User, { through: "watched" });
User.belongsToMany(Show, { through: "watched" });

module.exports = {
  Show,
  User,
  sequelize, // Export the Sequelize instance
};
