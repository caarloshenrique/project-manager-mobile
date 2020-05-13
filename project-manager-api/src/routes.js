const express = require("express");

const ProjectController = require("./controllers/ProjectController");

const routes = express.Router();

routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.store);
routes.delete("/projects/:project_id", ProjectController.delete);

module.exports = routes;
