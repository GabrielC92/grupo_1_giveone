'use strict';
const products = require('../../data/products_db.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Products',products,{});
    
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('Products', null, {});
     
  }
};
