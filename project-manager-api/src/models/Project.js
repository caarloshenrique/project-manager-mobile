const { Model, DataTypes } = require("sequelize");

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.NUMERIC(6, 2),
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = Project;
