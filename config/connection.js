// Setting up connection to mySQL
// Dependencies
<<<<<<< HEAD
=======

>>>>>>> 3577a600e4cc9439592887b52ac6df80cddc8bfe
var Sequelize = require("sequelize");

var mysqlUser = {
  "database": "NBA_Stats",
  "username": "root",
  "password": "alttimtal"
}
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
});

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize(mysqlUser.database, mysqlUser.username, mysqlUser.password, {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// Exports the connection for other files to use
module.exports = sequelize;
