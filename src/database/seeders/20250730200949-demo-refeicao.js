'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('refeicao', [
      {
        alunoId: 1,
        turma: '1A',
        data_refeicao: new Date('2025-07-28T11:30:00'),
        cardapio: 'Arroz, feijão, frango grelhado e salada de alface',
        responsavel_nome: 'Tia Maria',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        alunoId: 2,
        turma: '1B',
        data_refeicao: new Date('2025-07-28T12:00:00'),
        cardapio: 'Macarrão com carne moída e suco de uva',
        responsavel_nome: 'Tia Sônia',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        alunoId: 3,
        turma: '2A',
        data_refeicao: new Date('2025-07-29T11:40:00'),
        cardapio: 'Feijoada leve, arroz branco e couve refogada',
        responsavel_nome: 'Tia Lúcia',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        alunoId: 4,
        turma: '2B',
        data_refeicao: new Date('2025-07-29T12:10:00'),
        cardapio: 'Purê de batata com carne moída e salada de tomate',
        responsavel_nome: 'Tia Cláudia',
        criado_em: new Date(),
        atualizado_em: new Date(),
      },
      {
        alunoId: 5,
        turma: '3A',
        data_refeicao: new Date('2025-07-30T12:00:00'),
        cardapio: 'Arroz integral, lentilha, frango assado e banana',
        responsavel_nome: 'Tia Fátima',
        criado_em: new Date(),
        atualizado_em: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('refeicao', null, {});
  }
};

