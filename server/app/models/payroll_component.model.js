const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Payroll_Component = sequelize.define(
  "Payroll_Component",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    payroll_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "payrolls",
        key: "id",
      },
      allowNull: false,
    },
    component_type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "payroll_component_types",
        key: "id",
      },
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "payroll_components",
    timestamps: true,
    paranoid: false,
  }
);

module.exports = Payroll_Component;
