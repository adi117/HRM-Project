const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Payroll = sequelize.define(
  "Payroll",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "employees",
        key: "id",
      },
      allowNull: false,
    },
    pay_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    pay_period: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "payrolls",
    timestamps: true,
    paranoid: false,
  }
);

module.exports = Payroll;
