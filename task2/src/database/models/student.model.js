const { sequelize } = require("..");
const { Sequelize } = require("sequelize");

class Student extends Sequelize.Model {}

Student.init(
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dateBirth: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { sequelize: sequelize, modelName: "student" }
);

module.exports = Student;

