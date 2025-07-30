'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addColumn('usuario', 'criado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW  // pegar a data de agora
    }),

    await queryInterface.addColumn('usuario', 'atualizado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW  // pegar a data de agora
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuario', 'criado_em');
    await queryInterface.removeColumn('usuario', 'atualizado_em');
  }
};
