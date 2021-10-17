'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category,{
        as :'category',
        foreignKey: 'categoryId'
      })
      Product.hasMany(models.Image, {
        as : 'images'
      })
      Product.belongsToMany(models.User, {
        as : 'compras',
        through: 'product_users',
        foreignKey: 'productId',

        otherKey: 'userId'
      })
      
    }
  };
  Product.init({
    name: DataTypes.STRING(100),
    price: DataTypes.INTEGER,
    description: DataTypes.STRING(500),
    discount: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};