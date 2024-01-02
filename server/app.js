const express = require("express");
// const swagger = require("./swagger");
const app = express();

const data = {
  name: "worknin",
  site: "job",
};

app.get("/", (req, res) => {
  res.send(data);
});
// swagger(app);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
