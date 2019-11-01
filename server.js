console.log("test");

require("dotenv").config();
var express = require("express");
const exphbs = require("express-handlebars");
var path = require("path");
var bodyParser = require("body-parser");

var Pusher = require("pusher");

var pusher = new Pusher({
  appId: "889258",
  key: "d2c5476b684157236731",
  secret: "c6e4e0e3251fbdf2c271",
  cluster: "us3",
  encrypted: true
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.post("/comment", function(req, res) {
  console.log(req.body);
  var newComment = {
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  };
  pusher.trigger("flash-comments", "new_comment", newComment);
  res.json({ created: true });
});

// Error Handler for 404 Pages
app.use(function(req, res, next) {
  var error404 = new Error("Route Not Found");
  error404.status = 404;
  next(error404);
});

var db = require("./models");
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
