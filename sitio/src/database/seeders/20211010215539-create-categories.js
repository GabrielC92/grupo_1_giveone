'use strict';


const categories = [
  {
    name : 'vajilla',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'cubiertos',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'cristaleria',
    createdAt : new Date,
    updatedAt : new Date
  },
  {
    name : 'tazas',
    createdAt : new Date,
    updatedAt : new Date
  }
  
]




module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Categories',categories,{});
    
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
