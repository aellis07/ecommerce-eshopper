// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL(8, 4), allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false, default: 10 },
    categoryID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Category", // 'category' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
