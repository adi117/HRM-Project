const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Payroll_Component_Type = sequelize.define(
  "Payroll_Component_Type",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("allowance", "basic", "deduction"),
      allowNull: false,
    },
  },
  {
    tableName: "payroll_component_types",
    timestamps: true,
    paranoid: false,
  }
);

module.exports = Payroll_Component_Type;
