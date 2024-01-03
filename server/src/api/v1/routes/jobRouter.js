const express = require("express");
const router = express.Router();
const { getDemo } = require("../controllers/jobController");

router.route("/").get(getDemo);

module.exports = router;
