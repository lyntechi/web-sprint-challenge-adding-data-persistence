const express = require("express");
const db = require("../data/db-config");
const router = express.Router();
const Projects = require("./project-model");

router.get("/", (req, res) => {
  Projects.getAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.post("/", (req, res) => {
  const projectData = req.body;
  Projects.add(projectData)
    .then((project) => {
      res.status(201).json(project);
    
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to create new project", error: err.message });
    });
});

module.exports = router;
