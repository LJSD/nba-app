// This file offers a set of routes for sending users to the various html pages
// Dependencies

var path = require("path");

// Routes
module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
    // index route loads index.html (Home page)
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    // Loads contents of assets folder (css, img, etc)
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../assets/*"));
    });

    // add route loads the myaccount.html page,
    // where users can create new account
    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/myaccount.html"));
    });
};
