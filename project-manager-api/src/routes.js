const express = require("express");

const ProjectController = require("./controllers/ProjectController");

const routes = express.Router();

routes.get("/projects", ProjectController.index);
routes.post("/projects", ProjectController.store);
routes.delete("/projects/:project_id", ProjectController.delete);
routes.put("/projects/:project_id", ProjectController.update);

module.exports = routes;
