const express = require("express");
const db = require("../data/db-config");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "welcome to our API" });
});

module.exports = router;
