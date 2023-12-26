const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to worknin");
});

app.listen(4000, () => {
  console.log("worknin");
});
