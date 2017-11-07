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

  app.get("/api/stats", function(req,res) {
    db.Players.findAll({include:[db.Stats]}).then(function(stats) {
      console.log(stats.pid)
    })
  })

};
