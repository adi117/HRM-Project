const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const EmployeePositionHistory = sequelize.define("EmployeePositionHistory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  employee_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  tableName: "employee_position_history",
  timestamps: false
});

module.exports = EmployeePositionHistory;
