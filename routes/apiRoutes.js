var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.post("/api/login", function(req, res) {
    const userCredentials = req.body;
    console.log("request body", userCredentials);
    db.User.findOne({
      where: {
        password: userCredentials.password,
        email: userCredentials.email
      }
    }).then(function(dbUser) {
      console.log("found User: ", dbUser);
      res.json(dbUser);
    });
  });

  app.post("/api/signUp", function(req, res) {
    console.log("this is signup");
    db.User.create(req.body).then(function(dbUser) {
      console.log("registration", dbUser);
      res.json(dbUser);
    });
  });
  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
