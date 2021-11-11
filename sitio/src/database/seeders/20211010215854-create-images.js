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
  },
  {
    file: "PRODUCTO9.png",
    productId:9,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO10.png",
    productId:10,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO11.png",
    productId:11,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO12.png",
    productId:12,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO13.png",
    productId:13,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO14.png",
    productId:14,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO15.png",
    productId:15,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO16.png",
    productId:16,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO17.png",
    productId:17,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO18.png",
    productId:18,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO19.png",
    productId:19,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO20.png",
    productId:20,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO21.png",
    productId:21,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO22.png",
    productId:22,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO23.png",
    productId:23,
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    file: "PRODUCTO24.png",
    productId:24,
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
