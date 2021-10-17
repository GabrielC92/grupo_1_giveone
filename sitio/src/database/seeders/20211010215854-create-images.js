'use strict';
const images = [
  {
    file: "PRODUCTO1.png",
    productId:1,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO2.png",
    productId:2,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO3.png",
    productId:3,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO4.png",
    productId:4,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO5.png",
    productId:5,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO6.png",
    productId:6,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO7.png",
    productId:7,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO8.png",
    productId:8,
    createdAt : new Date,
    updatedAt : new Date
  }
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Images',images,{});
    
  },

  down: async (queryInterface, Sequelize) => {
    
   await queryInterface.bulkDelete('Images', null, {});
     
  }
};
