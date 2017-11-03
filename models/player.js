module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Players", {
    // Giving the player model a name of type STRING
    player_name: DataTypes.STRING,
    age: DataTypes.STRING,
    birthCountry: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    height: DataTypes.STRING,
    position: DataTypes.STRING,
    weight: DataTypes.STRING
  }, {
    freezeTableName: true
  });

  return Player;
};
