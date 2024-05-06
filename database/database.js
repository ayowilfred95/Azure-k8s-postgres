const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  database: "freecodecamp",
  username: "freecodecamp1",
  password: "freecodecamp@",
  host: "your-eternal-IP",
  port: "5432",
  dialect: "postgres",
});

module.exports = sequelize;
