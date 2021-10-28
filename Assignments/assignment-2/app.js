const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  console.log("In first moddleware");
  res.send("<h1>Welcome to User Page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("In user middleware");
  res.send("<h1>Welcome to the home page</h1>");
});

app.listen(3000);
