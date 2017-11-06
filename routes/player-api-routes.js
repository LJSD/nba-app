var db = require("../models");
module.exports = function(app) {


    // db.Players.findAll({
    //   where: {
    //     pid: '9297'
    //   },
    //   include: [db.Stats]
    // }).then(function(dbPlayers) {
    //   console.log(dbPlayers);
    //   //res.json(dbPlayers);
    // });


   app.get("/api/players", function(req, res) {
    db.sequelize.query("SELECT Stats.date, Stats.points FROM nba.Players INNER JOIN Stats ON Players.pid=9298").then(function(data){
    console.log(data);
    res.json(data);
});

  });

  app.post("/api/players", function(req, res) {
    db.Players.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });

  app.post("/api/stats", function(req, res) {
    db.Stats.create(req.body).then(function(dbStats) {
      res.json(dbStats);
    });
  });

  // added -----------------------------------------------------------
    app.get("/api/stats/:id", function(req, res) {
    db.sequelize.query("SELECT Stats.date, Stats.points, Stats.rebounds, Stats.assists, Stats.steals, Stats.blocks FROM nba.Players INNER JOIN Stats ON Players.pid="+ req.params.id + " limit 10").then(function(data){
    console.log(data);
    res.json(data);
    });
  });
};
