// eslint-disable-next-line no-unused-vars
var db = require("../models");

module.exports = function(app) {
  // Loads port and all other pages

  app.get("/registration", function(req, res) {
    res.render("registration");
  });
  // get chat room page
  app.get("/chat-room", function(req, res) {
    res.render("chat");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
