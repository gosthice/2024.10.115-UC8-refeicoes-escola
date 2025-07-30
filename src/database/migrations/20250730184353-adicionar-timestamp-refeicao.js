'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('refeicao', 'criado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW  // pegar a data de agora
    });

    await queryInterface.addColumn('refeicao', 'atualizado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW  // pegar a data de agora
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('refeicao', 'criado_em');
    await queryInterface.removeColumn('refeicao', 'atualizado_em');
  }
};

