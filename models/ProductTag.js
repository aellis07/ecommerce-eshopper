const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product", // 'Product' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
    tagID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag", // 'Tag' refers to table name
        key: "id", // 'id' refers to column name in fathers table
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
