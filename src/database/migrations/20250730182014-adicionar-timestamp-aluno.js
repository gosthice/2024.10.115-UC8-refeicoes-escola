'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('aluno', 'criado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW  // pegar a data de agora
    });

    await queryInterface.addColumn('aluno', 'atualizado_em', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW  // pegar a data de agora
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('aluno', 'criado_em');
    await queryInterface.removeColumn('aluno', 'atualizado_em');
  }
};
