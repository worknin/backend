const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.use("/api/v1", require("./src/api/v1/routes/jobRouter"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
