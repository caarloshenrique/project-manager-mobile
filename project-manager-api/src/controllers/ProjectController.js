const Project = require("../models/Project");

module.exports = {
  async delete(req, res) {
    const { project_id } = req.params;

    const project = await Project.findByPk(project_id);

    if (!project) {
      return res.status(400).json({ error: "Project not found" });
    }

    await project.destroy(project);

    return res.json();
  },

  async index(req, res) {
    const projects = await Project.findAll();

    return res.json(projects);
  },

  async store(req, res) {
    const { name, price } = req.body;

    const project = await Project.create({
      name,
      price,
    });

    return res.json(project);
  },
};
