'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.createTable('refeicao', {
      alunoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'aluno',
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },

      turma: {
        type: Sequelize.STRING,
        allowNull: false
      },

      data_refeicao: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      cardapio: {
        type: Sequelize.STRING(180),
        allowNull: false
      },

      responsavel_nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('refeicao');

  }
};
