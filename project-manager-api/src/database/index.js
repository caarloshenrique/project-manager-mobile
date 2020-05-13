const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Project = require("../models/Project");

const connection = new Sequelize(dbConfig);

Project.init(connection);

module.exports = connection;
