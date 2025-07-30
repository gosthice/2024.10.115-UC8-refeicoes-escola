'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('aluno', [
      {
        id: 1,
        nome: 'Ana Beatriz Silva',
        turma: '1A',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        id: 2,
        nome: 'João Pedro Souza',
        turma: '1B',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        id: 3,
        nome: 'Lucas Martins',
        turma: '2A',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        id: 4,
        nome: 'Mariana Oliveira',
        turma: '2B',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        id: 5,
        nome: 'Carlos Henrique Lima',
        turma: '3A',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('aluno', null, {});
  }
};

