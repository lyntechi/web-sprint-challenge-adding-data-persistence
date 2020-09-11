const express = require("express");
const db = require("../data/db-config");
const server = express();
const welcomeRouter = require("../welcome/welcome-router");
const projectRouter = require("../project/project-router");
const resourceRouter = require("../resource/resource-router");
const taskRouter = require("../task/task-router");
server.use(express.json());

server.use("api/project", projectRouter);
server.use("api/project/resource", resourceRouter);
server.use("api/project/task", taskRouter);
server.use("/", welcomeRouter);

module.exports = server;
