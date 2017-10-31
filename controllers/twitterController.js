var twitterKeys = require("./keys.js");
var Twitter = require("twitter");
var express = require("express");

var router = express.Router();


router.get("/api/twitter", function(req,res){
	var client = new Twitter(
		twitterKeys
	);
	var params = {screen_name: 'nba'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if (error) throw error;
	  // console.log("got the request!!");
	  res.json(tweets);
	});

})

module.exports = router;
