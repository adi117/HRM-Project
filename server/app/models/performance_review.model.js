const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Performance_Review = sequelize.define(
  "Performance_Review",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "employees",
        key: "id",
      },
    },
    review_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    reviewer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "performance_reviews",
    timestamps: false,
    paranoid: false,
  }
);

module.exports = Performance_Review;
