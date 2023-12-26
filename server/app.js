const express = require("express");
const app = express();

const data = {
  name: "worknin",
  site: "job",
};

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(4000, () => {
  console.log("worknin");
});
