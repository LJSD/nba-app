// Dependencies

//Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "User" model that matches up with DB
var User = sequelize.define("account", {
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false
});

// Syncs with DB
User.sync();

// Makes the User Model available for other files (will also create a table)
module.exports = User;
