var db = require("../models");

module.exports = function(app) {

  app.post("/api/players", function(req, res) {
    db.Players.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
};
