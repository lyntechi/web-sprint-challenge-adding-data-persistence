const express = require("express");
const db = require("../data/db-config");
const router = express.Router();
const Resource = require("./resource-model");

router.get("/", (req, res) => {
  Resource.getAll()
    .then((resource) => {
      res.json(resource);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to retrieve resources", error: err.message });
    });
});


router.post("/", (req, res) => {
    const resourceData = req.body;
    Resource.add(resourceData)
      .then((resource) => {
        res.status(201).json(resource);
      
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Failed to create new task", error: err.message });
      });
  });

module.exports = router;
