// Setting up connection to mySQL
// Dependencies

<<<<<<< HEAD
var Sequelize = require("sequelize");

var mysqlUser = {
  "database": "NBA_Stats",
  "username": "root",
  "password": "alttimtal"
}
=======
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "0038ratdog",
  database: "userSignUp_db"
});
>>>>>>> 7201a0bfef78b1905d4035e5a79d5b8ce1bad169

//mysqlUser.password = "Y@nkees1980";

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
