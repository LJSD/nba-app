var db = require("../models");
module.exports = function(app) {

  app.get("/api/stats:pid", function(req, res) {
    pid = req.params.pid;
    console.log(pid);
    db.sequelize.query("SELECT * FROM Stats WHERE Stats.pid="+pid)
    .then(function(data){
      res.json(data);
    });
  });

  app.get("/api/players", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    // console.log(db.Player);
    db.Players.findAll({
      // where: {
      //   pid: '9298'
      // },
      include: [db.Stats]
    }).then(function(dbPlayers) {
      console.log(dbPlayers);
      res.json(dbPlayers);
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

  app.get("/api/stats/:id", function(req, res) {
    db.sequelize.query("SELECT date, points, rebounds, assists, steals, blocks FROM players INNER JOIN stats ON players.pid=stats.pid where stats.pid=" + req.params.id + " limit 10").then(function(data){
    // db.sequelize.query("SELECT Stats.date, Stats.points, Stats.rebounds, Stats.assists, Stats.steals, Stats.blocks FROM nba.Players INNER JOIN Stats ON Players.pid="+ req.params.id + " limit 10").then(function(data){
    console.log(data);
    res.json(data);
    });
  });

};var db = require("../models");
module.exports = function(app) {

  app.get("/api/stats:pid", function(req, res) {
    pid = req.params.pid;
    console.log(pid);
    db.sequelize.query("SELECT * FROM Stats WHERE Stats.pid="+pid)
    .then(function(data){
      res.json(data);
    });
  });

  app.get("/api/players", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    // console.log(db.Player);
    db.Players.findAll({
      // where: {
      //   pid: '9298'
      // },
      include: [db.Stats]
    }).then(function(dbPlayers) {
      console.log(dbPlayers);
      res.json(dbPlayers);
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

  app.get("/api/stats/:id", function(req, res) {
    db.sequelize.query("SELECT date, points, rebounds, assists, steals, blocks FROM players INNER JOIN stats ON players.pid=stats.pid where stats.pid=" + req.params.id + " limit 10").then(function(data){
    // db.sequelize.query("SELECT Stats.date, Stats.points, Stats.rebounds, Stats.assists, Stats.steals, Stats.blocks FROM nba.Players INNER JOIN Stats ON Players.pid="+ req.params.id + " limit 10").then(function(data){
    console.log(data);
    res.json(data);
    });
  });

};