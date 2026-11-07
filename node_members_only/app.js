const path = require("node:path");
const express = require("express");
const routes=require('./routes/routes.js');
const passport=require('./passport.js');
const session = require("express-session");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use('/', routes)
app.use(express.static('assets'))



app.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log("app listening on port 3000!");
});