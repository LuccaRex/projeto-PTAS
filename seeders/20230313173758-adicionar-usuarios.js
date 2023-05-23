'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [
      {nome: 'John Doe'},
      {nome: 'Luccao'},
      {nome: 'WillianWill'},
      {nome: 'MariMari'},
      {nome: 'KaKau'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
