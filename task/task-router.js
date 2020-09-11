const express = require("express");
const db = require("../data/db-config");
const router = express.Router();
const Tasks = require("./task-model");

router.get("/", (req, res) => {
  Tasks.getAll()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to retrieve resources", error: err.message });
    });
});


router.post("/", (req, res) => {
    const taskData = req.body;
    Tasks.add(taskData)
      .then((task) => {
        res.status(201).json(task);
      
      })
      .catch((err) => {
        res
          .status(500)
          .json({ message: "Failed to create new task", error: err.message });
      });
  });

module.exports = router;
